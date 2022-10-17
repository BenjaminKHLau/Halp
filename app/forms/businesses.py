from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError

# from app.models.business import BusinessImage

class BusinessForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    address = StringField('address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = SelectField('state', validators=[DataRequired()])
    # country = StringField('country', validators=[DataRequired()])
    openHours = SelectField('openHours', validators=[DataRequired()])
    closeHours = SelectField('closeHours', validators=[DataRequired()])
    contact = IntegerField('contact', validators=[DataRequired()])
    category = SelectField('category', validators=[DataRequired()])
    businessImage = StringField('businessUrl', validators=[DataRequired()])
