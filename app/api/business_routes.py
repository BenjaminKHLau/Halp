from flask import Blueprint, jsonify, session, request, redirect
from app.models import User, db, Business
# , Category
# from app.forms import LoginForm
# from app.forms import SignUpForm
# from app.forms import BusinessHoursForm
from ..forms.businesses import BusinessForm
from .auth_routes import validation_errors_to_error_messages
from flask_login import current_user, login_user, logout_user, login_required

business_blueprint = Blueprint("business_blueprint", __name__)

@business_blueprint.route("/")
def business_root():
    """
    Get all businesses route
    """
    response = []
    allBusinesses = Business.query.all()
    for business in allBusinesses:
        print(business.to_dict())
        response.append(business.to_dict())
    return jsonify(response)

@business_blueprint.route("/", methods=["POST"])
@login_required
def add_business_root():

    form = BusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # category_id = Category.query.filter_by(type_name=form.data['category']).first().id

        new_business = Business(
            name = form.data['name'],
            description = form.data['description'],
            address = form.data['address'],
            city = form.data['city'],
            state = form.data['state'],
            # hours = f"{form.data['openHours']} - {form.data['closeHours']}",
            contact = form.data['contact'],
            business_image_url = form.data['businessImage'],
            owner_id = current_user.id,
            category = form.data['category']
            # category_id = category_id
        )

        db.session.add(new_business)
        db.session.commit()
        return new_business.to_dict()
    print("errors", form.errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400
