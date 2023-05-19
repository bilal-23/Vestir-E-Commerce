interface Product {
    _id: string;
    images: string[];
    category: string;
    rating: string;
    size: string;
    description: string;
    title: string;
    type: string;
    trending: boolean;
    original_price: string;
    price: string;
    delivery_time: string;
    reviews: string;
    in_stock: boolean;
}

const men: Product[] = [
    {
        _id: 'be51624b-c4a5-44f2-9c16-69b284e5fd5c',
        images: [
            "https://ik.imagekit.io/averno2301/Vestir/Products/Men/atlas-short-sleeve-shirt-1_i77IbXe1C.webp?updatedAt=1684349592294",
            "https://ik.imagekit.io/averno2301/Vestir/Products/Men/atlas-short-sleeve-shirt-2_zJnR6x_eh.webp?updatedAt=1684349592261"
        ],
        category: 'Men',
        rating: '3.9',
        size: 'L',
        description: 'The perfect summer shirt in our north hills print. With a sunglasses pocket and plastic-free Corozo nut buttons, made from 100% linen. Wear open or closed, either by itself or with a t-shirt underneath.',
        title: 'Atlas Short Sleeve Shirt',
        type: "Shirt",
        trending: false,
        original_price: '1199',
        price: '719',
        delivery_time: '9',
        reviews: '2.9k',
        in_stock: true,
    },
    {
        _id: '7116b8e1-5b68-4b8f-a616-425762e9238zsd',
        title: 'Aventur Elbow Stripe Jumper',
        original_price: '900',
        description:
            `Introducing the Aventur Elbow Stripe Jumper, made from 100% organic cotton with stripe detailing inspired by nautical flags and uniform badges. A relaxed crew neck jumper with an easygoing summer feel, it's perfect for throwing on over a tee. Make it your Spring uniform.`,
        price: '499',
        rating: '4.5',
        size: 'M',
        images: [
            `https://ik.imagekit.io/averno2301/Vestir/Products/Men/Aventur_Elbow_Stripe_Jumper_-_1_Jyt-f97z_.webp?updatedAt=1684349964565`,
            `https://ik.imagekit.io/averno2301/Vestir/Products/Men/Aventur_Elbow_Stripe_Jumper_-_2_el8rpUy6p.webp?updatedAt=1684349964432`
        ],
        category: 'men',
        type: "sweater",
        trending: true,
        reviews: '1.5k',
        in_stock: true,
        delivery_time: '3',
    },
    {
        _id: '4b56b4ef-c361-4c72-b39e-97dee6711bb9',
        title: 'Channel Polo Shirt',
        description: `Made using a textured slub organic cotton, the Channel Stripe shirt is a durable polo, with a nautical twist. Featuring our plastic-free Corozo buttons, it's perfect for sunset dinners by the sea.`,
        images: [
            `https://ik.imagekit.io/averno2301/Vestir/Products/Men/Channel_Polo_Shirt_-1_QyGNeTJrW.webp?updatedAt=1684350118535`,
            `https://ik.imagekit.io/averno2301/Vestir/Products/Men/Channel_Polo_Shirt-2_raP1bsRr7.webp?updatedAt=1684350118623`
        ],
        category: 'Men',
        rating: '3.8',
        size: 'S',
        type: "Shirt",
        trending: false,
        original_price: '1199',
        price: '719',
        delivery_time: '6',
        reviews: '2.4k',
        in_stock: true,
    },
    {
        _id: '556603b0-2c56-4462-848e-448dfc69bc3d',
        images: [
            `https://ik.imagekit.io/averno2301/Vestir/Products/Men/Channel_Stripe_Long_Sleeve_T-Shirt-1_BDneAhgBq.webp?updatedAt=1684350416505`,
            `https://ik.imagekit.io/averno2301/Vestir/Products/Men/Channel_Stripe_Long_Sleeve_T-Shirt-2_CXizFrryt.webp?updatedAt=1684350416449`
        ],
        category: 'Men',
        rating: '4.2',
        size: 'XXL',
        description: 'A nautical inspired long-sleeved T-Shirt made using a textured slub organic cotton and in our bespoke fit. The Channel Stripe Long Sleeve T-Shirt is both durable and stylish, looking and feeling good wherever the day takes you.',
        title: 'Channel Stripe Long Sleeve T-Shirt',
        type: "T-Shirt",
        trending: true,
        original_price: '699',
        price: '384',
        delivery_time: '1',
        reviews: '2.5k',
        in_stock: true,
    },
    {
        _id: '7ef09383-3ef3-4eeb-ba05-23b2aa4d0553',
        images: [
            `https://ik.imagekit.io/averno2301/Vestir/Products/Men/Breaker_5-Pocket_Jean-1_yPkwrEej7.webp?updatedAt=1684350491116`,
            `https://ik.imagekit.io/averno2301/Vestir/Products/Men/Breaker_5-Pocket_Jean-2_e-sPTuIrh.webp?updatedAt=1684350490920`
        ],
        category: 'Men',
        type: "Jeans",
        rating: '4.3',
        size: 'M',
        description:
            `The men's Breaker 5-Pocket Jean is built from 100% organic cotton denim twill. An easy to wear style, garment dyed and washed for a soft hand feel, they're a staple for any wardrobe. These relaxed, straight cut jeans are versatile and durable with lined rear pockets and a comfortable mid-rise fit.`,
        title: 'Breaker 5-Pocket Jean',
        trending: false,
        original_price: '1899',
        price: '1234',
        delivery_time: '5',
        reviews: '4k',
        in_stock: true,
    },
    {
        _id: 'd2fc9ea9-a7ad-4b5d-94ea-69a806aa734e',
        images: ["https://ik.imagekit.io/averno2301/Vestir/Products/Men/Tonkin_Work_Shirt-1_XLbJflhAr.webp?updatedAt=1684507152387", "https://ik.imagekit.io/averno2301/Vestir/Products/Men/Tonkin_Work_Shirt-2_LMFNHLuje.webp?updatedAt=1684507152320"],
        category: 'Men',
        rating: '4.3',
        size: 'S',
        description:
            `A new addition to our workwear range, the Tonkin Work Shirt is made from durable 100% organic cotton herringbone twill. Built to last, it features large utility style lower patch pockets and a relaxed work shirt fit - perfect for those cooler summer days.`,
        title: 'Tonkin Work Shirt',
        trending: false,
        type: "Shirt",
        original_price: '1599',
        price: '959',
        delivery_time: '2',
        reviews: '5k',
        in_stock: true,
    }
    , {
        _id: 'a26b3142-af90-4b65-a4dc-2a145b921d3e',
        images: ["https://ik.imagekit.io/averno2301/Vestir/Products/Men/Atlas_Swim_Shorts-1_3xAtQ0b__.webp?updatedAt=1684507329187", "https://ik.imagekit.io/averno2301/Vestir/Products/Men/Atlas_Swim_Shorts-2_CEhGvLu2D.webp?updatedAt=1684507329025"],
        category: 'Men',
        rating: '4.4',
        size: 'L',
        description: 'Our Atlas Shorts highlight that sometimes simplicity is best. With a traditional drawcord waist, this heritage inspired swim short is made with a quick drying 100% recycled Nylon fabric, so you are ready to jump in for the next swim.',
        title: 'Atlas Swim Shorts',
        trending: true,
        original_price: '2999',
        type: "Shorts",
        price: '1649',
        delivery_time: '5',
        reviews: '2.5k',
        in_stock: true,
    },
    {
        _id: '5391f145-f5b5-4ec3-93d3-e15ee2e3e115',
        title: 'Hunros Jorna T-Shirt',
        description: `A summer tee collaboration with A Blaze of Feather. Featuring prints from the Hunros Jorna film, the stunning imagery pays tribute to the heartbeats, land and seascapes that have inspired and given our lives so much meaning.`,
        type: "T-Shirt",
        original_price: '2099',
        price: '1154',
        rating: '3.9',
        size: 'M',
        images: [
            "https://ik.imagekit.io/averno2301/Vestir/Products/Men/Hunros_Jorna_T-Shirt-1_hgbEQ_mnV.webp?updatedAt=1684507424160",
            "https://ik.imagekit.io/averno2301/Vestir/Products/Men/Hunros_Jorna_T-Shirt-2_v1bWFmx9HE.webp?updatedAt=1684507424298"
        ],
        category: 'Men',
        trending: false,
        reviews: '1.2k',
        in_stock: true,
        delivery_time: '3',
    },
    {
        _id: '76a8c6ea-9bcb-463b-93b8-e5cc65e6c668',
        title: 'Eaton Trouser',
        description: `Built for the warmer months ahead the Eaton Trousers have a relaxed feel with their stylish tapered fit and drawcord waist. We've blended hemp with organic cotton for its durability and sustainable credentials, creating a cool but durable fabric that's perfect to take you through to summer.`,
        type: "Trousers",
        original_price: '2399',
        price: '1439',
        rating: '4.3',
        size: 'XXL',
        images: ["https://ik.imagekit.io/averno2301/Vestir/Products/Men/Eaton_Trouser-1_n1U9liV5M.webp?updatedAt=1684507541204", "https://ik.imagekit.io/averno2301/Vestir/Products/Men/Eaton_Trouser-2_or99UGCwp.webp?updatedAt=1684507541069"],
        category: 'Men',
        trending: true,
        reviews: '1.4k',
        in_stock: true,
        delivery_time: '5',
    },
    {
        _id: 'a014a62a-ffb2-4507-a6a4-5a6848729b53',
        images: ["https://ik.imagekit.io/averno2301/Vestir/Products/Men/Cape_T-Shirt-1_bBLK6bitl.webp?updatedAt=1684507755134", "https://ik.imagekit.io/averno2301/Vestir/Products/Men/Cape_T-Shirt-2_hFRmjxtVM.webp?updatedAt=1684507755112"],
        category: 'Men',
        rating: '4.1',
        size: 'XL',
        description: `Super soft organic cotton tee in ecru featuring a front and back graphic depicting the home of Finisterre on the Cornish coast. Perfect for summer, organic cotton is soft yet durable, requiring less water and energy to grow and zero harmful pesticides. Classic everyday fit, great for wearing on its own or under a shirt.`,
        title: 'Cape T-Shirt',
        type: "T-Shirt",
        trending: true,
        original_price: '899',
        price: '494',
        delivery_time: '6',
        reviews: '1k',
        in_stock: false,
    },
]
const women: Product[] = [
    {
        _id: '1f302642-447a-4694-bb27-9703d6524aa4',
        images: [
            `https://ik.imagekit.io/averno2301/Vestir/Products/Women/Eden_Jumper-1_-Ufk3AG7J.webp?updatedAt=1684508050028`,
            `https://ik.imagekit.io/averno2301/Vestir/Products/Women/Eden_Jumper-2_1GwuNxsh7.webp?updatedAt=1684508049857`
        ],
        category: 'Women',
        rating: '4.3',
        size: 'L',
        description:
            `The Eden Jumper is a fisherman-inspired knitted jumper made from 100% organic cotton. Based on our best selling Mora Jumper but with a summer twist, it's an easy throw-on piece that provides a touch of extra warmth on chilly evenings.`,
        title: 'Eden Jumper',
        type: "Jumper",
        trending: true,
        original_price: '3599',
        price: '1799',
        delivery_time: '8',
        reviews: '605',
        in_stock: false,
    },
    {
        _id: 'ff06eaed-9a9c-4f42-a525-e233baaaa294',
        images: ["https://ik.imagekit.io/averno2301/Vestir/Products/Women/Meskel_Vest-1_Ime8-YvQ4G.webp?updatedAt=1684508242509", "https://ik.imagekit.io/averno2301/Vestir/Products/Women/Meskel_Vest-2_mg3szUbOtx.webp?updatedAt=1684508242450"],
        category: 'Women',
        type: "Jumper",
        rating: '4.3',
        size: 'L',
        description:
            `The Meskel Vest takes a classic tank top shape and combines it with our soft, relaxed organic cotton. Lightweight and versatile, it's the perfect top for lazy days in the sunshine.`,
        title: 'Meskel Vest',
        trending: true,
        original_price: '3599',
        price: '1799',
        delivery_time: '2',
        reviews: '205',
        in_stock: true,
    },
    {
        _id: 'c1dd7db4-0830-4e01-a968-bdbcce36d4de',
        images: ["https://ik.imagekit.io/averno2301/Vestir/Products/Women/Yarrel_Canvas_Jacket-1_11i3T7wPI.webp?updatedAt=1684508396363", "https://ik.imagekit.io/averno2301/Vestir/Products/Women/Yarrel_Canvas_Jacket-2_9EsFYKD0c.webp?updatedAt=1684508396236"],
        category: 'Women',
        rating: '4.5',
        size: 'L',
        description: 'A new addition to our workwear inspired Yarrel range. A hardy chore jacket crafted for the workshop or warmer evenings ahead. Built with a durable organic cotton blend with utility pocket detailing and a relaxed fit, the Yarrel is designed to take you from work to play and back again.',
        title: 'Yarrel Canvas Jacket',
        type: "Jacket",
        trending: false,
        original_price: '1398',
        price: '447',
        delivery_time: '4',
        reviews: '7.9K',
        in_stock: true,
    },
    {
        _id: '1bb27d9f-1720-449e-ada1-7fad574344d7',
        images: ["https://ik.imagekit.io/averno2301/Vestir/Products/Women/Esh_Top-1_Dj-vYBrEi.webp?updatedAt=1684508501462", "https://ik.imagekit.io/averno2301/Vestir/Products/Women/Esh_Top-2_dGaqMXRKz.webp?updatedAt=1684508501405"],
        type: "Top",
        category: 'Women',
        rating: '3.5',
        size: 'S',
        description: `Made from a weighty 100% organic cotton fabric, the Esh is a fresh take on classic Breton tops. We've kept the traditional wide neckline, adding a boxy fit with dropped shoulders for a contemporary relaxed feel.`,
        title: 'Esh Top',
        trending: false,
        original_price: '1998',
        price: '998',
        delivery_time: '4',
        reviews: '200',
        in_stock: true,
    },
    {
        _id: '4694797c-e044-4464-97f0-102c18a48142',
        images: ["https://ik.imagekit.io/averno2301/Vestir/Products/Women/Enkus_Sweat_Dress-1_urhSNdIj_.webp?updatedAt=1684508592475", "https://ik.imagekit.io/averno2301/Vestir/Products/Women/Enkus_Sweat_Dress-2_-HqwZExcv.webp?updatedAt=1684508592442"],
        category: 'Women',
        rating: '3.5',
        size: 'S',
        description: `The perfect loose fitting summer dress that will last year after year, the Enkus Sweat Dress offers a soft, relaxed dropped-shoulder fit and gentle drape. With side pockets and made from a brushed organic cotton, it's perfect for throwing on and layering with your favourite pieces.`,
        title: 'Enkus Sweat Dress',
        type: "Dress",
        trending: true,
        original_price: '1998',
        price: '1998',
        delivery_time: '4',
        reviews: '200',
        in_stock: true,
    },
    {
        _id: "b9a8e43f-5372-4f61-bb15-7ac1ae84d810",
        images: [
            "https://ik.imagekit.io/averno2301/Vestir/Products/Women/Morva_Hemp_Culottes-1_NRZiMmz7X.webp?updatedAt=1684509151152",
            "https://ik.imagekit.io/averno2301/Vestir/Products/Women/Morva_Hemp_Culottes-2_AhZbt9kI3.webp?updatedAt=1684509150972"
        ],
        category: "Women",
        rating: "4.2",
        size: "M",
        description: `Available here in washed indigo, these wide, cropped leg trousers are perfect for summer, with an elasticated high waist for ultimate flexible comfort. Made from a blend of hemp and organic cotton, the Morva Culottes offer a durable, low impact everyday option that is simultaneously versatile and stylish.`,
        title: "Morva Hemp Culottes",
        type: "Trousers",
        trending: true,
        original_price: "1299",
        price: "899",
        delivery_time: "3",
        reviews: "150",
        in_stock: true
    },
    {
        _id: "f5a3040d-5247-4b95-8a5d-9487dbd77392",
        images: [
            "https://ik.imagekit.io/averno2301/Vestir/Products/Women/Cove_Linen_Shirt-1_ayV6xXMgVt.webp?updatedAt=1684509296879",
            "https://ik.imagekit.io/averno2301/Vestir/Products/Women/Cove_Linen_Shirt-2_xaZQCzmc_e.webp?updatedAt=1684509296862"
        ],
        category: "Women",
        rating: "4.7",
        size: "L",
        description: "Made from soft, breathable, 100% linen fabric, the Cove Linen Shirt is an ideal addition to your summer outfit. Perfect for throwing on over swimwear as you head to the beach or paired with shorts for a city break. Featuring a v-neck and side-split hem for a more feminine cut, plus engraved Finisterre Corozo nut buttons.",
        title: "Cove Linen Shirt",
        type: "Shirt",
        trending: false,
        original_price: "1599",
        price: "1299",
        delivery_time: "5",
        reviews: "300",
        in_stock: true
    },
    {
        _id: "c1d8eb29-8b89-4f9e-bd45-1f81bc0244e6",
        images: [
            "https://ik.imagekit.io/averno2301/Vestir/Products/Women/Riviera_Linen_T-Shirt-1_CO7T53t8d.webp?updatedAt=1684509397212",
            "https://ik.imagekit.io/averno2301/Vestir/Products/Women/Riviera_Linen_T-Shirt-2_9GqDdo9RP.webp?updatedAt=1684509397545"
        ],
        category: "Women",
        rating: "4.0",
        size: "XS",
        description: "The Riviera T-Shirt uses a light 100% linen fabric, giving it a loose relaxed fit with a softer drape. Easy to throw on over swimwear or a vest for that extra layer of protection in the sun.",
        title: "Riviera Linen T-Shirt",
        type: "T-Shirt",
        trending: false,
        original_price: "899",
        price: "699",
        delivery_time: "2",
        reviews: "100",
        in_stock: true
    },
    {
        _id: "e71e8c3c-6bb1-40c1-a250-4706e5670f51",
        images: [
            "https://ik.imagekit.io/averno2301/Vestir/Products/Women/Robeston_Towelling_Shorts-1_zxfVGvUcb.webp?updatedAt=1684509471656",
            "https://ik.imagekit.io/averno2301/Vestir/Products/Women/Robeston_Towelling_Shorts-2_ynk4qDM11.webp?updatedAt=1684509471634"
        ],
        category: "Women",
        rating: "4.3",
        size: "M",
        description: `The perfect post-sea beach shorts, whether swimming or surfing. The Robestons offer a comfortable and stylish relaxed fit and are made with super soft organic cotton terry loop towelling fabric. Featuring a drawcord waist and large pockets, these will be your everyday summer best friend.`,
        title: "Robeston Towelling Shorts",
        type: "Shorts",
        trending: false,
        original_price: "1299",
        price: "999",
        delivery_time: "3",
        reviews: "180",
        in_stock: true
    },
    {
        _id: "6af7f9e8-30c4-4a3a-9259-92b7a08005a0",
        images: [
            "https://ik.imagekit.io/averno2301/Vestir/Products/Women/Robeston_Towelling_Hoodie-1_AB644B-V-.webp?updatedAt=1684509544578",
            "https://ik.imagekit.io/averno2301/Vestir/Products/Women/Robeston_Towelling_Hoodie-2_71U8jP2ae.webp?updatedAt=1684509544588"
        ],
        category: "Women",
        rating: "4.5",
        size: "S",
        description: "Nothing says 'perfect post-sea beach wear' quite like the Robeston Hoodie. With a relaxed fit and a drop shoulder design, you'll be able to jump into it right after your swim or surf to warm up and dry off. With it's super soft organic terry loop towelling fabric and drawcord waist, it will keep you warm on the cooler summer days and evening dips.",
        title: "Robeston Towelling Hoodie",
        type: "Hoodie",
        trending: true,
        original_price: "1899",
        price: "1499",
        delivery_time: "4",
        reviews: "250",
        in_stock: true
    }
]

