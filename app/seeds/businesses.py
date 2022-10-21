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
        state = "TX",
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
        state = "TX",
        contact = "2132132134",
        owner_id = 5,
        category = "Entertainment",
        business_image_url = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/91/0a/3d/300-bowling.jpg?w=500&h=400&s=1",
    )
    randys_lab = Business(
        name = "Randy's Lab",
        description = "Come here to be seen.",
        address = "1 Grey Street",
        city = "Jersey City",
        state = "NJ",
        contact = "2132132131",
        owner_id = 6,
        category = "Nightlife",
        business_image_url = "https://www.jamesonwhiskey.com/wp-content/uploads/2022/09/Jameson-Fall-1-aspect-ratio-1.02-1.jpg",
    )
    brennons_gym = Business(
        name = "Brennon's Gym",
        description = "Get muscles or just have fun working out",
        address = "2 Blaney Street",
        city = "Arlington",
        state = "TX",
        contact = "2132132139",
        owner_id = 7,
        category = "Fitness",
        business_image_url = "https://kevsbest.com/wp-content/uploads/2021/01/5-Best-Gyms-in-San-Jose.png",
    )
    daves_chicken = Business(
        name = "Dave's Hot Chicken",
        description = "Get spicy chicken here",
        address = "1 Convoy Street",
        city = "San Diego",
        state = "CA",
        contact = "6692132139",
        owner_id = 4,
        category = "Restaurant",
        business_image_url = "https://chefsavvy.com/wp-content/uploads/chicken-parmesan-tenders-500x500.jpg",
    )
    hot_dog = Business(
        name = "Mai Hot Dogs",
        description = "Get your meat here! Sausages offered as well",
        address = "4 Capital Street",
        city = "San Mateo",
        state = "CA",
        contact = "6642132139",
        owner_id = 5,
        category = "Restaurant",
        business_image_url = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3de2f11-07ce-446f-bdde-d92fe1c7bea2/dec8hcm-3d411fba-30fa-4774-95f0-2aa96397905c.jpg/v1/fill/w_1063,h_752,q_70,strp/umai_by_afurerucolors_dec8hcm-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEzMiIsInBhdGgiOiJcL2ZcL2IzZGUyZjExLTA3Y2UtNDQ2Zi1iZGRlLWQ5MmZlMWM3YmVhMlwvZGVjOGhjbS0zZDQxMWZiYS0zMGZhLTQ3NzQtOTVmMC0yYWE5NjM5NzkwNWMuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ebyHvYbsovMTDv-QgdzpYDmhpjVXZaiNo_WiI_9rVyk",
    )
    bloom = Business(
        name = "BloomingHart",
        description = "Designer clothing for those of refined taste",
        address = "1777 Nathaniel Way",
        city = "Waco",
        state = "TX",
        contact = "5092132139",
        owner_id = 6,
        category = "Shopping",
        business_image_url = "https://www.insider-trends.com/wp-content/uploads/2017/12/1.-Retail-Experience-Luxury-Brand-Store-737x490.jpeg",
    )
    shoes = Business(
        name = "Shoe Castle",
        description = "Find the brand best for your feet",
        address = "1776 Harrison Way",
        city = "Riverside",
        state = "NY",
        contact = "4322132139",
        owner_id = 7,
        category = "Shopping",
        business_image_url = "https://fastly.4sqi.net/img/general/600x600/650003_v9qWzke4CGqPFmWJAgPzy61a6FOZDRn7kK-lko5cQWs.jpg",
    )
    nomikai = Business(
        name = "Yesmikai",
        description = "The best bar and club in town",
        address = "17 Main Avenue",
        city = "Seattle",
        state = "WA",
        contact = "1112132139",
        owner_id = 7,
        category = "Nightlife",
        business_image_url = "https://workinjapan.today/wp-content/uploads/2019/06/pixta_14296229_M-1.jpg",
    )
    piano = Business(
        name = "Daniel's Pianos",
        description = "Get your machines here!",
        address = "11 Michael Street",
        city = "San Diego",
        state = "CA",
        contact = "9092132139",
        owner_id = 3,
        category = "Shopping",
        business_image_url = "https://www.vivacemusic.com.au/wp-content/uploads/2020/04/website-preview.jpg",
    )
    butter = Business(
        name = "Brenda and Butter",
        description = "The bread and butter here mesh better than anywhere else",
        address = "11 Watermelon Street",
        city = "Sunnyvale",
        state = "CA",
        contact = "4072132139",
        owner_id = 4,
        category = "Bakery",
        business_image_url = "https://img.bizbash.com/files/base/bizbash/bzb/image/2019/02/36452e720502e4da486d2f9f6b48a7bb.png?auto=format%2Ccompress&q=70",
    )
    golfing = Business(
        name = "Phil's Golf",
        description = "The grass is greener than anywhere else!!",
        address = "11 Rock Street",
        city = "Kansas City",
        state = "MO",
        contact = "4222132139",
        owner_id = 5,
        category = "Entertainment",
        business_image_url = "https://sanjosespotlight.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/04/21163107/topgolf2-1024x768.jpg",
    )
    cigars = Business(
        name = "Tricia's Club",
        description = "You will have the time of your life in this lounge",
        address = "22 Bernie Street",
        city = "Trenton",
        state = "NJ",
        contact = "9087703421",
        owner_id = 6,
        category = "Nightlife",
        business_image_url = "https://d34ojwe46rt1wp.cloudfront.net/wp-content/uploads/2018/01/arena3.jpg",
    )
    steph = Business(
        name = "Sunglass House",
        description = "The best frames with the best brow bars!",
        address = "1 Morning Street",
        city = "Cupertino",
        state = "CA",
        contact = "9907703421",
        owner_id = 7,
        category = "Shopping",
        business_image_url = "https://images.asos-media.com/products/ray-ban-round-sunglasses-with-metal-brow-bar/6665266-3?$n_640w$&wid=513&fit=constrain",
    )
    eeeey = Business(
        name = "Jewelry Deluxe",
        description = "Ascendant Jewelry",
        address = "88 Boulder Street",
        city = "Sussex",
        state = "ND",
        contact = "9667703421",
        owner_id = 4,
        category = "Shopping",
        business_image_url = "https://imageio.forbes.com/specials-images/imageserve/5f22ea1eed07fd6684058bf4/Gold-Jewelry-Store-In-China/960x0.jpg?format=jpg&width=960",
    )
    aay = Business(
        name = "25 Hour Fitness",
        description = "Ascendant Fitness levels, and respectful trainers.",
        address = "18 Mold Street",
        city = "River",
        state = "CA",
        contact = "7777703421",
        owner_id = 5,
        category = "Fitness",
        business_image_url = "https://www.gymgear.com/app/uploads/2020/11/IMG_7995-scaled.jpg",
    )
    zoo = Business(
        name = "Splash Zoo",
        description = "Both a zoo and an aquarium!",
        address = "900 Moffit Street",
        city = "Monty",
        state = "CA",
        contact = "4347703421",
        owner_id = 6,
        category = "Entertainment",
        business_image_url = "https://images.squarespace-cdn.com/content/v1/584ee3cc2994cac9e545aadd/1557174295844-H3Z8HU73N58ZVCRC18PS/Zoos+and+Aquariums",
    )
    lai = Business(
        name = "Brian's Bread",
        description = "Brian serves only the best of doughs",
        address = "9 Pole Street",
        city = "San Jose",
        state = "CA",
        contact = "4097703421",
        owner_id = 7,
        category = "Bakery",
        business_image_url = "https://media-cdn.tripadvisor.com/media/photo-s/1b/15/c6/4a/20191214-151025-largejpg.jpg",
    )
    waiters = Business(
        name = "Win Tai Ping",
        description = "Asian food as authentic as ever",
        address = "4 Montague Street",
        city = "San Francisco",
        state = "CA",
        contact = "5162132139",
        owner_id = 4,
        category = "Restaurant",
        business_image_url = "https://cdn.vox-cdn.com/thumbor/CzFGWd6k016iQ7T7KWleuIPQIlQ=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19304199/gourmet_dumpling_house___rachel_leah_blumenthal.jpg",
    )


    db.session.add(bens_bakery)
    db.session.add(kyles_bowling)
    db.session.add(randys_lab)
    db.session.add(brennons_gym)
    db.session.add(daves_chicken)
    db.session.add(hot_dog)
    db.session.add(bloom)
    db.session.add(shoes)
    db.session.add(nomikai)
    db.session.add(piano)
    db.session.add(butter)
    db.session.add(golfing)
    db.session.add(cigars)
    db.session.add(steph)
    db.session.add(eeeey)
    db.session.add(aay)
    db.session.add(zoo)
    db.session.add(lai)
    db.session.add(waiters)
    db.session.commit()
