// const url = "https://princeserver.herokuapp.com/makeup"





//    let getdata = async ()=>{
//     let res = await fetch(`${url}`)
//     res = await res.json()
//     render(res)
//     console.log(res)
//    }
// getdata()

let makeup = [
  {
    "title": "MYGLAMM LIT LIQUID MATTE LIPSTICK - SUGAR MAMA",
    "brand": "Moringa Oil Enriched Matte Lipstick",
    "price": "395",
    "color": "red",
    "details": "You found The One! Trust us, ladies, this liquid matte lipstick will be your new love! The LIT Liquid Matte Lipstick by MyGlamm gives you soft, kiss-proof lips, no smudges or transfers, just pure, intense colour! Best of all, its enriched with Moringa Oil that moisturises and smoothens dry, damaged lips.",
    "type": "lipstick",
    "rating": "4.9",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/SugrMam-(1).jpg",
        "https://files.myglamm.com/site-images/800x800/SugrMam-(2).jpg",
        "https://files.myglamm.com/site-images/800x800/2-LIT-lipstic-KV-BOGO-1200x1200-103-(1)_6.png",
        "https://files.myglamm.com/site-images/800x800/vegan_25.jpeg"
      ]
    },
    "id": 1
  },
  {
    "title": "MYGLAMM LIT CREAMY MATTE LIPSTICK - TOM COLLINS",
    "brand": "Precision Perfect Matte Slimstick",
    "price": "357 ",
    "color": "red",
    "details": "Tom Collins is a dusty rose pink that’ll pair well with your favourite floral outfit. It is also PETA Approved cruelty-free and vegan.  Play up those pouts with hues for every mood. With the LIT Creamy Matte Lipsticks by MyGlamm, we've got the best of both worlds – a mad matte finish in an oh-so-creamy texture! You also get long-staying power and intense colour payoff - what else could a girl ask for? The controlled slimstick design ensures perfect precision with every swipe of colour - no smudges!",
    "type": "lipstick",
    "rating": "4",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/Tom-Collins_6.jpg",
        "https://files.myglamm.com/site-images/800x800/Tom-Collins.jpg",
        "https://files.myglamm.com/site-images/800x800/Closed-Product_1.jpg",
        "https://files.myglamm.com/site-images/800x800/Tom-Collins_1.jpg",
        "https://files.myglamm.com/site-images/800x800/A46A8663.jpg",
        "https://files.myglamm.com/site-images/800x800/Tom-Collins_2.jpg"
      ]
    },
    "id": 2
  },
  {
    "title": "MYGLAMM K.PLAY FLAVOURED LIPSTICK - RASPBERRY PUNCH",
    "brand": "Raspberry Flavoured Vitamin E-enriched Creamy Lipstick",
    "price": "327 ",
    "color": "pink",
    "details": "Raspberry Punch is a blood red shade with pink undertones. The vitamin C and antioxidants found in raspberries reduce the signs of ageing and protect your skin from sun damage; it's spf for your lips!",
    "type": "lipstick",
    "rating": "5",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/RSPpnc-(1).jpg",
        "https://files.myglamm.com/site-images/800x800/RSPpnc-(2).jpg",
        "https://files.myglamm.com/site-images/800x800/RSPpnc-(3).jpg",
        "https://files.myglamm.com/site-images/800x800/RSPpnc-(3).jpg"
      ]
    },
    "id": 3
  },
  {
    "title": "PERFECT CURVES MATTE LIP CRAYON - SIREN",
    "brand": "Moisturising Matte Lipstick",
    "price": "417",
    "color": "pink",
    "details": "MyGlamm's Perfect Curves is an expertly curated collection of hydrating creamy matte lipsticks, these playful pencils give you lipstick and liner in a finish that lasts. Our ultra-smooth cream lipstick delivers intensely saturated color with just one swipe. Designed to define, enhance and shape your lips, Perfect Curves lipsticks are enriched with natural oils to nourish and condition your pout on the go!",
    "type": "Crayon Lipstick",
    "rating": "3.5",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/Siren-(1).jpg",
        "https://files.myglamm.com/site-images/800x800/Siren-(2).jpg",
        "https://files.myglamm.com/site-images/800x800/Siren-(3).jpg",
        "https://files.myglamm.com/site-images/800x800/Siren-(4).jpg",
        "https://files.myglamm.com/site-images/800x800/Siren-(4).jpg"
      ]
    },
    "id": 4
  },
  {
    "title": "PERFECT CURVES MATTE LIP CRAYON - SIREN",
    "brand": "PERFECT CURVES",
    "price": "221",
    "color": "orange",
    "details": "Say hello to the oh-so-comfy, nourishing matte formula of MyGlamm LIT Matte About It Lip Colour. Powered by 3 hydrating ingredients – Moringa Oil, Castor Oil and Vitamin E for crack-free, luscious lips. Just one effortless swipe of this  matte lipstick imparts high-intensity pigment for that long-lasting, no-budge, no-bleed dance of colour. So no brownie points for guessing your next favourite matte lipstick crayon! Now, pick yours from this range of 12 ‘Gram-worthy shades or grab ‘em all to channel that main character energy. *wink wink*",
    "type": "CRAYON LIPSTICK",
    "rating": "2.5",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/1-(30)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/3-(Wing-Tango)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/2-(2)-4.jpg",
        "https://files.myglamm.com/site-images/800x800/Crim-(4)-2.jpg",
        "https://files.myglamm.com/site-images/800x800/Cherry5-6.gif",
        "https://files.myglamm.com/site-images/800x800/Redrr-(2)-5.jpg"
      ]
    },
    "id": 5
  },
  {
    "title": "MYGLAMM LIT MATTE ABOUT IT LIP COLOR- SALMON SWING",
    "brand": "Matte Lipstick Crayon With Moringa Oil, Castor Oil and Vitamin E",
    "price": "221",
    "color": "orange",
    "details": "Say hello to the oh-so-comfy, nourishing matte formula of MyGlamm LIT Matte About It Lip Colour. Powered by 3 hydrating ingredients – Moringa Oil, Castor Oil and Vitamin E for crack-free, luscious lips. Just one effortless swipe of this  matte lipstick imparts high-intensity pigment for that long-lasting, no-budge, no-bleed dance of colour. So no brownie points for guessing your next favourite matte lipstick crayon! Now, pick yours from this range of 12 ‘Gram-worthy shades or grab ‘em all to channel that main character energy. *wink wink*",
    "type": "CRAYON LIPSTICK",
    "rating": "2.5",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/1-(29)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/3-(Wing-Tango)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/2-(2)-4.jpg",
        "https://files.myglamm.com/site-images/800x800/Crim-(4)-2.jpg",
        "https://files.myglamm.com/site-images/800x800/Cherry5-6.gif",
        "https://files.myglamm.com/site-images/800x800/Redrr-(2)-5.jpg"
      ]
    },
    "id": 6
  },
  {
    "title": "MYGLAMM LIT MATTE ABOUT IT LIP COLOR- SALMON SWING",
    "brand": "Matte Lipstick Crayon With Moringa Oil, Castor Oil and Vitamin E",
    "price": "221",
    "color": "orange",
    "details": "Say hello to the oh-so-comfy, nourishing matte formula of MyGlamm LIT Matte About It Lip Colour. Powered by 3 hydrating ingredients – Moringa Oil, Castor Oil and Vitamin E for crack-free, luscious lips. Just one effortless swipe of this  matte lipstick imparts high-intensity pigment for that long-lasting, no-budge, no-bleed dance of colour. So no brownie points for guessing your next favourite matte lipstick crayon! Now, pick yours from this range of 12 ‘Gram-worthy shades or grab ‘em all to channel that main character energy. *wink wink*",
    "type": "lipstick",
    "rating": "2.5",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/1-(29)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/3-(Wing-Tango)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/2-(2)-4.jpg",
        "https://files.myglamm.com/site-images/800x800/Crim-(4)-2.jpg",
        "https://files.myglamm.com/site-images/800x800/Cherry5-6.gif",
        "https://files.myglamm.com/site-images/800x800/Redrr-(2)-5.jpg"
      ]
    },
    "id": 7
  },
  {
    "title": "MYGLAMM LIT MATTE ABOUT IT LIP COLOR- SALMON SWING",
    "brand": "Matte Lipstick Crayon With Moringa Oil, Castor Oil and Vitamin E",
    "price": "221",
    "color": "orange",
    "details": "Say hello to the oh-so-comfy, nourishing matte formula of MyGlamm LIT Matte About It Lip Colour. Powered by 3 hydrating ingredients – Moringa Oil, Castor Oil and Vitamin E for crack-free, luscious lips. Just one effortless swipe of this  matte lipstick imparts high-intensity pigment for that long-lasting, no-budge, no-bleed dance of colour. So no brownie points for guessing your next favourite matte lipstick crayon! Now, pick yours from this range of 12 ‘Gram-worthy shades or grab ‘em all to channel that main character energy. *wink wink*",
    "type": "lipstick",
    "rating": "2.5",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/1-(29)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/3-(Wing-Tango)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/2-(2)-4.jpg",
        "https://files.myglamm.com/site-images/800x800/Crim-(4)-2.jpg",
        "https://files.myglamm.com/site-images/800x800/Cherry5-6.gif",
        "https://files.myglamm.com/site-images/800x800/Redrr-(2)-5.jpg"
      ]
    },
    "id": 8
  },
  {
    "title": "MYGLAMM LIT MATTE ABOUT IT LIP COLOR- SALMON SWING",
    "brand": "Matte Lipstick Crayon With Moringa Oil, Castor Oil and Vitamin E",
    "price": "221",
    "color": "orange",
    "details": "Say hello to the oh-so-comfy, nourishing matte formula of MyGlamm LIT Matte About It Lip Colour. Powered by 3 hydrating ingredients – Moringa Oil, Castor Oil and Vitamin E for crack-free, luscious lips. Just one effortless swipe of this  matte lipstick imparts high-intensity pigment for that long-lasting, no-budge, no-bleed dance of colour. So no brownie points for guessing your next favourite matte lipstick crayon! Now, pick yours from this range of 12 ‘Gram-worthy shades or grab ‘em all to channel that main character energy. *wink wink*",
    "type": "lipstick",
    "rating": "2.5",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/1-(29)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/3-(Wing-Tango)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/2-(2)-4.jpg",
        "https://files.myglamm.com/site-images/800x800/Crim-(4)-2.jpg",
        "https://files.myglamm.com/site-images/800x800/Cherry5-6.gif",
        "https://files.myglamm.com/site-images/800x800/Redrr-(2)-5.jpg"
      ]
    },
    "id": 9
  },
  {
    "title": "MYGLAMM LIT MATTE ABOUT IT LIP COLOR- SALMON SWING",
    "brand": "Matte Lipstick Crayon With Moringa Oil, Castor Oil and Vitamin E",
    "price": "221",
    "color": "orange",
    "details": "Say hello to the oh-so-comfy, nourishing matte formula of MyGlamm LIT Matte About It Lip Colour. Powered by 3 hydrating ingredients – Moringa Oil, Castor Oil and Vitamin E for crack-free, luscious lips. Just one effortless swipe of this  matte lipstick imparts high-intensity pigment for that long-lasting, no-budge, no-bleed dance of colour. So no brownie points for guessing your next favourite matte lipstick crayon! Now, pick yours from this range of 12 ‘Gram-worthy shades or grab ‘em all to channel that main character energy. *wink wink*",
    "type": "CRAYON LIPSTICK",
    "rating": "2.5",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/1-(29)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/3-(Wing-Tango)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/2-(2)-4.jpg",
        "https://files.myglamm.com/site-images/800x800/Crim-(4)-2.jpg",
        "https://files.myglamm.com/site-images/800x800/Cherry5-6.gif",
        "https://files.myglamm.com/site-images/800x800/Redrr-(2)-5.jpg"
      ]
    },
    "id": 10
  },
  {
    "title": "MYGLAMM LIT MATTE ABOUT IT LIP COLOR- SALMON SWING",
    "brand": "Matte Lipstick Crayon With Moringa Oil, Castor Oil and Vitamin E",
    "price": "221",
    "color": "orange",
    "details": "Say hello to the oh-so-comfy, nourishing matte formula of MyGlamm LIT Matte About It Lip Colour. Powered by 3 hydrating ingredients – Moringa Oil, Castor Oil and Vitamin E for crack-free, luscious lips. Just one effortless swipe of this  matte lipstick imparts high-intensity pigment for that long-lasting, no-budge, no-bleed dance of colour. So no brownie points for guessing your next favourite matte lipstick crayon! Now, pick yours from this range of 12 ‘Gram-worthy shades or grab ‘em all to channel that main character energy. *wink wink*",
    "type": "CRAYON LIPSTICK",
    "rating": "2.5",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/1-(29)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/3-(Wing-Tango)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/2-(2)-4.jpg",
        "https://files.myglamm.com/site-images/800x800/Crim-(4)-2.jpg",
        "https://files.myglamm.com/site-images/800x800/Cherry5-6.gif",
        "https://files.myglamm.com/site-images/800x800/Redrr-(2)-5.jpg"
      ]
    },
    "id": 11
  },
  {
    "title": "MYGLAMM LIT MATTE ABOUT IT LIP COLOR- SALMON SWING",
    "brand": "Matte Lipstick Crayon With Moringa Oil, Castor Oil and Vitamin E",
    "price": "221",
    "color": "orange",
    "details": "Say hello to the oh-so-comfy, nourishing matte formula of MyGlamm LIT Matte About It Lip Colour. Powered by 3 hydrating ingredients – Moringa Oil, Castor Oil and Vitamin E for crack-free, luscious lips. Just one effortless swipe of this  matte lipstick imparts high-intensity pigment for that long-lasting, no-budge, no-bleed dance of colour. So no brownie points for guessing your next favourite matte lipstick crayon! Now, pick yours from this range of 12 ‘Gram-worthy shades or grab ‘em all to channel that main character energy. *wink wink*",
    "type": "CRAYON LIPSTICK",
    "rating": "2.5",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/1-(29)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/3-(Wing-Tango)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/2-(2)-4.jpg",
        "https://files.myglamm.com/site-images/800x800/Crim-(4)-2.jpg",
        "https://files.myglamm.com/site-images/800x800/Cherry5-6.gif",
        "https://files.myglamm.com/site-images/800x800/Redrr-(2)-5.jpg"
      ]
    },
    "id": 12
  },
  {
    "title": "MYGLAMM LIT MATTE ABOUT IT LIP COLOR- RED RUMBA",
    "brand": "Matte Lipstick Crayon With Moringa Oil, Castor Oil and Vitamin E",
    "price": "229",
    "color": "orange",
    "details": "Say hello to the oh-so-comfy, nourishing matte formula of MyGlamm LIT Matte About It Lip Colour. Powered by 3 hydrating ingredients – Moringa Oil, Castor Oil and Vitamin E for crack-free, luscious lips. Just one effortless swipe of this  matte lipstick imparts high-intensity pigment for that long-lasting, no-budge, no-bleed dance of colour. So no brownie points for guessing your next favourite matte lipstick crayon! Now, pick yours from this range of 12 ‘Gram-worthy shades or grab ‘em all to channel that main character energy. *wink wink*",
    "type": "LIQUID LIPSTICK",
    "rating": "2.5",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/IFLY-(1)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/IFLY-(4)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/IFLY-(3)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/IFLY-(2)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/IFLY-(2)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/IFLY-(2)_1.jpg"
      ]
    },
    "id": 13
  },
  {
    "title": "MYGLAMM LIT MATTE ABOUT IT LIP COLOR- RED RUMBA",
    "brand": "Matte Lipstick Crayon With Moringa Oil, Castor Oil and Vitamin E",
    "price": "582",
    "color": "orange",
    "details": "Say hello to the oh-so-comfy, nourishing matte formula of MyGlamm LIT Matte About It Lip Colour. Powered by 3 hydrating ingredients – Moringa Oil, Castor Oil and Vitamin E for crack-free, luscious lips. Just one effortless swipe of this  matte lipstick imparts high-intensity pigment for that long-lasting, no-budge, no-bleed dance of colour. So no brownie points for guessing your next favourite matte lipstick crayon! Now, pick yours from this range of 12 ‘Gram-worthy shades or grab ‘em all to channel that main character energy. *wink wink*",
    "type": "LIQUID LIPSTICK",
    "rating": "4",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/Liquid-Matte-Lipstick-post-1-Ladies-Night.jpg",
        "https://files.myglamm.com/site-images/800x800/Liquid-Matte-Lipstick-post-6-Ladies-Night.jpg",
        "https://files.myglamm.com/site-images/800x800/Liquid-Matte-Lipstick-post-1-Ladies-Night.jpg",
        "https://files.myglamm.com/site-images/800x800/IFLY-(2)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/Liquid-Matte-Lipstick-post-1-Ladies-Night.jpg",
        "https://files.myglamm.com/site-images/800x800/Liquid-Matte-Lipstick-post-1-Ladies-Night.jpg",
        "https://files.myglamm.com/site-images/800x800/Liquid-Matte-Lipstick-post-1-Ladies-Night.jpg"
      ]
    },
    "id": 14
  },
  {
    "title": "MANISH MALHOTRA LIQUID MATTE LIPSTICK - LADIES NIGHT",
    "brand": "Long-stay Velvet Matte Lip Colour",
    "price": "882",
    "color": "brown",
    "details": "Who says glamour is only about the glitz? The Manish Malhotra Liquid Matte Lipstick exclusively by MyGlamm is the only haute number you’ll need on a night out. Highly pigmented, this liquid lipstick mattifies into weightless velour on your lips.",
    "type": "LIQUID LIPSTICK",
    "rating": "4.9",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/stargazer-7.jpeg",
        "https://files.myglamm.com/site-images/800x800/strangers.jpeg",
        "https://files.myglamm.com/site-images/800x800/a46a0099-4.jpeg",
        "https://files.myglamm.com/site-images/800x800/stargazer-7.jpeg"
      ]
    },
    "id": 15
  },
  {
    "title": "MYGLAMM LIT 2 IN 1 LIQUID MATTE LIPSTICK - STARGAZER",
    "brand": "Intense, transfer-proof, long-lasting liquid lipstick duos",
    "price": "327",
    "color": "brown",
    "details": "Whether you’re channelling your inner Beyoncé or Sasha Fierce there’s a shade for every person and their alter egos! The LIT 2 in 1 Liquid Matte Lipstick by MyGlamm gives you soft, kiss-proof lips, no smudges or transfers, just pure, intense colour!",
    "type": "LIQUID LIPSTICK",
    "rating": "5.0",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/Mocha.jpg",
        "https://files.myglamm.com/site-images/800x800/mchaic-(2).jpg",
        "https://files.myglamm.com/site-images/800x800/mchaic-(3).jpg",
        "https://files.myglamm.com/site-images/800x800/mchaic-(4).jpg"
      ]
    },
    "id": 16
  },
  {
    "title": " POPXO MAKEUP - NO DRAMA - MINI LIP KIT",
    "brand": "Mini Lipstick kit with 3 creamy-matte nude lipsticks",
    "price": "227",
    "color": "pink",
    "details": "No Drama - Mini Lipstick Kit is a set of 3 gorgeous creamy-matte nude lipsticks that will add a little extra something to your #NoMakeup selfies. No-fuss, no-frills, just dreamy lippies that you can pair with just about anything. This mini lip kit includes 3 irresistible nude lipsticks - one for every mood, duh. These mini lipsticks set have a creamy, matte formula that glides on the lips smoothly and wears comfortably for long hours. The pigmented formula delivers rich colour payoff in one swipe and is designed to be suitable for all Indian skin tones.   \"I have too many lipsticks\" - said no one ever! That's because we know the real power of a good lipstick on a bad day.",
    "type": "lipstick",
    "rating": "5",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/open-product-with-side-bar_2.jpg",
        "https://files.myglamm.com/site-images/800x800/Close-Product_1.jpg",
        "https://files.myglamm.com/site-images/800x800/Open-product-with-side-bar-copy-3-.jpg",
        "https://files.myglamm.com/site-images/800x800/why-you-love-it_4.jpg"
      ]
    },
    "id": 17
  },
  {
    "title": "MYGLAMM POSE HD LIPSTICK - PEACH PINK",
    "brand": "HD Long-wear Matte Lipstick",
    "price": "358",
    "color": "pink",
    "details": "Pucker up ladies, those pouts are about to get a dose of high definition colour. The POSE Matte Lipstick by MyGlamm is matte with moisture, enriched with Moringa oil and Vitamin E for plump, hydrated lips. It also prevents flaking and lends a soft focus effect for your #nofilter selfies.",
    "type": "lipstick",
    "rating": "4.9",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/PechPnk-(1).jpg",
        "https://files.myglamm.com/site-images/800x800/PechPnk-(2).jpg",
        "https://files.myglamm.com/site-images/800x800/PechPnk-(3).jpg",
        "https://files.myglamm.com/site-images/800x800/PechPnk-(1).jpg"
      ]
    },
    "id": 18
  },
  {
    "title": "ULTIMATTE LONG-STAY MATTE LIPSTICK - PROMISCUOUS",
    "brand": "Hyaluronic Acid-enriched, Moisturising, Matte Slim Lipstick",
    "price": "419",
    "color": "orange",
    "details": "You’ll fall in love with these 12 shades of MyGlamm Ultimatte Long Stay Matte Lipsticks—pure, pigment-rich colour that glides on, stays in place and wears like a dream. At the heart of this innovative formula, hyaluronic filling spheres and silicon butter smooth and fill lips with moisture, delivering a silky smooth matte finish that never feels dry - making your pout the perfect date night accessory. ",
    "type": "lipstick",
    "rating": "4.9",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/Promiscious-(1).jpg",
        "https://files.myglamm.com/site-images/800x800/Promiscious-(3).jpg",
        "https://files.myglamm.com/site-images/800x800/Promiscious-(4).jpg",
        "https://files.myglamm.com/site-images/800x800/Promiscious-(2).jpg"
      ]
    },
    "id": 19
  },
  {
    "title": "LIT LIQUID MATTE LIPSTICK + SUPERFOODS KAJAL + LIT VELVET MATTE LIQUID LIPSTICK",
    "brand": "Moringa Oil Enriched Matte Lipstick & Long-Wear Smudge-Proof Kajal Infused With Natural Superfood Extracts & Hydrating, Velvet Matte Liquid Lipcolour",
    "price": "412",
    "color": "3",
    "details": "You found The One! Trust us, ladies, this liquid matte lipstick will be your new love! The LIT Liquid Matte Lipstick by MyGlamm gives you soft, kiss-proof lips, no smudges or transfers, just pure, intense colour! Best of all, its enriched with Moringa Oil that moisturises and smoothens dry, damaged lips.",
    "type": "LIQUID LIPSTICK",
    "rating": "5",
    "images": {
      "image": [
        "https://files.myglamm.com/site-images/800x800/LB-FB-copy_2.jpg",
        "https://files.myglamm.com/site-images/800x800/Thku-(1)_2.jpg",
        "https://files.myglamm.com/site-images/800x800/Raven-(1)-(1).jpg",
        "https://files.myglamm.com/site-images/800x800/LB-FB-(1)_1.jpg",
        "https://files.myglamm.com/site-images/800x800/Raven-(2)-(1).jpg"
      ]
    },
    "id": 20
  }
]
  let container  = document.getElementById("container")
  
  let render  = (makeup)=>{
    
    makeup.forEach(({title,brand,price,color,details,type,rating,images:{image},id})=>{

      if(type=="LIQUID LIPSTICK"){
        let div = document.createElement("div")
        let div2 = document.createElement("div")
        div2.setAttribute("id", "tag")

        div.onclick = ()=>{
            selectfunc(title,brand,price,color,details,type,rating,image,id)
        }
        let strick = document.createElement("p")
        strick.setAttribute("class", "strick")
        strick.innerText = `₹ 1000`
        strick.style.fontSize = "30px"
        strick.style.color ="gray"

        strick.style.textDecoration = "line-through"
        let title1 = document.createElement("h3")
        title1.setAttribute("class", "title")
        title1.innerText = title;
        
        let brand1 = document.createElement("h3")
        brand1.setAttribute("class", "brand")
        brand1.innerText = brand;
        brand1.style.color = "gray";
        let images1 = document.createElement("img")
        images1.setAttribute("class", "images")
        images1.src = image[0]
        let price1 = document.createElement("p")
        price1.setAttribute("class", "price")
        price1.innerText = `₹ ${price}`;
        price1.style.fontSize = "30px"
        
        div2.append(price1,strick)
        div.append(images1,title1,brand1,div2)
        container.append(div)
      }
       
    })
  }
 
  
  let selectfunc = (title,brand,price,color,details,type,rating,image,id) =>{

     let makeup = {
      title: title,
      brand: brand,
      price: price,
      color: color,
      price: price,
      details: details,
      type: type,
      rating: rating,
      image: image,
      id: id,
     }
  
    localStorage.setItem("product_selected" , JSON.stringify(makeup));
    window.location.href = "product.html"
  }
  render(makeup)