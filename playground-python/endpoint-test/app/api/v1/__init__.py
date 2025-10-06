from flask import Flask
from .tasks import bp as tasks_bp

def register_v1_blueprints(app: Flask):
    app.register_blueprint(tasks_bp, url_prefix="/api/v1")
