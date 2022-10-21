from unicodedata import name
from flask import Blueprint, jsonify, session, request, redirect
from app.models import User, db, Business, Review, Category
# , Category
# from app.forms import LoginForm
# from app.forms import SignUpForm
# from app.forms import BusinessHoursForm
from ..forms.businesses import BusinessForm
from ..forms.review import ReviewForm
from .auth_routes import validation_errors_to_error_messages
from flask_login import current_user, login_user, logout_user, login_required
import json

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

    errors = {}

    form = BusinessForm()
    form.data['contact'] = int(form.data['contact'])
    form.category.choices = [cat.type for cat in Category.query.all()]
    form['csrf_token'].data = request.cookies['csrf_token']
    db_name = Business.query.filter_by(name=form.data['name']).first()
    db_description = Business.query.filter_by(description=form.data['description']).first()
    db_address = Business.query.filter_by(address=form.data['address']).first()
    db_contact = Business.query.filter_by(contact=form.data['contact']).first()

    if(db_name):
        errors['name'] = "Name already exists"
    if(db_description):
        errors['description'] = 'Description already exists'
    if(db_address):
        errors['address'] = 'Address already exists'
    if(db_contact):
        errors['contact'] = 'Contact already in use'


    if errors:
        print('a\n\n\n\n\n\na')
        return {'errors': errors}, 400

    if form.validate_on_submit():

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

@business_blueprint.route("/<int:businessId>/edit", methods=["PUT"])
@login_required
def edit_business_root(businessId):

    errors = {}

    form = BusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    form.category.choices = [cat.type for cat in Category.query.all()]
    form.data['contact'] = int(form.data['contact'])

    business_to_edit = Business.query.get(businessId)

    # db_name = Business.query.filter_by(name=form.data['name']).first()
    # db_description = Business.query.filter_by(description=form.data['description']).first()
    # db_address = Business.query.filter_by(address=form.data['address']).first()
    # db_contact = Business.query.filter_by(contact=form.data['contact']).first()

    # if(db_name):
    #     errors['name'] = "Name already exists"
    # if(db_description):
    #     errors['description'] = 'Description already exists'
    # if(db_address):
    #     errors['address'] = 'Address already exists'
    # if(db_contact):
    #     errors['contact'] = 'Contact already in use'


    if errors:
        print('a\n\n\n\n\n\na')
        return {'errors': errors}, 400

    if form.validate_on_submit():

        # business_to_edit = Business(
        business_to_edit.name = form.data['name']
        business_to_edit.description = form.data['description']
        business_to_edit.address = form.data['address']
        business_to_edit.city = form.data['city']
        business_to_edit.state = form.data['state']
            # hours = f"{form.data['openHours']} - {form.data['closeHours']}",
        business_to_edit.contact = form.data['contact']
        business_to_edit.business_image_url = form.data['businessImage']
        business_to_edit.owner_id = current_user.id
        business_to_edit.category = form.data['category']
            # category_id = category_id
        # )

        # db.session.add(business_to_edit)
        print("business to edit", business_to_edit)
        db.session.commit()
        return business_to_edit.to_dict()

@business_blueprint.route("/<int:businessId>", methods=["GET"])
def business_details(businessId):
    print("business id route", businessId)
    business = Business.query.get(businessId)
    if business == None:
        return jsonify({
            "error": "no business found",
            "statusCode": 404,
        }, 404)
    return business.to_dict()


@business_blueprint.route("/<int:businessId>/delete", methods=["DELETE"])
@login_required
def delete_business(businessId):
    business = Business.query.get(businessId)
    # if business == None:
    #     return jsonify({
    #         "error": "no business found",
    #         "statusCode": 404,
    #     }, 404)
    db.session.delete(business)
    db.session.commit()
    return {
        "statusCode": 200,
        "message": "successfully deleted"
    }

#get reviews by business ID
@business_blueprint.route("/<int:businessId>/reviews", methods = ["GET"])
def load_review(businessId):
    response = []
    readingreviews = Review.query.filter_by(businessId=businessId).all()
    print("should be all reviewsn\n\n\n\n\n", readingreviews)
    print("business id", businessId)
    for review in readingreviews:
        response.append(review.to_dict())
    return {"Reviews": response}


# post a review to a business:
@business_blueprint.route("/<int:businessId>/reviews", methods=['POST'])
@login_required
def create_review(businessId):
    business = Business.query.get(businessId)
    if business == None:
        return {"errors": "Business not found"}, 404
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            stars = form.data['stars'],
            review = form.data['review'],
            businessId = businessId,
            userId = current_user.id,
            imageUrl = form.data['imageUrl']
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict(), 201
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# Update review:
@business_blueprint.route('/<int:businessId>/reviews/<int:reviewId>', methods = ["PUT"])
@login_required
def update_review(businessId, reviewId):
    business = Business.query.get(businessId)
    if business == None:
        return {"errors": "Business not found"}, 404
    edittedRev = Review.query.get(reviewId)
    #if query unsuccessful:
    if edittedRev == None:
        return{"errors": "Review does not exist"}, 404
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review_data = json.loads(request.data.decode('utf-8'))
        print("data: ", review_data)
        for k,v in review_data.items():
            setattr(edittedRev, k,v)
        db.session.commit()
        return edittedRev.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400



@business_blueprint.route("/query")
def implement_search():
    searchParams = request.args.get('search')
    print(request.args.get('search'))
    print("\n\n\n\n\n\n\n\nhello", request.query_string)
    category_results = Business.query.filter(Business.category.ilike(f'%{searchParams}%')).all()
    name_results = Business.query.filter(Business.name.ilike(f'%{searchParams}%')).all()
    address_results = Business.query.filter(Business.address.ilike(f'%{searchParams}%')).all()
    city_results = Business.query.filter(Business.city.ilike(f'%{searchParams}%')).all()
    state_results = Business.query.filter(Business.state.ilike(f'%{searchParams}%')).all()
    all_results = [category_results, name_results, address_results, city_results, state_results]
    largest_set = max(all_results, key=len)
    response = [business.to_dict() for business in largest_set]
    print("\n\n\n\n\n\n\n\nhello", response)
    return jsonify(response)
