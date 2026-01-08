from flask import Blueprint, request, jsonify
from extensions import mongo
from bson import ObjectId
from utils.db_utils import make_career_document

career_bp = Blueprint("career", __name__)

# GET /api/careers  -> fetch careers, optional ?search=
@career_bp.route("/", methods=["GET"])
def list_careers():
    q = {}
    search = request.args.get("search")
    if search:
        q["title"] = {"$regex": search, "$options": "i"}

    cursor = mongo.db.careers.find(q).limit(200)
    out = []
    for c in cursor:
        c["_id"] = str(c["_id"])
        out.append(c)
    return jsonify(out), 200

# POST /api/careers  -> add a career (admin use)
@career_bp.route("/", methods=["POST"])
def add_career():
    data = request.json or {}
    title = data.get("title")
    description = data.get("description", "")
    if not title:
        return jsonify({"msg": "title required"}), 400

    doc = make_career_document(
        title=title,
        description=description,
        skills=data.get("skills"),
        salary=data.get("salary"),
        education=data.get("education"),
        growth=data.get("growth_rate"),
        image=data.get("image"),
    )
    res = mongo.db.careers.insert_one(doc)
    return jsonify({"msg": "added", "id": str(res.inserted_id)}), 201

# GET /api/careers/<id>
@career_bp.route("/<id>", methods=["GET"])
def get_career(id):
    try:
        doc = mongo.db.careers.find_one({"_id": ObjectId(id)})
    except:
        return jsonify({"msg": "invalid id"}), 400
    if not doc:
        return jsonify({"msg": "not found"}), 404
    doc["_id"] = str(doc["_id"])
    return jsonify(doc), 200
