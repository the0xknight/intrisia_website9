from extensions import mongo
from bson import ObjectId

def insert_career(data):
    return mongo.db.careers.insert_one(data).inserted_id

def find_careers(query, page=1, per_page=20):
    return list(mongo.db.careers.find(query).skip((page-1)*per_page).limit(per_page))
