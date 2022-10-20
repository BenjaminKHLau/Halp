from flask import Blueprint, jsonify, session, request, redirect
from flask_login import login_required
from app.forms import ReviewForm
from app.models import User, db, Business, Review
from .auth_routes import validation_errors_to_error_messages

review_blueprint = Blueprint('reviews', __name__)


# Delete a Review:
@review_blueprint.route('/<int:reviewId>', methods =["DELETE"])
@login_required
def del_review(reviewId):
    revToDel= Review.query.get(reviewId)
    #if query unsuccessful:
    if not revToDel:
        return{"message": "Review does not exist"}, 404
    db.session.delete(revToDel)
    db.session.commit()
    return {
        "statusCode": 200,
        "message": "Successfully deleted review."
    }
