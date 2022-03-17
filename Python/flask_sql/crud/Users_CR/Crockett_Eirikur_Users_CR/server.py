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

    User.insert(data)

    return redirect('/read')

@app.route('/read')
def read():
    users = User.select_all()
    return render_template('read.html', all_users = users)




if(__name__ == "__main__"):
    app.run(debug = True)