import os
from flask import Flask, jsonify
from dotenv import load_dotenv

from extensions import mongo, cors
#debugging code present  
load_dotenv()

def create_app():
    app = Flask(__name__)

    # MongoDB config (Atlas or Local)
    app.config["MONGO_URI"] = os.getenv(
        "MONGO_URI",
        "mongodb://localhost:27017/intrisia"
    )

    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "dev-secret")

    # Init extensions
    mongo.init_app(app)
    cors.init_app(app, resources={r"/api/*": {"origins": "*"}})

    # Register blueprints
    from routes.quiz_routes import quiz_bp
    from routes.career_routes import career_bp
    from routes.roadmap_routes import roadmap_bp
    from routes.shadow_routes import shadow_bp

    app.register_blueprint(quiz_bp, url_prefix="/api/quiz")
    app.register_blueprint(career_bp, url_prefix="/api/careers")
    app.register_blueprint(roadmap_bp, url_prefix="/api/roadmaps")
    app.register_blueprint(shadow_bp, url_prefix="/api/shadow")
    

    @app.route("/")
    def index():
        return jsonify({"msg": "Career backend running"}), 200

    return app


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app = create_app()
    app.run(debug=True, host="0.0.0.0", port=port)
