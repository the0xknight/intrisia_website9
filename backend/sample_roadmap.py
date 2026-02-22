from pymongo import MongoClient


client = MongoClient("mongodb://localhost:27017/")
db = client["career_guidance"]

roadmaps = [
    {
        "career_key": "software_dev",
        "career": "Software Developer",
        "steps": [
            "Learn programming basics (C / Python)",
            "Understand DSA & problem solving",
            "Build small projects",
            "Learn frameworks (React / Flask)",
            "Apply for internships or jobs"
        ],
        "completed_steps": [],
        "progress": 0
    },
    {
        "career_key": "data_analyst",
        "career": "Data Analyst",
        "steps": [
            "Learn Excel & SQL",
            "Learn Python & Pandas",
            "Understand statistics",
            "Work on data projects",
            "Apply for analyst roles"
        ],
        "completed_steps": [],
        "progress": 0
    },
    {
        "career_key": "machine_learning",
        "career": "Machine Learning Engineer",
        "steps": [
            "Learn Python",
            "Study statistics & linear algebra",
            "Learn ML algorithms",
            "Build ML projects",
            "Deploy ML models"
        ],
        "completed_steps": [],
        "progress": 0
    },
    {
        "career_key": "web_dev",
        "career": "Web Developer",
        "steps": [
            "Learn HTML, CSS, JS",
            "Learn React",
            "Learn backend basics",
            "Build full stack apps",
            "Apply for jobs"
        ],
        "completed_steps": [],
        "progress": 0
    },
    {
        "career_key": "ui_ux",
        "career": "UI/UX Designer",
        "steps": [
            "Learn design basics",
            "Understand UX principles",
            "Learn Figma",
            "Create design portfolio",
            "Apply for design roles"
        ],
        "completed_steps": [],
        "progress": 0
    },
    {
        "career_key": "cyber_security",
        "career": "Cyber Security Analyst",
        "steps": [
            "Learn networking basics",
            "Understand OS & Linux",
            "Learn security fundamentals",
            "Practice on labs",
            "Get certifications"
        ],
        "completed_steps": [],
        "progress": 0
    },
    {
        "career_key": "cloud_engineer",
        "career": "Cloud Engineer",
        "steps": [
            "Learn Linux",
            "Understand networking",
            "Learn AWS/GCP basics",
            "Deploy cloud projects",
            "Get cloud certified"
        ],
        "completed_steps": [],
        "progress": 0
    },
    {
        "career_key": "devops",
        "career": "DevOps Engineer",
        "steps": [
            "Learn Linux & Git",
            "Learn Docker & Kubernetes",
            "Understand CI/CD",
            "Work on DevOps projects",
            "Apply for DevOps roles"
        ],
        "completed_steps": [],
        "progress": 0
    },
    {
        "career_key": "game_dev",
        "career": "Game Developer",
        "steps": [
            "Learn C++ or C#",
            "Understand game physics",
            "Learn Unity / Unreal",
            "Build games",
            "Publish or apply for studios"
        ],
        "completed_steps": [],
        "progress": 0
    },
    {
        "career_key": "mobile_dev",
        "career": "Mobile App Developer",
        "steps": [
            "Learn Java/Kotlin or Flutter",
            "Understand mobile UI",
            "Build mobile apps",
            "Publish apps",
            "Apply for jobs"
        ],
        "completed_steps": [],
        "progress": 0
    },
    {
        "career_key": "ai_researcher",
        "career": "AI Researcher",
        "steps": [
            "Strong math foundation",
            "Learn ML & DL",
            "Read research papers",
            "Publish papers",
            "Join research labs"
        ],
        "completed_steps": [],
        "progress": 0
    },
    {
        "career_key": "product_manager",
        "career": "Product Manager",
        "steps": [
            "Learn product thinking",
            "Understand user needs",
            "Learn Agile & Scrum",
            "Work on case studies",
            "Apply for PM roles"
        ],
        "completed_steps": [],
        "progress": 0
    }
]

if db.roadmaps.count_documents({}) == 0:
    db.roadmaps.insert_many(roadmaps)
    print("✅ Roadmaps inserted successfully")
else:
    print("⚠️ Roadmaps already exist")
