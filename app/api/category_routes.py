from flask import Blueprint, jsonify
# from app.models import User, db, Business
from app.models.category import Category


category_blueprint = Blueprint("category_blueprint", __name__)

@category_blueprint.route('')
def get_categories():
    """
    Get all categories
    """
    response = []
    allCategories = Category.query.all()
    for cat in allCategories:
        response.append(cat.to_dict())
    return jsonify(response)
