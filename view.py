from flask import Flask, request, send_from_directory
import json
import os

app = Flask(__name__)

root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ui", "build")

@app.route('/<path:path>', methods=['GET'])
def static_proxy(path):
    return send_from_directory(root, path)


@app.route('/', methods=['GET'])
def redirect_to_index():
    return send_from_directory(root, 'index.html')



@app.route("/stat", methods=["POST"])
def strange_job():
    # get url
    data = json.loads(request.data)
    url = data["url"]
    res = [l+"W" for l in url]
    return json.dumps(res)

if __name__ == "__main__":
    app.run(host="192.168.0.85", debug = True)