from .db import db
from sqlalchemy.orm import relationship

class Business(db.Model):
    __tablename__ = "businesses"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(80), nullable=False)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    # hours = db.Column(db.String, nullable=False)
    contact = db.Column(db.String, nullable=False)
    category = db.Column(db.String, nullable=False)

    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    # category_id = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)
    # business_image = db.Column(db.Integer, db.ForeignKey("businessimages.id"), nullable=False) #error with seeding. testing
    business_image_url = db.Column(db.String, nullable=False)

    # business_image_relationship = relationship("BusinessImage", back_populates="business")
    # category_id = relationship("Category", back_populates="business")
    review = relationship("Review", back_populates="business", cascade="all, delete-orphan")
    user = relationship("User", back_populates="business")

    def to_dict(self):
        response = {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            # "hours": self.hours,
            "contact": self.contact,
            "owner_id": self.owner_id,
            "category": self.category,
            "business_image_url": self.business_image_url
        }

        return response


# class BusinessImage(db.Model):
#     __tablename__ = "businessimages"

#     id = db.Column(db.Integer, primary_key=True)
#     business_id = db.Column(db.Integer, nullable=False)
#     image_url = db.Column(db.String, nullable=False)

#     business = relationship("Business", back_populates="business_image_relationship")

# class Category(db.Model):
#     __tablename__ = "categories"

#     id = db.Column(db.Integer, primary_key=True)
#     type_name = db.Column(db.String, nullable=False)

#     business = relationship("Business", back_populates="category_id")
