"""Minimaler Flask-Server, der Jinja-Templates rendert.

Start:
    pip install Flask
    python app.py

Dann im Browser: http://127.0.0.1:5000/?name=Alice
"""
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def hello():
    name = request.args.get("name", "")
    return render_template("hello.html", name=name)


if __name__ == "__main__":
    app.run(debug=True)
