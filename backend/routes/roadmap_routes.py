from flask import Blueprint, request, jsonify
from extensions import mongo
from utils.db_utils import make_roadmap_doc

roadmap_bp = Blueprint("roadmap", __name__)

# GET /api/roadmaps -> list all
@roadmap_bp.route("/", methods=["GET"])
def list_roadmaps():
    cursor = mongo.db.roadmaps.find().limit(200)
    out = []
    for r in cursor:
        r["_id"] = str(r["_id"])
        out.append(r)
    return jsonify(out), 200

# POST /api/roadmaps -> add new roadmap (admin)
@roadmap_bp.route("/", methods=["POST"])
def add_roadmap():
    data = request.json or {}
    career = data.get("career")
    steps = data.get("steps")
    if not career or not isinstance(steps, list):
        return jsonify({"msg":"career and steps(list) required"}), 400
    doc = make_roadmap_doc(career, steps)
    res = mongo.db.roadmaps.insert_one(doc)
    return jsonify({"msg":"added","id": str(res.inserted_id)}), 201
