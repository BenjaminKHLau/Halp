from ..models import Review, db


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()


def seed_reviews():
    reviewsArray = [{
        "stars": 5,
        "review": "Good vibes",
        "businessId": 1,
        "userId": 1,
        "imageUrl": "dog.jpeg"
    },
    {
        "stars": 4,
        "review": "Okay vibes",
        "businessId": 1,
        "userId": 1,
        "imageUrl": "cat.jpeg"
    },
    {
        "stars": 3,
        "review": "Average to mid vibes",
        "businessId": 1,
        "userId": 1,
        "imageUrl": "water.jpeg"
    }]

    for review in reviewsArray:
        newReview = Review(
            stars= review["stars"],
            review=review['review'],
            businessId = review['businessId'],
            userId=review['userId'],
            imageUrl=review['imageUrl']
        )
        db.session.add(newReview)
    db.session.commit()
