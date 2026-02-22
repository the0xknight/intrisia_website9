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

@roadmap_bp.route("/<roadmap_id>", methods=["GET"])
def get_roadmap(roadmap_id):
    user_id = request.args.get("user_id", "guest")

    roadmap = mongo.db.roadmaps.find_one({"_id": roadmap_id})
    if not roadmap:
        return {"error": "Roadmap not found"}, 404

    progress = mongo.db.roadmap_progress.find_one({
        "roadmap_id": roadmap_id,
        "user_id": user_id
    })

    completed_steps = progress["completed_steps"] if progress else []
    total_steps = len(roadmap["steps"])
    percent = int((len(completed_steps) / total_steps) * 100)

    return jsonify({
        "career": roadmap["career"],
        "steps": roadmap["steps"],
        "completed_steps": completed_steps,
        "progress": percent
    })
#
#@roadmap_bp.route("/<roadmap_id>/complete", methods=["POST"])
#def complete_step(roadmap_id):
 #   data = request.json
  #  user_id = data.get("user_id", "guest")
   # step_index = data.get("step_index")

#    if step_index is None:
 #       return {"error": "step_index required"}, 400

#    mongo.db.roadmap_progress.update_one(
#        {"roadmap_id": roadmap_id, "user_id": user_id},
#        {"$addToSet": {"completed_steps": step_index}},
#        upsert=True
 #   )

 #   progress = mongo.db.roadmap_progress.find_one({
#        "roadmap_id": roadmap_id,
#        "user_id": user_id
#    })
#
#    roadmap = mongo.db.roadmaps.find_one({"_id": roadmap_id})
#    percent = int((len(progress["completed_steps"]) / len(roadmap["steps"])) * 100)
#
 #   return jsonify({
  #      "completed_steps": progress["completed_steps"],
   #     "progress": percent
  #  })

@roadmap_bp.route("/complete", methods=["POST"])
def complete_step():
    data = request.json
    career_key = data["career_key"]
    step_index = data["step_index"]

    roadmap = mongo.db.roadmaps.find_one({"career_key": career_key})
    if not roadmap:
        return {"error": "Roadmap not found"}, 404

    completed = roadmap.get("completed_steps", [])
    if step_index not in completed:
        completed.append(step_index)

    progress = int((len(completed) / len(roadmap["steps"])) * 100)

    mongo.db.roadmaps.update_one(
        {"career_key": career_key},
        {"$set": {
            "completed_steps": completed,
            "progress": progress
        }}
    )

    return {"msg": "Step completed"}


