from flask import Blueprint, request, jsonify
from extensions import mongo
from utils.db_utils import make_booking
from bson import ObjectId

shadow_bp = Blueprint("shadow", __name__)

# POST /api/shadow/book  -> book a session
@shadow_bp.route("/book", methods=["POST"])
def book_session():
    payload = request.json or {}
    professional = payload.get("professional")
    user = payload.get("user", "Guest")
    if not professional:
        return jsonify({"msg":"professional required"}), 400
    rec = make_booking(professional, user)
    res = mongo.db.shadow_bookings.insert_one(rec)
    return jsonify({"msg":"booked","id": str(res.inserted_id)}), 201

# GET /api/shadow/bookings  -> list booked sessions (all)
@shadow_bp.route("/bookings", methods=["GET"])
def bookings():
    cursor = mongo.db.shadow_bookings.find().sort("created_at", -1).limit(200)
    out = []
    for b in cursor:
        b["_id"] = str(b["_id"])
        out.append(b)
    return jsonify(out), 200
