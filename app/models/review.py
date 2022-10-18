from app.api.business_routes import business_details
from .db import db
from sqlalchemy.orm import relationship

class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    stars = db.Column(db.Integer, nullable=False)
    review = db.Column(db.String(255), nullable=False)
    businessId = db.Column(db.Integer, db.ForeignKey("businesses.id"))
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    imageUrl = db.Column(db.Integer, nullable=False)

    business = relationship("Business", back_populates="review")
    user = relationship("User", back_populates="review")
    # reviewImage = relationship("ReviewImage", back_populates="review")

    def to_dict(self):
        return {
            "id": self.id,
            "stars": self.stars,
            "review": self.review,
            "businessId": self.businessId,
            "userId": self.userId,
            "imageUrl": self.imageUrl
        }

# class ReviewImage(db.Model):
#     __tablename__ = "reviewImages"

#     id = db.Column(db.Integer, primary_key=True)
#     imageUrl = db.Column(db.Integer, nullable=False)
#     reviewId = db.Column(db.Integer, db.ForeignKey("reviews.id"))

#     review = relationship("Review", back_populates="reviewImage")
