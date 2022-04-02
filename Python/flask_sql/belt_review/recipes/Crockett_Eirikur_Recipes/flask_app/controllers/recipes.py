from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.user import User
from flask_app.models.recipe import Recipe
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


# ========================================================================================
# ========================================================================================
#                                      Log/Reg Routes
# ========================================================================================
# ========================================================================================

# ========================================================================================
#                                        Page: Login
# ========================================================================================
@app.route('/')
def index():
    if(session.get('first_name') != None):
        return redirect('/dashboard')

    return render_template('index.html')

# ========================================================================================
#                                   Action: Register User
# ========================================================================================
@app.route('/register', methods=['POST'])
def register():

    user = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'password': request.form['password'],
        'confirm_password': request.form['confirm_password']
    }

    if not User.validate_user(user):

        return redirect('/')

    pw_hash = bcrypt.generate_password_hash(request.form['password'])

    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'password': pw_hash
    }
    User.save(data)

    return redirect('/')

# ========================================================================================
#                                      Action: Login
# ========================================================================================
@app.route('/login', methods=['POST'])
def login():
    data = {'email': request.form['email']}
    user = User.get_by_email(data)
    if not user:
        flash('Invalid Email/Password')
        return redirect('/')

    if not bcrypt.check_password_hash(user.password, request.form['password']):
        flash('Invalid Email/Password')
        return redirect('/')
    
    session['user_id'] = user.id
    session['first_name'] = user.first_name
    session['last_name'] = user.last_name
    session['email'] = user.email
    return redirect('/dashboard')

# ===========================================||===========================================
#                                  Action: Logout Session
# ===========================================||===========================================
@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

# ========================================================================================
# ========================================================================================
#                                       Recipe Routes
# ========================================================================================
# ========================================================================================

# ========================================================================================
#                                      Page: Dashboard
# ========================================================================================
@app.route('/dashboard')
def dashboard():
    if(session.get('first_name') == None):
        return redirect('/')

    return render_template('dashboard.html', user_first_name = session['first_name'], user_id = session['user_id'])

# ========================================================================================
#                                     Page: New Recipe
# ========================================================================================
@app.route('/recipe/new')
def new_recipe():
    return

# ========================================================================================
#                                   Action: New Recipe
# ========================================================================================
@app.route('/recipe/create', methods=['POST'])
def new_recipe():
    data = {
        'name': request.form['name'],
        'description': request.form['description'],
        'instructions': request.form['instructions'],
        'under_30': request.form['under_30'],
        'date_made': request.form['date_made']
    }
    Recipe.save(data)
    return

# ========================================================================================
#                                  Page: Get Recipe By ID
# ========================================================================================
@app.route('/recipe/<int:id>')
def recipe_by_id(id):
    data = {
        'id': id
    }
    recipe = Recipe.select_by_id(data)
    return

# ========================================================================================
#                                     Page: Edit Recipe
# ========================================================================================
@app.route('/recipe/<int:id>/edit')
def edit_recipe(id):
    data = {
        'id': id
    }
    recipe = Recipe.select_by_id(data)
    return

# ========================================================================================
#                                   Action: Edit Recipe
# ========================================================================================
@app.route('/recipe/<int:id>/edit/send', methods=['POST'])
def edit_recipe():
    data = {
        'name': request.form['name'],
        'description': request.form['description'],
        'instructions': request.form['instructions'],
        'under_30': request.form['under_30'],
        'date_made': request.form['date_made']
    }
    Recipe.update(data)
    return redirect('/dashboard')

# ========================================================================================
#                                  Action: Delete Recipe
# ========================================================================================
@app.route('/recipe/<int:id>/delete')
def delete_recipe(id):
    data = {
        'id' : id
    }
    Recipe.delete(data)
    return redirect('/dashboard')

