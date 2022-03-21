from flask import Flask, redirect, render_template, request
from user import User
app = Flask(__name__)
app.secret_key = 'axsecdrt87465132fvubgyunh789465132'

@app.route('/')
def display_form():
    return render_template('index.html')

@app.route('/create', methods=["POST"])
def create_user():
    data = {
        'fname':request.form['fname'],
        'lname':request.form['lname'],
        'email':request.form['email']
    }

    id = User.insert(data)

    return redirect('/show/{}'.format(id))

@app.route('/read/all')
def read():
    users = User.select_all()
    return render_template('read_all.html', all_users = users)

@app.route('/read/<int:id>')
def show(id):
    user = User.select_by_id(id)
    print(user)
    return render_template('read_id.html', user_info = user[0])

@app.route('/edit/<int:id>')
def edit(id):
    user = User.select_by_id(id)
    print(user[0])
    return render_template('edit_id.html', user_info = user[0])

@app.route('/update/<int:id>', methods=['POST'])
def update(id):
    fname = request.form['fname'],
    lname = request.form['lname'],
    email = request.form['email']
    print(fname, lname, email)
    User.update(id, fname, lname, email)
    return redirect('/read/{}'.format(id))


@app.route('/delete/<int:id>')
def delete(id):
    User.delete_by_id(id)
    return redirect('/read/all')


if(__name__ == "__main__"):
    app.run(debug = True)