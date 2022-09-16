const router = require('express').Router();
const puppeteer = require("puppeteer");
//const { scrollPageToBottom } = require("puppeteer-autoscroll-down");
const fs = require("fs/promises");
const { v4: uuidv4 } = require('uuid');
const { PrismaClient } = require('@prisma/client')
const launch = require('../core-logic/ajio-trends/urls-scrppaer');
const test = require('../core-logic/ajio/product-ajio');


const {ajio_trens_urls , ajio_trens} = new PrismaClient()

router.get('/mens/top-wear', async (req, res, next) => {
  //productpage();
  launch("https://trends.ajio.com/s/jackets-and-coats-3419-08331","jackets-and-coats-3419-08331");
  launch("https://trends.ajio.com/s/shirts-3419-08331","shirts-3419-08331");
  launch("https://trends.ajio.com/s/sweaters-and-cardigans-3419-08331","sweaters-and-cardigans-3419-08331");
  launch("https://trends.ajio.com/s/sweatshirts-and-hoodies-3419-08331","sweatshirts-and-hoodies-3419-08331");
  launch("https://trends.ajio.com/s/tees-3419-08331","tees-3419-08331");
  launch("https://trends.ajio.com/c/character-shop-3795-65281","character-shop-3795-65281");
  //launch("https://trends.ajio.com/s/jackets-and-coats-3419-08331");
  res.send({ message: 'Ok api is working 🚀' });
 
});

router.get('/aj/women', async (req, res, next) => {
  //productpage();
  test();
  //launch("https://trends.ajio.com/s/jackets-and-coats-3419-08331");
  res.send({ message: 'Ok api is working 🚀' });
 
});


