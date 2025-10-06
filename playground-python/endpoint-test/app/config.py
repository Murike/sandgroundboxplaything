import os
from selectors import DevpollSelector

class BaseConfig:
    DEBUG = False

class DevelopmentConfig:
    BASE_API_KEY = "Dev aaaaaaa"

class ProductionConfig:
    BASE_API_KEY = "Prod aaaaaaa"

def get_config(name: str | none):
    env_maps = {
        "Development": DevelopmentConfig,
        "Production": ProductionConfig
    }

    return env_maps.get(name or os.getenv("PYTHON_ET_ENV", "Development"), DevelopmentConfig)