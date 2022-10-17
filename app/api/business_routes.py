from flask import Blueprint, jsonify, session, request
from app.models import User, db, Business, Category
# from app.forms import LoginForm
# from app.forms import SignUpForm
# from app.forms import BusinessHoursForm
from ..forms.businesses import BusinessForm
from flask_login import current_user, login_user, logout_user, login_required

business_blueprint = Blueprint("business_blueprint", __name__)

@business_blueprint.route("")
def business_root():
    return "Form Page"

@business_blueprint.route("", methods=["POST"])
def add_business_root():

    form = BusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        category_id = Category.query.filter_by(type_name=form.data['category']).first().id

        new_business = Business(
            name = form.data['name'],
            description = form.data['description'],
            address = form.data['address'],
            city = form.data['city'],
            state = form.data['state'],
            hours = f"{form.data['openHours']} - {form.data['closeHours']}",
            contact = form.data['contact'],
            business_image = form.data['businessImage'],
            owner_id = request.json['owner_id'],
            category_id = category_id
        )
        # print(request.json['owner_id'])
        db.session.add(new_business)
        db.session.commit()
        # print(current_user.id)





    # print('form errors', form.errors)
    print('form', form.data['name'])
    print('form errors', form.errors)

    # form.name =
    return form.data
