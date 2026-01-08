from flask import jsonify
from functools import wraps
from flask_jwt_extended import verify_jwt_in_request, get_jwt_identity
from extensions import mongo
from bson import ObjectId

def role_required(allowed_roles):
    """
    Decorator to enforce user role(s). allowed_roles can be a list or string.
    Usage:
      @app.route(...)
      @jwt_required()
      @role_required(['admin','mentor'])
    """
    if isinstance(allowed_roles, str):
        roles = [allowed_roles]
    else:
        roles = list(allowed_roles)

    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            try:
                verify_jwt_in_request()
                uid = get_jwt_identity()
                user = mongo.db.users.find_one({"_id": ObjectId(uid)})
                if not user:
                    return jsonify({"msg":"user not found"}), 404
                if user.get("role") not in roles:
                    return jsonify({"msg":"forbidden - role required"}), 403
            except Exception as e:
                return jsonify({"msg":"auth error", "error": str(e)}), 401
            return fn(*args, **kwargs)
        return wrapper
    return decorator