const accessories: Product[] = [
    {
        _id: "1e6f7a8b-1c2d-3e4f-5a6b-7c8d9e0f",
        images: [
            "https://ik.imagekit.io/averno2301/Vestir/Products/Accesories/Jetty_Diamond_Cord_Cap-1_02Z3ynd7m.webp?updatedAt=1684510356025",
            "https://ik.imagekit.io/averno2301/Vestir/Products/Accesories/Jetty_Diamond_Cord_Cap-2_P-ECTip9Z.webp?updatedAt=1684510356109"
        ],
        category: "accessories",
        rating: "4.5",
        size: "M",
        description: "A classic corduroy cap featuring a Finisterre patch logo and a rear adjustable strap for the perfect fit. Stay cool and keep the sun off when out exploring.",
        title: "Jetty Diamond Cord Cap",
        type: "Cap",
        trending: false,
        original_price: "590",
        price: "499",
        delivery_time: "4",
        reviews: "180",
        in_stock: true
    },
    {
        _id: "9a8b7c8d-1e2f-3a4b-5c6d-7e8f9a0b",
        images: [
            "https://ik.imagekit.io/averno2301/Vestir/Products/Accesories/Drift_35L_Waterproof_Tote_Bag-1_ORHmzs1hv.webp?updatedAt=1684510927295",
            "https://ik.imagekit.io/averno2301/Vestir/Products/Accesories/Drift_35L_Waterproof_Tote_Bag-2_sPKncKSpZ.webp?updatedAt=1684510927401"
        ],
        category: "accessories",
        rating: "4.7",
        size: "",
        description: `Introducing the Drift 35L Tote Bag - the ultimate all-purpose bag for your next beach adventure. Made from 100% recycled heavy-duty waterproof polyester fabric with welded seams, it is the perfect companion for your next surf, day out, or even as a post-surf stand-in to get changed.`,
        title: "Drift 35L Waterproof Tote Bag",
        type: "Bag",
        trending: true,
        original_price: "7999",
        price: "6999",
        delivery_time: "5",
        reviews: "95",
        in_stock: true
    },
    {
        _id: "3e4f5a6b-7c8d-9e0a-1b2c3d4e",
        images: [
            "https://ik.imagekit.io/averno2301/Vestir/Products/Accesories/Nautilus_Messenger_Bag-1_q5YqssdQN.webp?updatedAt=1684511056687",
            "https://ik.imagekit.io/averno2301/Vestir/Products/Accesories/Nautilus_Messenger_Bag-2_K9MbGBHkL.webp?updatedAt=1684511056662"
        ],
        category: "Accessories",
        rating: "4.6",
        size: "XL",
        description: `The Nautilus Messenger Bag is made with durable recycled ripstop nylon, treated with a water-based wax DWR coating for protection against the elements without harsh chemicals. With an adjustable shoulder strap, internal laptop sleeve and essentials pocket, this messenger bag is built for wherever the day leads.`,
        title: "Nautilus Messenger Bag",
        type: "Bag",
        trending: true,
        original_price: "4999",
        price: "3999",
        delivery_time: "2",
        reviews: "150",
        in_stock: true
    },
    {
        _id: "9a8b7c8d-1e2f-3a4b-5c6d-7f9g0b1c",
        images: [
            "https://ik.imagekit.io/averno2301/Vestir/Products/Accesories/Fisherman_Beanie-1_VFtN8qEPB.webp?updatedAt=1684511215728",
            "https://ik.imagekit.io/averno2301/Vestir/Products/Accesories/Fisherman_Beanie-2_21JddJJFc.webp?updatedAt=1684511215662"
        ],
        category: "Asccessories",
        rating: "4.7",
        size: "L",
        description: `A classic ribbed beanie in guaranteed non-mulesed 100% Merino wool. Keeps the wind out and the heat in.`,
        title: "Fisherman Beanie",
        type: "Beanie",
        trending: false,
        original_price: "999",
        price: "899",
        delivery_time: "5",
        reviews: "95",
        in_stock: true
    },
    {
        _id: "3e4f5a6b-7c8d-9e0a-1b2c3d4e",
        images: [
            "https://ik.imagekit.io/averno2301/Vestir/Products/Accesories/Mizu_D7_Thermos-1_YLQe9ZSQW.webp?updatedAt=1684511331275",
            "https://ik.imagekit.io/averno2301/Vestir/Products/Accesories/Mizu_D7_Thermos-2_g4DarKM24.webp?updatedAt=1684511331166"
        ],
        category: "Accessories",
        rating: "4.6",
        size: "XL",
        description: `Fed up with seeing plastic bottles littering the slopes, Olympic athlete and snowboarder Jussi Oksanen founded Mizu with the simple aim of making quality reusable gear with a sense of style. The D7 is a hardy stainless steel insulated flask perfect for keeping your coffee hot whilst out in the surf or off on a hike. Single use is no use.`,
        title: "Mizu D7 Thermos",
        type: "Thermos",
        trending: false,
        original_price: "1599",
        price: "1099",
        delivery_time: "2",
        reviews: "150",
        in_stock: true
    },
    {
        _id: "2b3c4d5e-6f7a-8b9c-d1e2f3a4b",
        images: [
            "https://ik.imagekit.io/averno2301/Vestir/Products/Accesories/Basset_Pocket_Cap-1_IjZUQsS1V.webp?updatedAt=1684511439771",
            "https://ik.imagekit.io/averno2301/Vestir/Products/Accesories/Basset_Pocket_Cap-2_rIEjppC4Y.webp?updatedAt=1684511439862"
        ],
        category: "Accessories",
        rating: "4.8",
        size: "XL",
        description: `The Basset Pocket Cap is a new addition to our Basset range, made from 100% organic cotton canvas. Featuring a curved peak and adjustable strap for a comfortable, breathable fit.`,
        title: "Basset Pocket Cap",
        type: "Cap",
        trending: true,
        original_price: "899",
        price: "799",
        delivery_time: "4",
        reviews: "220",
        in_stock: true
    },
    {
        _id: "3e4f5a6b-7c8d-9e0a-1b2c3d4e   ",
        images: [
            "https://ik.imagekit.io/averno2301/Vestir/Products/Accesories/Bowline_Belt-1_jRaxEQ-4-.webp?updatedAt=1684511567080",
            "https://ik.imagekit.io/averno2301/Vestir/Products/Accesories/Bowline_Belt-2_mg7rdNiGb.webp?updatedAt=1684511567105"
        ],
        category: "Accessories",
        rating: "4.8",
        size: "",
        description: `A simple and durable webbing belt, made with our signature attention to detail.`,
        title: "Bowline Belt",
        type: "Belt",
        trending: false,
        original_price: "690",
        price: "420",
        delivery_time: "4",
        reviews: "220",
        in_stock: true
    }
]
const products = men.concat(women).concat(accessories);
export default products