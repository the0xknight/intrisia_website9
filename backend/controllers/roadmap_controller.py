from extensions import mongo

def get_roadmap_by_career(career_id):
    return mongo.db.roadmaps.find_one({"career_id": career_id})
