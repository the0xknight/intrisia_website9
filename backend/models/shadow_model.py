from extensions import mongo
from bson import ObjectId

def insert_shadow_session(doc):
    return mongo.db.shadow_sessions.insert_one(doc).inserted_id

def get_sessions_for_mentor(mentor_id):
    return list(mongo.db.shadow_sessions.find({"mentor_id": mentor_id}))
