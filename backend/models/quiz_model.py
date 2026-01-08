from extensions import mongo
from bson import ObjectId

def get_question_by_id(qid):
    return mongo.db.questions.find_one({"_id": ObjectId(qid)})

def insert_question(doc):
    return mongo.db.questions.insert_one(doc).inserted_id
