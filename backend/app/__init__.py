from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import config_by_name

db = SQLAlchemy()

def create_app(config_name):
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(config_by_name[config_name])
    db.init_app(app)

    # Import and register the blueprint
    from .api.user_controller import user_api
    app.register_blueprint(user_api, url_prefix='/api/users')

    with app.app_context():
        from .models.user import User
        db.create_all()

    return app