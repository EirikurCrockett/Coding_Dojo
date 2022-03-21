from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo

@app.route('/')
def home():
    return redirect('/dojo/directory')

@app.route('/dojo/directory')
def dojo_directory():
    dojo_list = Dojo.select_all()
    return render_template('all_dojos.html', dojos = dojo_list)

@app.route('/dojo/<int:id>')
def dojo_ninjas(id):
    dojo_name = Dojo.select_name_one(id)
    ninjas_info = Ninja.select_all_by_dojo(id)
    return render_template('one_dojo.html', ninjas = ninjas_info, dojo = dojo_name[0]['name'])

@app.route('/ninjas')
def new_ninja():
    dojos_info = Dojo.select_all()
    return render_template('new_ninja.html', dojos = dojos_info)

@app.route('/ninjas/add', methods=['POST'])
def add_ninja():
    data = {
        'fname': request.form['fname'],
        'lname': request.form['lname'],
        'age': request.form['age'],
        'dojo_id': request.form['dojo_id']
    }
    Ninja.save(data)
    return redirect('/dojo/directory')

@app.route('/dojos/add', methods=['POST'])
def add_dojo():
    data = {
        'name': request.form['name']
    }
    Dojo.save(data)
    return redirect('/dojo/directory')