import firebase_admin
from firebase_admin import credentials, auth
from pathlib import Path

firebase_app = None


def initialize_firebase():
    """
    Initialize Firebase Admin SDK only once.
    """

    global firebase_app

    if firebase_app is not None:
        return firebase_app

    # Path to your downloaded Firebase Admin SDK JSON file
    firebase_path = Path("firebase.json")

    if not firebase_path.exists():
        raise FileNotFoundError(
            f"Firebase service account file not found: {firebase_path}"
        )

    cred = credentials.Certificate(str(firebase_path))

    firebase_app = firebase_admin.initialize_app(cred)

    print("✅ Firebase Admin initialized")

    return firebase_app


def verify_token(id_token: str):
    """
    Verify Firebase ID Token and return decoded user information.
    """

    initialize_firebase()

    decoded_token = auth.verify_id_token(id_token)

    return decoded_token
if __name__ == "__main__":
    initialize_firebase()
    print("✅ Firebase Connected Successfully")