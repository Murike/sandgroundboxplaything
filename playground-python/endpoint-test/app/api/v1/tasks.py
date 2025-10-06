from flask import Blueprint, request
from ..services.task import create_task

bp = Blueprint("tasks", __name__, url_prefix="/tasks")

@bp.post("/create/<data>")
def create_task_endpoint(data: str):
    payload = request.get_json(silent=True) or {}
    new_task = create_task("default name", data)
    return new_task

@bp.delete("/delete/<id>")
def delete_task_endpoint(id: int):
    print("Some task deletion here")
    return 'Success', 200
