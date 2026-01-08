import os
from dotenv import load_dotenv
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY") or os.getenv("SECRET_KEY")
CLOUDINARY = {
    "name": os.getenv("CLOUDINARY_CLOUD_NAME"),
    "api_key": os.getenv("CLOUDINARY_API_KEY"),
    "api_secret": os.getenv("CLOUDINARY_API_SECRET")
}
