from flask import Blueprint, request, jsonify
from app.services import user_service

user_api = Blueprint('user_api', __name__)

@user_api.route('/register', methods=['POST'])
def register_user():
    """
    Endpoint to register a new user.
    """
    data = request.get_json()
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'message': 'Email and password are required.'}), 400

    new_user, message = user_service.create_user(data)

    if not new_user:
        return jsonify({'message': message}), 409 

    return jsonify({'message': message}), 201

@user_api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'message': 'Email and password are required.'}), 400

    user, message = user_service.login_user(data)

    if not user:
        return jsonify({'message': message}), 401

    return jsonify({'message': 'Login successful.'}), 200