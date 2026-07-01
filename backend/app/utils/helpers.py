from datetime import datetime
import uuid

def generate_id():
    return str(uuid.uuid4())

def current_timestamp():
    return datetime.utcnow().isoformat()

def success(data):
    return {
        "success": True,
        "data": data
    }

def error(message):
    return {
        "success": False,
        "message": message
    }