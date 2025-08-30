from flask import Flask, jsonify, request
from flask_cors import CORS

from yapper1 import yapper1_text_generation

app = Flask(__name__)
CORS(app)

@app.route("/api/test", methods=["GET"])
def test():
    return jsonify({"message": "Hello"})

@app.route("/api/yapper1/text", methods=["POST"])
def yapper1_text():
    data = request.get_json()
    query = data.get("query", None)

    if not query:
        return jsonify({"error": "No query provided"}), 400
    
    response = yapper1_text_generation(query)

    return jsonify({"response": response}), 200


if __name__ == "__main__":
    app.run(port=5000, debug=True)