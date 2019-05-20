from flask import Flask, render_template
from datetime import timedelta

app = Flask(__name__, static_folder = 'static')

app.config['DEBUG'] = True
app.config['SEND_FILE_MAX_DEFAULT'] = timedelta(seconds=1)

@app.route('/hello')
def hello_world():
    return 'Hello World!'


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
