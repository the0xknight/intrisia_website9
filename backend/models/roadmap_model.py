from extensions import mongo

def get_by_career_id(career_id):
    return mongo.db.roadmaps.find_one({"career_id": career_id})
