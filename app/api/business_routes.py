from flask import Blueprint, jsonify, session, request
from app.models import User, db
# from app.forms import LoginForm
# from app.forms import SignUpForm
# from app.forms import BusinessHoursForm
from flask_login import current_user, login_user, logout_user, login_required

business_blueprint = Blueprint("business_blueprint", __name__)

@business_blueprint.route("/")
def business_root():
    return "Form Page"