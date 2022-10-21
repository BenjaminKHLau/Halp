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
        contact = "2132132133",
        owner_id = 4,
        category = "Bakery",
        business_image_url = "https://thumbs.dreamstime.com/b/bakery-1073563.jpg",
    )
    kyles_bowling = Business(
        name = "Kyle's Bowling",
        description = "Bowling is so fun",
        address = "99 Baker Street",
        city = "Dallas",
        state = "Texas",
        contact = "2132132134",
        owner_id = 5,
        category = "Entertainment",
        business_image_url = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/91/0a/3d/300-bowling.jpg?w=500&h=400&s=1",
    )
    randys_lab = Business(
        name = "Lab",
        description = "Drinking is so fun",
        address = "1 Grey Street",
        city = "Austin",
        state = "Texas",
        contact = "2132132131",
        owner_id = 6,
        category = "Nightlife",
        business_image_url = "https://www.jamesonwhiskey.com/wp-content/uploads/2022/09/Jameson-Fall-1-aspect-ratio-1.02-1.jpg",
    )
    brennons_gym = Business(
        name = "Big People Only",
        description = "Only big people are allowed.",
        address = "2 Blaney Street",
        city = "Arlington",
        state = "Texas",
        contact = "2132132139",
        owner_id = 7,
        category = "Fitness",
        business_image_url = "https://kevsbest.com/wp-content/uploads/2021/01/5-Best-Gyms-in-San-Jose.png",
    )

    db.session.add(bens_bakery)
    db.session.add(kyles_bowling)
    db.session.add(randys_lab)
    db.session.add(brennons_gym)
    db.session.commit()
