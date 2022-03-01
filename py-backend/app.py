from flask import Flask
import random

app = Flask(__name__)

@app.route('/')
def testPYBackend():
    return 'Python backend is running !!!'

@app.route('/getRandomNumber')
def serveRandomNumber():
    return str(random.randint(0, 100))
