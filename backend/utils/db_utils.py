from datetime import datetime

def make_quiz_record(answers, suggestion):
    return {
        "answers": answers,
        "suggestion": suggestion,
        "created_at": datetime.utcnow()
    }

def make_career_document(title, description, skills=None, salary=None, education=None, growth=None, image=None):
    return {
        "title": title,
        "description": description,
        "skills": skills or [],
        "salary": salary or "",
        "education": education or "",
        "growth_rate": growth or "",
        "image": image or ""
    }

def make_roadmap_doc(career, steps):
    return {
        "career": career,
        "steps": steps
    }

def make_booking(professional, user_name):
    return {
        "professional": professional,
        "user": user_name,
        "created_at": datetime.utcnow()
    }
