import express from "express"
import { set } from "mongoose";
const app = express();
const port = process.env.PORT || 5000;





app.get('/api/products', (req,res) => {
    const products = [
        {
          id: 1,
          name: "Black Niqaab",
          price: 29.99,
          image: "https://example.com/images/niqaab-black.jpg"
        },
        {
          id: 2,
          name: "White Abaya",
          price: 59.99,
          image: "https://example.com/images/abaya-white.jpg"
        },
        {
          id: 3,
          name: "Navy Blue Abaya",
          price: 69.99,
          image: "https://example.com/images/abaya-navy.jpg"
        },
        {
          id: 4,
          name: "Red Niqaab",
          price: 34.99,
          image: "https://example.com/images/niqaab-red.jpg"
        },
        {
          id: 5,
          name: "Gray Abaya",
          price: 49.99,
          image: "https://example.com/images/abaya-gray.jpg"
        },
        {
          id: 6,
          name: "Beige Niqaab",
          price: 32.99,
          image: "https://example.com/images/niqaab-beige.jpg"
        },
        {
          id: 7,
          name: "Pink Abaya",
          price: 59.99,
          image: "https://example.com/images/abaya-pink.jpg"
        },
        {
          id: 8,
          name: "Black Abaya with Gold Trims",
          price: 89.99,
          image: "https://example.com/images/abaya-black-gold.jpg"
        },
        {
          id: 9,
          name: "Charcoal Niqaab",
          price: 28.99,
          image: "https://example.com/images/niqaab-charcoal.jpg"
        },
        {
          id: 10,
          name: "Turquoise Abaya",
          price: 75.99,
          image: "https://example.com/images/abaya-turquoise.jpg"
        },
        {
          id: 11,
          name: "Light Pink Niqaab",
          price: 30.99,
          image: "https://example.com/images/niqaab-light-pink.jpg"
        },
        {
          id: 12,
          name: "Olive Green Abaya",
          price: 65.99,
          image: "https://example.com/images/abaya-olive.jpg"
        },
        {
          id: 13,
          name: "Blue Niqaab",
          price: 33.99,
          image: "https://example.com/images/niqaab-blue.jpg"
        },
        {
          id: 14,
          name: "Golden Beige Abaya",
          price: 79.99,
          image: "https://example.com/images/abaya-golden-beige.jpg"
        },
        {
          id: 15,
          name: "Silver Niqaab",
          price: 37.99,
          image: "https://example.com/images/niqaab-silver.jpg"
        },
        {
          id: 16,
          name: "Purple Abaya",
          price: 62.99,
          image: "https://example.com/images/abaya-purple.jpg"
        },
        {
          id: 17,
          name: "Brown Niqaab",
          price: 29.99,
          image: "https://example.com/images/niqaab-brown.jpg"
        },
        {
          id: 18,
          name: "Lime Green Abaya",
          price: 55.99,
          image: "https://example.com/images/abaya-lime-green.jpg"
        },
        {
          id: 19,
          name: "White Niqaab with Lace",
          price: 45.99,
          image: "https://example.com/images/niqaab-white-lace.jpg"
        },
        {
          id: 20,
          name: "Dark Purple Abaya",
          price: 82.99,
          image: "https://example.com/images/abaya-dark-purple.jpg"
        }
      ];
   
    if(req.query.search) {
    const filterProducts = products.filter(product => product.name.includes((req.query.search)))
   res.send(filterProducts);
   return;  
  }
      setTimeout(function() {
        res.send(products);
      },2000);
         
})








app.listen(port, (req, res) => {
    console.log(`app.listen ${port}`);
    // res.json(products);
})
