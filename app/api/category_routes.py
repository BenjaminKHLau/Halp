from flask import Blueprint, jsonify, request
# from app.models import User, db, Business
from app.models import db, Category
from ..forms.category_form import CategoryForm


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


@category_blueprint.route('', methods=['POST'])
def add_category():
    """
    Add a category
    """
    errors = {}
    form = CategoryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print('Form data is: ',form.data['type'])

    db_type = Category.query.filter_by(type=form.data['type']).first()


    if(db_type):
        errors['type'] = "Type already exists"

    print("A\n\n\n\n\n\n\n\n\n\nA ", errors)
    if errors:
        return {'errors': errors}, 400

    if form.validate_on_submit():

        new_cat = Category(
            type = form.data['type']
        )

        print("A\n\n\n\n\n\n\n\n\n\nA ", new_cat.to_dict())

        db.session.add(new_cat)
        db.session.commit()
        return jsonify(new_cat.to_dict())
