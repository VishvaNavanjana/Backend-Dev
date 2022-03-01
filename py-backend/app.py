from flask import Flask, request
import random
import joblib

app = Flask(__name__)

model = joblib.load('iris-flower-KNN.sav')
flowers = {0: "setosa", 1: "versicolor", 2: "virginica"}

@app.route('/')
def testPYBackend():
    return 'Python backend is running !!!'

@app.route('/getRandomNumber')
def serveRandomNumber():
    return str(random.randint(0, 100))

@app.route('/flower', methods=["POST"])
def flower():
    input_json = request.get_json(force=True)
    custom_data=[]
    for _, val in input_json.items():
        custom_data.append(val)

    result = model.predict([custom_data])

    return flowers[result[0]]