router.get('/mens/top-wear', async (req, res, next) => {
    //productpage();
    launch("https://trends.ajio.com/s/jackets-and-coats-3419-08331","jackets-and-coats");
    launch("https://trends.ajio.com/s/shirts-3419-08331","shirts");
    launch("https://trends.ajio.com/s/sweaters-and-cardigans-3419-08331","sweaters-and-cardigans");
    launch("https://trends.ajio.com/s/sweatshirts-and-hoodies-3419-08331","sweatshirts-and-hoodies");
    launch("https://trends.ajio.com/s/tees-3419-08331","tees");
    launch("https://trends.ajio.com/c/character-shop-3795-65281","character-shop");
   
    res.send({ message: 'Ok api is working 🚀' });
   
  });



  router.get('/mens/bottom-wear', async (req, res, next) => {
    //productpage();
    launch("https://trends.ajio.com/s/jeans-3419-08331","jeans-3419-08331");
    launch("https://trends.ajio.com/s/shorts-and-three-fourths-3419-08331","shorts-and-three-fourths-3419-08331");
    launch("https://trends.ajio.com/s/trousers-and-pants-3419-08331","trousers-and-pants-3419-08331");
    launch("https://trends.ajio.com/s/track-pants-3419-08331","track-pants-3419-08331");
  
    
    res.send({ message: 'Ok api is working 🚀' });
   
  });  


  router.get('/mens/active-wear', async (req, res, next) => {
    //productpage();
    launch("https://trends.ajio.com/s/track-pants-3419-08332","track-pants-3419-08332");
    launch("https://trends.ajio.com/s/boots-3419-08331","boots-3419-08331");
    launch("https://trends.ajio.com/s/casual-shoes-3419-08331","casual-shoes-3419-08331");
    launch("https://trends.ajio.com/s/flip-flops-and-sandals-3419-08331","flip-flops-and-sandals-3419-08331");
    launch("https://trends.ajio.com/s/formal-shoes-3419-08331","formal-shoes-3419-08331");
    launch("https://trends.ajio.com/s/sports-shoes-3419-08331","sports-shoes-3419-08331");
  
    
    res.send({ message: 'Ok api is working 🚀' });
   
  });  


  router.get('/mens/inner-wear', async (req, res, next) => {
    //productpage();
    launch("https://trends.ajio.com/s/briefs-and-trunks-3419-08331","briefs-and-trunks-3419-08331");
    launch("https://trends.ajio.com/s/vests-3419-08331","vests-3419-08331");
  
    res.send({ message: 'Ok api is working 🚀' });
   
  }); 


  router.get('/womens/western-wear', async (req, res, next) => {
    //productpage();
    launch("https://trends.ajio.com/s/dresses-3419-08331","dresses-3419-08331");
    launch("https://trends.ajio.com/s/jackets-and-coats-3419-08332","jackets-and-coats-3419-08332");
    launch("https://trends.ajio.com/s/jeans-and-jeggings-3419-08331","jeans-and-jeggings-3419-08331");
    launch("https://trends.ajio.com/s/leggings-3419-08331","leggings-3419-08331");
    launch("https://trends.ajio.com/s/shirts-3419-08332","shirts-3419-08332");
    launch("https://trends.ajio.com/s/shorts-3419-08331","shorts-3419-08331");
    launch("https://trends.ajio.com/s/skirts-3419-08331","skirts-3419-08331");
    launch("https://trends.ajio.com/s/sweaters-and-cardigans-3419-08332","sweaters-and-cardigans-3419-08332");
    launch("https://trends.ajio.com/s/tops-3419-08331","tops-3419-08331");
    launch("https://trends.ajio.com/s/track-pants-3419-08333","track-pants-3419-08333");
    launch("https://trends.ajio.com/s/trousers-and-pants-3419-08332","trousers-and-pants-3419-08332");
    launch("https://trends.ajio.com/s/tees-3419-08333","tees-3419-08333");
  
    res.send({ message: 'Ok api is working 🚀' });
   
  }); 


  router.get('/womens/inner-wear', async (req, res, next) => {
    //productpage();
    launch("https://trends.ajio.com/s/bras-3427-94441","bras-3427-94441");
    launch("https://trends.ajio.com/s/camisole-and-slips-3427-94441","camisole-and-slips-3427-94441");
    launch("https://trends.ajio.com/s/bottomwear-3427-94441","bottomwear-3427-94441");
    launch("https://trends.ajio.com/s/tees-3427-94441","tees-3427-94441");
   
    res.send({ message: 'Ok api is working 🚀' });
   
  }); 


  
  router.get('/womens/ethinic-wear', async (req, res, next) => {
    //productpage();
    launch("https://trends.ajio.com/s/jackets-3419-08331","jackets-3419-08331");
     launch("https://trends.ajio.com/s/kurta-suit-sets-3419-08331","kurta-suit-sets-3419-08331");
   launch("https://trends.ajio.com/s/kurtas-3419-08331","kurtas-3419-08331");
    launch("https://trends.ajio.com/s/kurtis-and-tunics-3419-08331","kurtis-and-tunics-3419-08331");
    launch("https://trends.ajio.com/s/leggings-and-churidars-3419-08331","leggings-and-churidars-3419-08331");
    launch("https://trends.ajio.com/s/skirts-and-ghagras-3419-08331","skirts-and-ghagras-3419-08331"); 
  
    res.send({ message: 'Ok api is working 🚀' });
   
  }); 


  router.get('/womens/fusion-wear', async (req, res, next) => {
    //productpage();
    launch("https://trends.ajio.com/s/jackets-and-shrugs-3419-08331","jackets-and-shrugs-3419-08331");
    launch("https://trends.ajio.com/s/shirts-tops-and-tunics-3419-08331","shirts-tops-and-tunics-3419-08331");
    launch("https://trends.ajio.com/s/casual-shoes-3419-08332","casual-shoes-3419-08332");
    launch("https://trends.ajio.com/s/flat-sandals-3419-08331","flat-sandals-3419-08331");
    launch("https://trends.ajio.com/s/heeled-sandals-3419-08331","heeled-sandals-3419-08331");
    launch("https://trends.ajio.com/s/sports-shoes-3419-08332","sports-shoes-3419-08332");
  
    res.send({ message: 'Ok api is working 🚀' });
   
  }); 






  router.get('/kids/girls', async (req, res, next) => {
    //productpage();
    launch("https://trends.ajio.com/s/dresses-and-frocks-3419-08331","dresses-and-frocks-3419-08331");
    launch("https://trends.ajio.com/s/dungarees-and-playsuit-3419-08331","dungarees-and-playsuit-3419-08331");
    launch("https://trends.ajio.com/s/jackets-and-coats-3419-08333","jackets-and-coats-3419-08333");
    launch("https://trends.ajio.com/s/jeans-and-jeggings-3419-08332","jeans-and-jeggings-3419-08332");
    launch("https://trends.ajio.com/s/shirts-tops-and-tunics-3419-08332","shirts-tops-and-tunics-3419-08332");
    launch("https://trends.ajio.com/s/shorts-3419-08332","shorts-3419-08332");
    launch("https://trends.ajio.com/s/skirts-3419-08332","skirts-3419-08332");
    launch("https://trends.ajio.com/s/sweaters-3419-08331","sweaters-3419-08331");
    launch("https://trends.ajio.com/s/sweatshirts-3419-08331","sweatshirts-3419-08331");
    launch("https://trends.ajio.com/s/tshirts-3419-08331","tshirts-3419-08331");
    launch("https://trends.ajio.com/s/footwear-3427-94442","footwear-3427-94442");
  
    res.send({ message: 'ajiotrendsurls  ---- >    kids   --->   girls 🚀' });
   
  });


  router.get('/kids/infants', async (req, res, next) => {
    //productpage();
    launch("https://trends.ajio.com/s/dresses-and-frocks-3419-08332","dresses-and-frocks-3419-08332");
    launch("https://trends.ajio.com/s/dungarees-3419-08331","dungarees-3419-08331");
    launch("https://trends.ajio.com/s/jeans-and-jeggings-3419-08333","jeans-and-jeggings-3419-08333");
    launch("https://trends.ajio.com/s/leggings-3419-08332","leggings-3419-08332");
    launch("https://trends.ajio.com/s/shirts-3419-08333","shirts-3419-08333");
    launch("https://trends.ajio.com/s/shorts-and-three-fourths-3419-08332","shorts-and-three-fourths-3419-08332");
    launch("https://trends.ajio.com/s/sweaters-3419-08332","sweaters-3419-08332");
    launch("https://trends.ajio.com/s/trousers-and-pants-3419-08333","trousers-and-pants-3419-08333");
    launch("https://trends.ajio.com/s/tshirts-3419-08332","tshirts-3419-08332");
    launch("https://trends.ajio.com/s/tshirts-3419-08331","tshirts-3419-08331");
    launch("https://trends.ajio.com/s/footwear-3427-94442","footwear-3427-94442");
  
    res.send({ message: 'ajiotrendsurls  ---- >    kids   --->   infants 🚀' });
   
  });

  router.get('/kids/boys', async (req, res, next) => {
    //productpage();
    launch("https://trends.ajio.com/s/jackets-and-coats-3419-08334","jackets-and-coats-3419-08334");
    launch("https://trends.ajio.com/s/jeans-3419-08332","jeans-3419-08332");
    launch("https://trends.ajio.com/s/shirts-3419-08334","shirts-3419-08334");
    launch("https://trends.ajio.com/s/shorts-and-three-fourths-3419-08333","shorts-and-three-fourths-3419-08333");
    launch("https://trends.ajio.com/s/sweaters-3419-08333","sweaters-3419-08333");
    launch("https://trends.ajio.com/s/sweatshirts-3419-08332","sweatshirts-3419-08332");
    launch("https://trends.ajio.com/s/track-pants-3419-08334","track-pants-3419-08334");
    launch("https://trends.ajio.com/s/trousers-and-pants-3419-08333","trousers-and-pants-3419-08333");
    launch("https://trends.ajio.com/s/tshirts-3419-08333","tshirts-3419-08333");
    launch("https://trends.ajio.com/s/boys-footwear-3427-15741","boys-footwear-3427-15741");
   
  
    res.send({ message: 'ajiotrendsurls  ---- >    kids   --->   boys 🚀' });
   
  });


  router.get('/brands/mens', async (req, res, next) => {
    //productpage();
    launch("https://trends.ajio.com/s/dnmx-3419-08331","dnmx-3419-08331");
    launch("https://trends.ajio.com/s/duke-3419-08331","duke-3419-08331");
    launch("https://trends.ajio.com/s/netplay-3419-08331","netplay-3419-08331");
    launch("https://trends.ajio.com/s/network-3419-08331","network-3419-08331");
    launch("https://trends.ajio.com/s/performax-3419-08331","performax-3419-08331");
    launch("https://trends.ajio.com/s/proline-3419-08331","proline-3419-08331");
    launch("https://trends.ajio.com/s/teamspirit-3419-08331","teamspirit-3419-08331");
    launch("https://trends.ajio.com/s/john-players-3907-70761","john-players-3907-70761");
    launch("https://trends.ajio.com/s/only-vimal-4032-68471","only-vimal-4032-68471");
    launch("https://trends.ajio.com/s/boys-footwear-3427-15741","boys-footwear-3427-15741");
   
  
    res.send({ message: 'ajiotrendsurls  ---- >    kids   --->   boys 🚀' });
   
  });


  router.get('/brands/womens', async (req, res, next) => {
    //productpage();
    launch("https://trends.ajio.com/s/avaasa-mix-n-match-3419-08331","avaasa-mix-n-match-3419-08331");
    launch("https://trends.ajio.com/s/avaasa-set-3419-08331","avaasa-set-3419-08331");
    launch("https://trends.ajio.com/s/dnmx-3419-08332","dnmx-3419-08332");
    launch("https://trends.ajio.com/s/fig-3419-08331","fig-3419-08331");
    launch("https://trends.ajio.com/s/fusion-3419-08331","fusion-3419-08331");
    launch("https://trends.ajio.com/s/performax-3419-08332","performax-3419-08332");
    launch("https://trends.ajio.com/s/rio-3419-08331","rio-3419-08331");
    launch("https://trends.ajio.com/s/siyahi-3419-08331","siyahi-3419-08331");
    launch("https://trends.ajio.com/s/teamspirit-3419-08332","teamspirit-3419-08332");
    
   
  
    res.send({ message: 'ajiotrendsurls  ---- >    kids   --->   boys 🚀' });
   
  });


  router.get('/brands/kids', async (req, res, next) => {
    //productpage();
    launch("https://trends.ajio.com/s/inf-frendz-3419-08331","inf-frendz-3419-08331");
    launch("https://trends.ajio.com/s/kb-team-spirit-3419-08331","kb-team-spirit-3419-08331");
    launch("https://trends.ajio.com/s/kg-frendz-3419-08331","kg-frendz-3419-08331");
    launch("https://trends.ajio.com/s/performax-3419-08333","performax-3419-08333");
    launch("https://trends.ajio.com/s/point-cove-3419-08331","point-cove-3419-08331");
    launch("https://trends.ajio.com/s/rio-girls-3419-08331","rio-girls-3419-08331");
    launch("https://trends.ajio.com/s/yb-dnmx-3419-08331","yb-dnmx-3419-08331");


  
    res.send({ message: 'ajiotrendsurls  ---- >    kids   --->   boys 🚀' });
   
  });


module.exports = router;