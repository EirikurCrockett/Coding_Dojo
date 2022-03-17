from flask import Flask, redirect, render_template, request, session
app = Flask(__name__)
app.secret_key = 'zqxwynioliuyjuthsrgsd'

@app.route('/')
def counter():
    if 'counter' in session:
        session['counter'] += 1
    else:
        session['counter'] = int(1)
    return render_template('index.html')

@app.route('/add_two')
def add_two():
    session['counter'] += 1
    return redirect('/')

@app.route('/add_multi', methods=['POST'])
def add_multi():
    print(request.form)
    session['counter'] += int(request.form['add_multi'])
    session['counter'] -= 1
    return redirect('/')



@app.route('/destroy_session')
def destroy():
    session.clear()
    return redirect('/')


if(__name__ == '__main__'):
    app.run(debug = True)