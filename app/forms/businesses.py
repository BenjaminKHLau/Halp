from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError

# from app.models.business import BusinessImage

states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA",
          "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
          "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
          "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
          "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]

hours = [(0, '12 AM'), (1, '1 AM'), (2, '2 AM'), (3, '3 AM'), (4, '4 AM'), (5, '5 AM'), (6, '6 AM'), (7, '7 AM'), (8, '8 AM'), (9, '9 AM'), (10, '10 AM'), (11, '11 AM'), (12, '12 PM'), (13, '1 PM'), (14, '2 PM'), (15, '3 PM'), (16, '4 PM'), (17, '5 PM'), (18, '6 PM'), (19, '7 PM'), (20, '8 PM'), (21, '9 PM'), (22, '10 PM'), (23, '11 PM')]

cats = ["Entertainment", "Fitness", "Restaurant", "Night Life", "Shopping"]

class BusinessForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    address = StringField('address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = SelectField('state', choices=states, validators=[DataRequired()])
    # country = StringField('country', validators=[DataRequired()])
    openHours = SelectField('openHours', choices=hours, validators=[DataRequired()])
    closeHours = SelectField('closeHours', choices=hours, validators=[DataRequired()])
    contact = IntegerField('contact', validators=[DataRequired()])
    category = SelectField('category', choices=cats, validators=[DataRequired()])
    businessImage = StringField('businessUrl', validators=[DataRequired()])
