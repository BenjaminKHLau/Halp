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
    {
        "stars": 5,
        "review": "Tables here are so much more worth it than at other clubs!",
        "businessId": 13,
        "userId": 5,
        "imageUrl": "https://www.ravenbarsf.com/wp/wp-content/galleries/vip-tables-1/M21_3440_Hires-scaled.jpg"
    },
    {
        "stars": 4,
        "review": "I had my birthday party here and it was so fun",
        "businessId": 13,
        "userId": 6,
        "imageUrl": "https://www.ravenbarsf.com/wp/wp-content/galleries/vip-tables-1/M21_3406_Hires-scaled.jpg"
    },
    {
        "stars": 2,
        "review": "Very overpriced glasses. Not really worth it.",
        "businessId": 14,
        "userId": 4,
        "imageUrl": "https://assets.macysassets.com/dyn_img/creativepages/SunglassesSEO_Types_Hero_Mobile.jpg"
    },
    {
        "stars": 3,
        "review": "Average sunglasses. Not any different than another department store.",
        "businessId": 14,
        "userId": 6,
        "imageUrl": "https://t3.ftcdn.net/jpg/00/79/14/28/360_F_79142856_KUwopQQvTDocxXCjNaUnYA0oDAqrU2ge.jpg"
    },
    {
        "stars": 5,
        "review": "I would love to come again. Great employees helped me choose the best bracelet for me!",
        "businessId": 15,
        "userId": 7,
        "imageUrl": "https://res.cloudinary.com/kendra-scott/image/upload/q_auto,f_auto,dpr_auto/w_800,c_fit/Catalogs/kendrascott/Fall-1-2022/Model-Images/Kendra-Scott-Vincent-Chain-Bracelet-Gold-00.jpg"
    },
    {
        "stars": 3,
        "review": "I came for some necklaces. Underwhelming for the price.",
        "businessId": 15,
        "userId": 6,
        "imageUrl": "https://i.etsystatic.com/15210578/r/il/916704/3088587465/il_570xN.3088587465_168n.jpg"
    },
    {
        "stars": 5,
        "review": "The fact that this place is open 24 hours a day really enhances the gym experience",
        "businessId": 16,
        "userId": 6,
        "imageUrl": "https://www.24hourfitness.com/content/dam/24-hour-fitness/images/clubs/club_slideshows/821/album1/xlarge/image10.jpg"
    },
    {
        "stars": 3,
        "review": "The pool was kind of plain for the price per month..",
        "businessId": 16,
        "userId": 3,
        "imageUrl": "https://www.24hourfitness.com/content/dam/24-hour-fitness/images/clubs/club_slideshows/930/album1/xlarge/image9.jpg"
    },
    {
        "stars": 5,
        "review": "I had so much fun looking at both water and land animals",
        "businessId": 17,
        "userId": 4,
        "imageUrl": "https://i.guim.co.uk/img/media/ebdab25cfb77f3ecd5469618c7e09026a7255e55/35_0_1800_1080/master/1800.jpg?width=1200&quality=85&auto=format&fit=max&s=2f8b5e5a16789b222ca88d03e7598e9e"
    },
    {
        "stars": 3,
        "review": "The aquarium part was okay compared to others I have been to",
        "businessId": 17,
        "userId": 1,
        "imageUrl": "https://news.wttw.com/sites/default/files/styles/full/public/field/image/PenguinSheddAquariumFBCrop_0.jpg?itok=YqxzQ6-9"
    },
    {
        "stars": 5,
        "review": "For some reason this bread gave me nostalgia",
        "businessId": 18,
        "userId": 5,
        "imageUrl": "https://www.seriouseats.com/thmb/DTnF3ToJfdD14aX4r3RY8c2lTSk=/610x458/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2011__08__20110817-166611-flour-croissants-fb708f60c6b943588a4407033182d8a0.jpg"
    },
    {
        "stars": 5,
        "review": "After coming here, I will get my breakfast from Brian's everyday!",
        "businessId": 18,
        "userId": 7,
        "imageUrl": "https://www.inspiredtaste.net/wp-content/uploads/2016/08/Easy-Chocolate-Croissant-Recipe-2-1200.jpg"
    },
    {
        "stars": 5,
        "review": "Special occasion dinners, like graduations, birthdays etc should be held here!!",
        "businessId": 19,
        "userId": 6,
        "imageUrl": "https://images.chinahighlights.com/allpicture/2021/12/71879439c9ef4d0da835efb6_cut_750x400_39.jpg"
    },
    {
        "stars": 4,
        "review": "The rice here was so tasty",
        "businessId": 19,
        "userId": 4,
        "imageUrl": "https://img.hoodline.com/2021/11/best-chinese-food-san-jose-south-bay-2.webp"
    },
    {
        "stars": 1,
        "review": "Worst gym ever witnessed in my entire life.",
        "businessId": 20,
        "userId": 7,
        "imageUrl": "https://www.thestrength.co/wp-content/uploads/2021/09/how_to_squat-650x433.jpeg"
    },
    {
        "stars": 1,
        "review": "The variety of workout equipment was too low.",
        "businessId": 20,
        "userId": 1,
        "imageUrl": "https://gophersport.com/media/catalog/product/cache/0275eb5569a157a27ce082f07be215e8/G/-/G-70617_TroyRubberCoatedFixedBarbells-6_1.jpg"
    },
    {
        "stars": 1,
        "review": "The gym made me more stressed if anything..",
        "businessId": 21,
        "userId": 2,
        "imageUrl": "https://www.lafitness.com/Pages/images/slide-img/Image-Rotator-3L.jpg"
    },
    {
        "stars": 1,
        "review": "Too crowded and had to fight for benches",
        "businessId": 21,
        "userId": 3,
        "imageUrl": "https://www.lafitness.com/Pages/images/slide-img/Image-Rotator-2L.jpg"
    },
    {
        "stars": 5,
        "review": "All the Justin Bieber songs are here!!",
        "businessId": 22,
        "userId": 5,
        "imageUrl": "https://cdn.vox-cdn.com/thumbor/HErS0EylKhYwpnRh8DXgdDSZuOI=/0x0:1400x1050/1200x900/filters:focal(588x413:812x637)/cdn.vox-cdn.com/uploads/chorus_image/image/63674412/greygoose1_1400x1050.0.jpg"
    },
    {
        "stars": 1,
        "review": "The owner drank our beer that we ordered...",
        "businessId": 22,
        "userId": 3,
        "imageUrl": "https://fastly.4sqi.net/img/general/600x600/37179359_cQA5hR_eTEKF5YnKCcblfiyVpeAoyS8FN8yf-FMxmaQ.jpg"
    },
    {
        "stars": 5,
        "review": "The workers are so nice at this arcade!!",
        "businessId": 23,
        "userId": 2,
        "imageUrl": "https://bloximages.newyork1.vip.townnews.com/lancasteronline.com/content/tncms/assets/v3/editorial/5/50/5507ac16-8e79-11eb-bfc7-c7986e3d57d8/605e50856353e.hires.jpg"
    },
    {
        "stars": 1,
        "review": "Stuffed animal prize selection was very low..",
        "businessId": 23,
        "userId": 4,
        "imageUrl": "https://m.media-amazon.com/images/I/81xObSl3KVL.jpg"
    },
    {
        "stars": 5,
        "review": "The workers will open the claw machine and give you the toy you want! So funny.",
        "businessId": 24,
        "userId": 7,
        "imageUrl": "https://i5.walmartimages.com/asr/6bfac0c9-9c8f-4cf8-8706-2ebcca41b98a.b0e40f328767dea337d246def1059e69.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    {
        "stars": 5,
        "review": "Both the arcade and bowling alley were above average, great place!!",
        "businessId": 24,
        "userId": 6,
        "imageUrl": "https://u-mercari-images.mercdn.net/photos/m79949037154_1.jpg?1665935391"
    },
    {
        "stars": 5,
        "review": "The bread here really did melt in your mouth",
        "businessId": 25,
        "userId": 7,
        "imageUrl": "https://cdn2.hubspot.net/hubfs/2714594/0.%20UBI/Blogposts/lantmannen-unibake-leivonnaispakasteet-ammattilaisille-1.jpg"
    },
    {
        "stars": 4,
        "review": "Will definitely come back for the BLT sandwich",
        "businessId": 25,
        "userId": 6,
        "imageUrl": "https://www.seriouseats.com/thmb/QH0BqtV8mcXWEAyeejECCEtQuRE=/1500x1125/filters:fill(auto,1)/20220811-_ultimate-blt-sandwich-bacon-lettuce-tomato-recipe-AmandaSuarez-heros-d01e6b359b054dd1a63733733ea229b4.JPG"
    },
    {
        "stars": 5,
        "review": "I wish I could eat here for every meal everyday",
        "businessId": 26,
        "userId": 2,
        "imageUrl": "https://4.bp.blogspot.com/_n4wwqfyikkI/SeT67qDnRbI/AAAAAAAAAM8/ywKJ1SZK7ug/s640/SNC12514.JPG"
    },
    {
        "stars": 1,
        "review": "Maybe I got a bad sandwich, but not enjoyable",
        "businessId": 26,
        "userId": 3,
        "imageUrl": "https://media.istockphoto.com/photos/ketchup-sandwiches-not-on-a-table-picture-id183765561?k=20&m=183765561&s=612x612&w=0&h=iY5nV50hcobwEaEJEHMif1cZs4pEUUnVYYrG5KuYB8I="
    },
    {
        "stars": 5,
        "review": "This became my go to nightclub for the weekends",
        "businessId": 27,
        "userId": 3,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHENB70XO1yxWmAYJg2c7CADzSvShPmdtP_BfwSyzRK4o570RY3JYmLGEfJ2ZIBq2IEuA&usqp=CAU"
    },
    {
        "stars": 4,
        "review": "Loved the vibes here, even my mom loved it",
        "businessId": 27,
        "userId": 3,
        "imageUrl": "https://select-static.s3.amazonaws.com/images/9522fdd147217a2cac9e4989049d6011b6d10509.png"
    },
    {
        "stars": 3,
        "review": "Nothing special, will come depending on the occasion",
        "businessId": 28,
        "userId": 5,
        "imageUrl": "https://www.dead.net/sites/g/files/g2000007851/files/dead_site_files/images/19771231_004.jpg"
    },
    {
        "stars": 1,
        "review": "I hated this place, not even in theme",
        "businessId": 28,
        "userId": 4,
        "imageUrl": "https://cdn3.whatculture.com/images/2019/11/bbf612fca6e903fa-600x338.jpg"
    },
    {
        "stars": 4,
        "review": "The tortas here are so tasty, try them out!",
        "businessId": 29,
        "userId": 5,
        "imageUrl": "https://onsandwiches.files.wordpress.com/2011/01/torta-la-victoria-lg.jpg"
    },
    {
        "stars": 1,
        "review": "Food seemed expired to me, hated the vibes around here",
        "businessId": 29,
        "userId": 4,
        "imageUrl": "http://www.dorothy-porker.com/wp-content/uploads/2021/05/Tortas-de-Chilaquiles-Recipe-Comida-Mexicana-Rosa-Cienfuegos-Dorothy-Porker-Foodblog-Highlight.jpg"
    },
    {
        "stars": 5,
        "review": "Crab legs here are tastier than I could have ever imagined",
        "businessId": 30,
        "userId": 4,
        "imageUrl": "https://www.staysnatched.com/wp-content/uploads/2021/08/instant-pot-crab-legs-recipe-1.jpg"
    },
    {
        "stars": 5,
        "review": "Normally I avoid seafood, but this restaurant changed my mind about fish!",
        "businessId": 30,
        "userId": 2,
        "imageUrl": "http://images.summitmedia-digital.com/yummyph/images/2022/03/30/grilledfish.jpg"
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
