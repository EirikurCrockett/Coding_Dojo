from flask import Flask, render_template,redirect
app = Flask(__name__)


@app.route('/')
def default():
    return redirect('/play')


@app.route('/play')
def play():
    return render_template("index.html", times=5, background = 'black')


@app.route('/play/<int:x>')
def times_x(x):
    return render_template("index.html", times=x, background = 'black')


@app.route('/play/<int:x>/<string:color>')
def times_x_with_background(x, color):
    return render_template("index.html", times=x, background = color)







if __name__ == "__main__":
    app.run(debug = True)