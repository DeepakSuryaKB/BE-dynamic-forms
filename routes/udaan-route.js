const router = require("express").Router();
const puppeteer = require("puppeteer");
//const { scrollPageToBottom } = require("puppeteer-autoscroll-down");
const fs = require("fs/promises");
const { v4: uuidv4 } = require("uuid");
const { PrismaClient } = require("@prisma/client");
//const execute = require("../core-logic/udaan/udaan-product");
const ajiourls = require("../core-logic/ajio/url-ajio");
const scrape = require("../core-logic/udaan/udaan-product");

const { ajio_trens_urls, ajio_trens } = new PrismaClient();

router.get("/test", async (req, res, next) => {
  //productpage();
  //execute();
  scrape("mens_Tshirt");

  res.send({ message: " udaan test 🚀" });
});

router.get("/aj/mens", async (req, res, next) => {
  //ajiourls(890, "Mens_clothing","&pageSize=45&format=json&query=%3Arelevance&sortBy=relevance&curated=true&curatedid=clothing-4461-74582&gridColumns=3&facets=&advfilter=true&platform=Desktop&showAdsOnNextPage=false&is_ads_enable_plp=false");
ajiourls(160, "Mens_footwear","pageSize=45&format=json&query=%3Arelevance&sortBy=relevance&curated=true&curatedid=footwear-4461-74581&gridColumns=3&facets=&advfilter=true&platform=Desktop&showAdsOnNextPage=false&is_ads_enable_plp=false");

  res.send({ message: " udaan test 🚀" });
});

module.exports = router;
