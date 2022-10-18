from flask import Blueprint, jsonify, session, request, redirect
from app.forms.review import ReviewForm
from app.models import User, db, Business, Review

review_blueprint = Blueprint('reviews', __name__)

@review_blueprint.route('/new', methods = ["GET", "POST"])
def create_new_review(businessId):
    form = ReviewForm()

    if form.validate_on_submit():
        this_Rev = Review.query.get(form.data['review'])
        print(this_Rev)
        written_Review = Review(
            form.data

@review_blueprint.route('/edit')
