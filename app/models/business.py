from .db import db
from sqlalchemy.orm import relationship

class Business(db.Model):
    __tablename__ = "businesses"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    description = db.Column(db.String(255), nullable=False, unique=True)
    address = db.Column(db.String(80), nullable=False, unique=True)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    hours = db.Column(db.String, nullable=False)
    contact = db.Column(db.String, nullable=False, unique=True)

    owner_id = db.Column(db.Integer, nullable=False)
    category_id = db.Column(db.Integer, nullable=False)

    business_image = relationship("BusinessImage", back_populates="business")
    category = relationship("Category", back_populates="business")

class BusinessImage(db.Model):
    __tablename__ = "businessimages"

    id = db.Column(db.Integer, primary_key=True)
    business_id = db.Column(db.Integer, nullable=False)
    image_url = db.Column(db.String, nullable=False)

    business = relationship("Business", back_populates="business_image")

class Category(db.Model):
    __tablename__ = "categories"

    id = db.Column(db.Integer, primary_key=True)
    type_name = db.Column(db.String, nullable=False)

    business = relationship("Business", back_populates="category")
