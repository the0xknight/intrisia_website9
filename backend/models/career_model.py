from extensions import mongo
from bson import ObjectId

def find_by_id(cid):
    return mongo.db.careers.find_one({"_id": ObjectId(cid)})

def insert_career(doc):
    return mongo.db.careers.insert_one(doc).inserted_id
