from extensions import mongo
from bson import ObjectId

def get_questions():
    out = []
    for q in mongo.db.questions.find({}):
        out.append({
            "id": str(q["_id"]),
            "question": q.get("question"),
            "options": q.get("options", []),
            "domain": q.get("domain")
        })
    return out

def save_response(user_id, answers, result):
    rec = {
        "user_id": ObjectId(user_id),
        "answers": answers,
        "result": result
    }
    return mongo.db.responses.insert_one(rec).inserted_id
