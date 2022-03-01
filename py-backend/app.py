from flask import Flask

app = Flask(__name__)

@app.route('/')
def testPYBackend():
    return 'Python backend is running !!!'

