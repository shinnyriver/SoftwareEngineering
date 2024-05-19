from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def student():
    return render_template('student.html')

@app.route('/score', methods=['POST', 'GET'])
def score():
    if request.method == 'POST':
        score = request.form 
        return render_template('score.html', score=score) 

    
if __name__ == '__main__':
    app.run(debug=True)
    
