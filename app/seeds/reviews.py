from ..models import Review, db


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()


def seed_reviews():
    reviewsArray = [{
        "stars": 5,
        "review": "Good bread",
        "businessId": 1,
        "userId": 1,
        "imageUrl": "https://static01.nyt.com/images/2013/03/03/magazine/03wmt1/03wmt1-articleLarge-v2.jpg?year=2013&h=453&w=600&s=a17b1fd9a5c5b0e8ffac0039cee9ef7a2f0eb929e810e3c1968d0b6a4a4997b4&k=ZQJBKqZ0VN&tw=1"
    },
    {
        "stars": 4,
        "review": "Bread is good",
        "businessId": 1,
        "userId": 2,
        "imageUrl": "https://hips.hearstapps.com/hmg-prod/images/homemade-bread-horizontal-1547759080.jpg?crop=0.671xw:1.00xh;0.0801xw,0&resize=640:*"
    },
    {
        "stars": 3,
        "review": "Average bread to be honest",
        "businessId": 1,
        "userId": 3,
        "imageUrl": "https://images-gmi-pmc.edge-generalmills.com/da2abda1-fae1-4782-b65f-93868ca5bd40.jpg"
    },
    {
        "stars": 5,
        "review": "Lanes are pristine",
        "businessId": 2,
        "userId": 4,
        "imageUrl": "https://www.wsrpd.com/wp-content/uploads/2017/02/bowling-5.jpg"
    },
    {
        "stars": 3,
        "review": "Bowlers here are okay",
        "businessId": 2,
        "userId": 1,
        "imageUrl": "https://pdxparent.com/wp-content/uploads/2022/01/BowlingFeaturedImage1500x750CourtesyCrystalSingPhotos.jpg"
    },
    {
        "stars": 1,
        "review": "Bowling pins too old",
        "businessId": 2,
        "userId": 2,
        "imageUrl": "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/pljkzswg/0e4472ab-73cf-40fa-b876-5884867373d1"
    },
    {
        "stars": 1,
        "review": "Bad vibes",
        "businessId": 3,
        "userId": 4,
        "imageUrl":"https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.purenightclub408.com/wp-content/uploads/2020/03/03.06.2020-3LAU-72.jpg"
    },
    {
        "stars": 2,
        "review": "Boring dancers",
        "businessId": 3,
        "userId": 5,
        "imageUrl": "https://media.newyorker.com/photos/5909601dc14b3c606c105b78/16:9/w_1280,c_limit/130930_r24027.jpg"
    },
    {
        "stars": 5,
        "review": "I love relaxing here",
        "businessId": 3,
        "userId": 7,
        "imageUrl": "https://static.wixstatic.com/media/d8fc26_987bc1bae5594129a2b1c69b1a8660d0~mv2.jpg/v1/fill/w_638,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20190711_Legacy%20Shoot-28.jpg"
    },
    {
        "stars": 5,
        "review": "Equipment is so shiny",
        "businessId": 4,
        "userId": 1,
        "imageUrl": "https://i0.wp.com/calmatters.org/wp-content/uploads/2020/08/gym.jpg?fit=2121%2C1066&ssl=1"
    },
    {
        "stars": 2,
        "review": "The people are too strong",
        "businessId": 4,
        "userId": 6,
        "imageUrl": "https://s.abcnews.com/images/US/fitness-mania-gym-01-zp-jef-200715_1594840904303_hpMain_16x9_992.jpg"
    },
    {
        "stars": 5,
        "review": "The group classes are fun",
        "businessId": 4,
        "userId": 5,
        "imageUrl": "https://i0.wp.com/www.yogabasics.com/yogabasics2017/wp-content/uploads/2014/12/gentle-yoga-class.jpeg?fit=1080%2C720&amp;ssl=1"
    },
    {
        "stars": 5,
        "review": "Good chicken, never experienced it before.",
        "businessId": 5,
        "userId": 1,
        "imageUrl": "https://easychickenrecipes.com/wp-content/uploads/2019/06/featured-fried-chicken-sandwich-recipe-reshoot.jpg"
    },
    {
        "stars": 2,
        "review": "Chicken is boring meat",
        "businessId": 5,
        "userId": 3,
        "imageUrl": "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/07/chicken-sandwich-with-mayo-500x500.jpg"
    },
    {
        "stars": 4,
        "review": "Would love to come again and again!!",
        "businessId": 5,
        "userId": 2,
        "imageUrl": "https://charlotte.axios.com/wp-content/uploads/2021/01/FullSizeRender-2-scaled.jpeg"
    },
    {
        "stars": 1,
        "review": "Very overcooked, not very welcoming either",
        "businessId": 6,
        "userId": 4,
        "imageUrl": "https://www.visitpasadena.com/imager/s3_us-west-1_amazonaws_com/pasadena-2020/images/Food-Drink/dirt-dog4_c3cc3d3e99a0496ea9909ca43528d03d.jpg"
    },
    {
        "stars": 2,
        "review": "Could be better, the wait was so long",
        "businessId": 6,
        "userId": 3,
        "imageUrl": "https://media.timeout.com/images/103397051/image.jpg"
    },
    {
        "stars": 5,
        "review": "This place is just more delicious each bite",
        "businessId": 6,
        "userId": 2,
        "imageUrl": "https://static.wixstatic.com/media/1dd8f8_8789f5e1b6b94ae4b089519473452122~mv2.jpg/v1/fill/w_640,h_512,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/1dd8f8_8789f5e1b6b94ae4b089519473452122~mv2.jpg"
    },
    {
        "stars": 1,
        "review": "Why are the employees so obnoxious here??",
        "businessId": 7,
        "userId": 3,
        "imageUrl": "https://image.cnbcfm.com/api/v1/image/106076143-1565697934801compaq-laptop-used-by-jennifer-aniston-rachel-green-and-bloomingdales-big-brown-bags-in-friends-season-3-episode-12-1.jpg?v=1565711838"
    },
    {
        "stars": 3,
        "review": "Found what I needed, but nothing special really.",
        "businessId": 7,
        "userId": 2,
        "imageUrl": "https://www.fashionbeans.com/wp-content/uploads/2018/03/belts-18-top-luca.jpg"
    },
    {
        "stars": 5,
        "review": "This store is about to get me into caring about clothing!",
        "businessId": 7,
        "userId": 7,
        "imageUrl": "https://www.northern-scot.co.uk/_media/img/750x0/Z84PPV5HYSPG0USCLX3W.jpg"
    },
    {
        "stars": 1,
        "review": "The selection of footwear here was not sufficient",
        "businessId": 8,
        "userId": 3,
        "imageUrl": "https://assets2.cbsnewsstatic.com/hub/i/r/2018/11/29/12c4f8ec-4031-4691-af78-814bffd8b3c5/thumbnail/1200x630/72c39825a643871b06c08633ac0b736b/sneaker-1.png"
    },
    {
        "stars": 3,
        "review": "A bit intimidating to go inside. Sensory overload.",
        "businessId": 8,
        "userId": 2,
        "imageUrl": "https://alegiscorp.com/wp-content/uploads/2020/09/ShoePalaceAdiddas.jpg"
    },
    {
        "stars": 5,
        "review": "This store successfully changed me into caring about shoes!",
        "businessId": 8,
        "userId": 1,
        "imageUrl": "https://www.nicekicks.com/files/2019/09/kristi-toliver-nike-zoom-kobe-4-protro-asg-2-e1569562775217.jpeg"
    },
    {
        "stars": 5,
        "review": "Never before seen was a more beautiful and luxurious bar!!",
        "businessId": 9,
        "userId": 3,
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/513851e4e4b072b5dece0a39/1405020253914-C4NOKK5VDSACU9UG2AXS/PART_1402642579429_IMG_1965.jpg"
    },
    {
        "stars": 4,
        "review": "The lighting was great, would visit it again.",
        "businessId": 9,
        "userId": 2,
        "imageUrl": "https://www.ultimatehappyhours.com/wp-content/uploads/2020/04/Nomikai-san-jose-happy-hour.jpg?ezimgfmt=rs:382x278/rscb1/ngcb1/notWebP"
    },
    {
        "stars": 5,
        "review": "I don't even go out at night, but this was such an enjoyable place to be",
        "businessId": 9,
        "userId": 1,
        "imageUrl": "https://d.newsweek.com/en/full/1506288/nightclub.jpg?w=1600&h=1200&q=88&f=23ceaaebca6d3505c33910c64b4377f1"
    },
    {
        "stars": 1,
        "review": "Never coming back again. The pianos are weird sounding",
        "businessId": 10,
        "userId": 5,
        "imageUrl": "https://austinkleon.com/wp-content/uploads/2020/12/11176457_339799602895813_1027856341_n-2-600x600.jpg"
    },
    {
        "stars": 4,
        "review": "The ambience was great, music lightly playing in the background.",
        "businessId": 10,
        "userId": 2,
        "imageUrl": "https://img.etimg.com/photo/msid-92981436,imgsize-35528/best-digital-piano-and-keyboards-for-musicians.jpg"
    },
    {
        "stars": 5,
        "review": "I used to be a violin player, but after visiting this store, pianos are now my passion",
        "businessId": 10,
        "userId": 1,
        "imageUrl": "https://occ-0-33-444.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABR-1w2KU68SwDkBS6lAOSWiTTcT3b5D16arLFIWC2AR3bTuD_iqsIzoLkSE8awg6P7WxPc3zMz3v7_JKU0OO37MYHUJKop6bmNAhrR-eUKig-yUvPAe8IENi.jpg?r=48d"
    },
    {
        "stars": 1,
        "review": "All I can say is Ewwwwwww",
        "businessId": 11,
        "userId": 1,
        "imageUrl": "https://www.bakinglab.nl/wp-content/uploads/2019/05/old_bread1_1125_768-550x360.jpg"
    },
    {
        "stars": 4,
        "review": "Very buttery bread",
        "businessId": 11,
        "userId": 5,
        "imageUrl": "https://www.melskitchencafe.com/wp-content/uploads/2013/04/Bread1-Original-PSD.jpg"
    },
    {
        "stars": 5,
        "review": "Everyone should come here for some bread!!",
        "businessId": 11,
        "userId": 1,
        "imageUrl": "https://cdn.cdkitchen.com/recipes/images/2019/10/79444-8883-mx.jpg"
    },
    {
        "stars": 1,
        "review": "The rental of golf clubs are too expensive here...",
        "businessId": 12,
        "userId": 1,
        "imageUrl": "https://i.insider.com/5ca662c26b5265643b4f9813?width=1200&format=jpeg"
    },
    {
        "stars": 4,
        "review": "The grass was actually quite green! Good sights",
        "businessId": 12,
        "userId": 5,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUmWPFh1e7K71VWZduERynidJknfDYOEitsR4Q-KpBGq_SfQYkPDMvuvwKdv31zfXqRYY&usqp=CAU"
    },
    {
        "stars": 5,
        "review": "I loved the vibes here!!!!!! Bring your friends!!!",
        "businessId": 12,
        "userId": 6,
        "imageUrl": "https://www.mercurynews.com/wp-content/uploads/2021/03/SJM-L-TOPGOLF-031-1.jpg?w=1024"
    },
    ]
    for review in reviewsArray:
        newReview = Review(
            stars= review["stars"],
            review=review['review'],
            businessId = review['businessId'],
            userId=review['userId'],
            imageUrl=review['imageUrl']
        )
        db.session.add(newReview)
    db.session.commit()
