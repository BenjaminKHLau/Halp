from tokenize import String
from flask import Flask
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    review = StringField('review', validators=[DataRequired()])
    stars = IntegerField('stars', validators=[DataRequired()])
    imageUrl = StringField('reviewUrl', validators=[DataRequired()])
