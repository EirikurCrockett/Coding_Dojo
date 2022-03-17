from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def default():
    return render_template('index.html', x=8, y=8, color1 = "red", color2 = "black")

@app.route('/4')
def fours():
    return render_template('index.html', x=8, y=4, color1 = "red", color2 = "black")

@app.route('/<int:x>/<int:y>')
def x_by_y(x, y):
    return render_template('index.html', x = x, y = y, color1 = "red", color2 = "black")

@app.route('/<int:x>/<int:y>/<string:color1>')
def x_by_y_color1(x, y, color1):
    return render_template('index.html', x = x, y = y, color1 = color1, color2 = "black")

@app.route('/<int:x>/<int:y>/<string:color1>/<string:color2>')
def x_by_y_color1_color2(x, y, color1, color2):
    return render_template('index.html', x = x, y = y, color1 = color1, color2 = color2)

if __name__=="__main__":
    app.run(debug=True)

