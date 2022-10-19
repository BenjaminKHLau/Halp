from app.models import db, Category


# Adds a demo user, you can add other users here if you want
def seed_categories():
    entertainment = Category(type='Entertainment')
    fitness = Category(type='Fitness')
    restaurant = Category(type='Restaurant')
    nightlife = Category(type='Nightlife')
    shopping = Category(type='Shopping')
    bakery = Category(type='Bakery')

    db.session.add(entertainment)
    db.session.add(fitness)
    db.session.add(restaurant)
    db.session.add(nightlife)
    db.session.add(shopping)
    db.session.add(bakery)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
