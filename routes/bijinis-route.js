const router = require("express").Router();
const puppeteer = require("puppeteer");
//const { scrollPageToBottom } = require("puppeteer-autoscroll-down");
const fs = require("fs/promises");
const { v4: uuidv4 } = require("uuid");
const { PrismaClient } = require("@prisma/client");
const launch = require("../core-logic/ajio-trends/urls-scrppaer");
const scrape = require("../core-logic/bijnis/product-bijinis");
const notify = require("../core-logic/slack-notifications/notify");
const schedule = require("node-schedule");

const { ajio_trens_urls, ajio_trens } = new PrismaClient();
const ajiourls = require("../core-logic/ajio/url-ajio");

router.get("/aj/urls", async (req, res, next) => {
  //ajiourls(890, "Mens_clothing","&pageSize=45&format=json&query=%3Arelevance&sortBy=relevance&curated=true&curatedid=clothing-4461-74582&gridColumns=3&facets=&advfilter=true&platform=Desktop&showAdsOnNextPage=false&is_ads_enable_plp=false");
  ajiourls(890, "Mens_clothing","&pageSize=45&format=json&query=%3Arelevance&sortBy=relevance&curated=true&curatedid=clothing-4461-74582&gridColumns=3&facets=&advfilter=true&platform=Desktop&showAdsOnNextPage=false&is_ads_enable_plp=false");
  ajiourls(160, "Mens_footwear","&pageSize=45&format=json&query=%3Arelevance&sortBy=relevance&curated=true&curatedid=footwear-4461-74581&gridColumns=3&facets=&advfilter=true&platform=Desktop&showAdsOnNextPage=false&is_ads_enable_plp=false");
  ajiourls(1770, "Womens_clothing","&pageSize=45&format=json&query=%3Arelevance&sortBy=relevance&curated=true&curatedid=clothing-4461-75482&gridColumns=3&facets=&advfilter=true&platform=Desktop&showAdsOnNextPage=false&is_ads_enable_plp=false");
  ajiourls(630, "Womens_footwear","&pageSize=45&format=json&query=%3Arelevance&sortBy=relevance&curated=true&curatedid=footwear-and-accessories-4463-64161&gridColumns=3&facets=&advfilter=true&platform=Desktop&showAdsOnNextPage=false&is_ads_enable_plp=false");
  ajiourls(300, "Kids_clothing","&pageSize=45&format=json&query=%3Arelevance&sortBy=relevance&curated=true&curatedid=fresh-arrivals-clothing-for-kids-4111-71&gridColumns=3&facets=&advfilter=true&platform=Desktop&showAdsOnNextPage=false&is_ads_enable_plp=false");
  ajiourls(40, "Kids_footwaer","&pageSize=45&format=json&query=%3Arelevance&sortBy=relevance&curated=true&curatedid=fresh-arrivals-accessories-and-footwear-4111-71&gridColumns=3&facets=&advfilter=true&platform=Desktop&showAdsOnNextPage=false&is_ads_enable_plp=false");

  res.send({ message: " udaan test 🚀" });
});
router.get("/test", async (req, res, next) => {
  console.log("bijinis ---> test ---> success ");
  //notify("Bijinis Full Scrapping Completed\n STATUS : SUCCESS \n bijinis ---> womens 1/3 ---> ✅ \n bijinis ---> womens 2/3 ---> ✅\n bijinis ---> womens 3/3 ---> ✅\n bijinis ---> mens 1/3 ---> ✅\n bijinis ---> mens 2/3 ---> ✅\n bijinis ---> mens 3/3 ---> ✅");
  //scrape("men_Sports");
  console.log("❌");

  res.send({ message: "bijinis ---> test ---> success  🚀" });
});

router.get("/womens1", async (req, res, next) => {
  console.log("bijinis ---> womens 1/3 ---> womens1  🚀");
  scrape("women_Sports");
  scrape("women_Casuals");

  res.send({ message: "bijinis ---> womens 1/3 ---> womens1  🚀" });
});

router.get("/womens2", async (req, res, next) => {
  console.log("bijinis ---> womens 2/3 ---> womens2  🚀");
  scrape("women_Sandals");
  scrape("women_Slippers");

  res.send({ message: "bijinis ---> womens 2/3 ---> womens2  🚀" });
});

router.get("/womens3", async (req, res, next) => {
  console.log("bijinis ---> womens 3/3 ---> womens3  🚀");
  scrape("women_Formals");
  scrape("women_Boots");

  res.send({ message: "bijinis ---> womens 3/3 ---> womens3  🚀" });
});
/*
schedule.scheduleJob("0 20 * * SAT", () => {
  console.log("bijinis ---> men(1/2) ---> started ");
  scrape("men_Casuals");
  scrape("men_Sandals");
});

schedule.scheduleJob("0 8 * * SUN", () => {
  console.log("bijinis ---> men(2/2) ---> started ");
  scrape("men_Slippers");
  scrape("men_Formals");
  scrape("men_Boots");
}); */
module.exports = router;
