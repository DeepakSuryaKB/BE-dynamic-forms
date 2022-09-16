const router = require('express').Router();
const puppeteer = require("puppeteer");
//const { scrollPageToBottom } = require("puppeteer-autoscroll-down");
const fs = require("fs/promises");
const { v4: uuidv4 } = require('uuid');
const { PrismaClient } = require('@prisma/client')
const launch = require('../core-logic/ajio-trends/urls-scrppaer');
const test = require('../core-logic/ajio/product-ajio');
const url = require('../core-logic/ajio-business/url-ajio_bus');


const {ajio_trens_urls , ajio_trens} = new PrismaClient()

router.get('/ajiob/mens', async (req, res, next) => {
    url();
    
    res.send({ message: 'Ok api is working 🚀' });
   
  });



module.exports = router;