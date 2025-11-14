from app import db
from app.models.user import User

def create_user(data):
    """
    Creates a new user and saves them to the database.
    """
    if User.query.filter_by(email=data['email']).first():
        return None, "User with this email already exists."

    new_user = User(
        email=data['email'],
        full_name=data.get('full_name')
    )
    new_user.set_password(data['password'])

    db.session.add(new_user)
    db.session.commit()

    return new_user, "User created successfully."