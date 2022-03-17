from flask import Flask, redirect, render_template, request, session
app=Flask(__name__)
app.secret_key = 'axsecdrt87465132fvubgyunh789465132'

@app.route('/')
def survey():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
    print(request.form)
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['languages']
    session['comment'] = request.form['comments']
    return redirect('/result/display')

@app.route('/result/display')
def display_result():
    return render_template('result.html')


if(__name__ == "__main__"):
    app.run(debug = True)