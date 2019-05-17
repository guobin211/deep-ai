from flask import Flask, render_template

app = Flask(__name__, static_folder = 'static')


@app.route('/hello')
def hello_world():
    return 'Hello World!'


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
