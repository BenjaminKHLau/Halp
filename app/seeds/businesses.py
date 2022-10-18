from ..models import Business, db
# , BusinessImage, Category

def undo_businesses():
    db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
    db.session.commit()
    
# def seed_business_images():
#     bens_image = BusinessImage(
#         business_id = 1,
#         image_url = 'https://millstonebakery.com/images/20210213_102936crdt.jpg'
#     )
#     db.session.add(bens_image)
#     db.session.commit()
    
# def undo_business_images():
#     db.session.execute('TRUNCATE businessimages RESTART IDENTITY CASCADE;')
#     db.session.commit()
    
# def seed_categories():
#     bakeries = Category(
#         type_name = "Bakery"
#     )
#     db.session.add(bakeries)
#     db.session.commit()
    
# def undo_categories():
#     db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
#     db.session.commit()
    

def seed_businesses():
    bens_bakery = Business(
        name = "Ben's Bakery", 
        description = "Ben's Bakery has lots of pastries and stuff",
        address = "69 Baker Street",
        city = "Plano",
        state = "Texas",
        # hours = "8 am - 5 pm",
        contact = "Ben",
        owner_id = 4,
        category = "Bakery",
        business_image_url = "https://thumbs.dreamstime.com/b/bakery-1073563.jpg",
    )
    db.session.add(bens_bakery)
    db.session.commit()