from flask import Blueprint, jsonify, session, request
from app.models import User, db
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
        print('validated form',form.data['name'])
    # print('form errors', form.errors)
    print('form', form.data['name'])
    print('form errors', form.errors)

    # form.name =
    return form.data
