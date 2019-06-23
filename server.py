from flask import Flask
from flask import jsonify
app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
data = [
	{
		"id":1,
		"name":"Анна",
		"poster_src":"./images/Анна.jpg",
		"video_src":"./video/Анна.mp4"
	},
	{
		"id":2,
		"name":"Джокер",
		"poster_src":"./images/Джокер.jpg",
		"video_src":"./video/Джокер.mp4"
	},
	{
		"id":3,
		"name":"Доктор Сон",
		"poster_src":"./images/Доктор_Сон.jpg",
		"video_src":"./video/Доктор_Сон.mp4"
	},
	{
		"id":4,
		"name":"Малефисента",
		"poster_src":"./images/Малефисента.jpg",
		"video_src":"./video/Малефисента.mp4"
	},
	{
		"id":5,
		"name":"Однажды в Голливуде",
		"poster_src":"./images/Однажды_в_Голливуде.jpg",
		"video_src":"./video/Однажды_в_Голливуде.mp4"
	},
	{
		"id":6,
		"name":"Холодное сердце 2",
		"poster_src":"./images/Холодное_сердце_2.jpg",
		"video_src":"./video/Холодное_сердце_2.mp4"
	}]

@app.route('/')
def hello():
	return ('Welcome!')

@app.route('/getData')
def getData():

    response =  jsonify(result=data)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    app.run()