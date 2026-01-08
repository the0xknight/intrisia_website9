from app import create_app
from extensions import mongo
from utils.db_utils import make_career_document, make_roadmap_doc, make_booking, make_quiz_record
from datetime import datetime

app = create_app()
with app.app_context():
    db = mongo.db

    # optional: clear (comment out if you want to keep)
    # db.careers.delete_many({})
    # db.roadmaps.delete_many({})
    # db.shadow_bookings.delete_many({})
    # db.quiz_results.delete_many({})

    # seed careers
    careers = [
        make_career_document("Software Engineer", "Designs and builds software.", ["Python","JS","Algorithms"], "6 LPA", "B.Tech CS", "High",
                             "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"),
        make_career_document("Graphic Designer", "Creates visual concepts.", ["Photoshop","Figma"], "3 LPA", "Diploma/UG", "Medium",
                             "https://cdn-icons-png.flaticon.com/512/3597/3597075.png"),
        make_career_document("Data Scientist", "Analyzes data and builds models.", ["Python","Statistics"], "7 LPA", "B.Sc/CS", "High",
                             "https://cdn-icons-png.flaticon.com/512/4149/4149654.png"),
    ]
    db.careers.insert_many(careers)

    # seed roadmaps
    roadmaps = [
        make_roadmap_doc("Software Engineer", ["Learn CS basics", "Build projects", "Practice DSA", "Internships"]),
        make_roadmap_doc("Graphic Designer", ["Learn design tools", "Create portfolio", "Freelance projects"]),
        make_roadmap_doc("Data Scientist", ["Learn Python & Stats", "Build ML models", "Participate in competitions"])
    ]
    db.roadmaps.insert_many(roadmaps)

    # seed shadow bookings
    db.shadow_bookings.insert_many([
        make_booking("Aarav Patel (Software Engineer)", "Guest User"),
        make_booking("Meera Kapoor (UX Designer)", "Student A"),
    ])

    # seed a quiz result
    db.quiz_results.insert_one(make_quiz_record(["Solving technical problems","Maths or Science","Analyze logically"], "Software Engineer"))

    print("Seeding done.")
