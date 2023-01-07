import json
from flask import Flask, request, render_template
import sqlite3

app = Flask(__name__)

@app.route("/", )
def hello_world():
    return render_template("index.html")


def search_by_name(name):
    conn = sqlite3.connect("test.db")
    c = conn.cursor()
    c.execute("SELECT * FROM test WHERE name =?", (name,))
    user = c.fetchone()
    conn.close()
    return user

@app.route("/search", methods=["POST"])
def search():
    data = request.get_json(force=True)
    name = data["name"]
    result = search_by_name(name)
    
    return json.dumps(result)






