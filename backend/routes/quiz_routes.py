from flask import Blueprint, request, jsonify
from extensions import mongo
from utils.db_utils import make_quiz_record

quiz_bp = Blueprint("quiz", __name__)

# POST /api/quiz/submit  -> save a quiz result (answers + suggestion)
@quiz_bp.route("/submit", methods=["POST"])
def submit_quiz():
    payload = request.json or {}
    answers = payload.get("answers")
    suggestion = payload.get("suggestion", "")
    if not isinstance(answers, list):
        return jsonify({"msg": "answers must be a list"}), 400

    rec = make_quiz_record(answers, suggestion)
    result = mongo.db.quiz_results.insert_one(rec)
    return jsonify({"msg": "saved", "id": str(result.inserted_id)}), 201

# GET /api/quiz/history  -> return all quiz results (most recent first)
@quiz_bp.route("/history", methods=["GET"])
def history():
    cursor = mongo.db.quiz_results.find().sort("created_at", -1).limit(100)
    out = []
    for r in cursor:
        r["_id"] = str(r["_id"])
        out.append(r)
    return jsonify(out), 200
