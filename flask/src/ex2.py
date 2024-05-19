from flask import Flask, render_template

app = Flask(__name__)

@app.route('/score')
def score():
    dict = {'changsu':90, 'jiyoung':70, 'dongguk':80}
    return render_template('score.html', score=dict)

if __name__ == '__main__':
    app.run(debug=True)