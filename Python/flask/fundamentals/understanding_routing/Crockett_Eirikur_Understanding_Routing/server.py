from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello World"

@app.route('/dojo')
def dojo():
    return "Dojo!"

@app.route('/say/<id>')
def say(id):
    return "Hi, {}!".format(str(id))#ninja bonus

@app.route('/repeat/<num>/<word>')
def repeat(num, word):
    repeat = ""
    repeat_for = int(num)#ninja bonus
    for i in range(repeat_for):
        repeat += "{} ".format(str(word))#ninja bonus
    return repeat

#sensei bonus
@app.errorhandler(404)
def not_found(error_code):
    return "Sorry! No response. Try again."



if __name__=="__main__":
    app.run(debug=True)