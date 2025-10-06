from flask import Flask
from .config import get_config

def create_app(config_name: str | None = None) -> Flask:
    app = Flask(__name__, instance_relative_config=True)

    app.config.from_object(get_config(config_name))

    @app.get("/health")
    def health():
        return { "status" : "Ima laive" }, 200

    return app