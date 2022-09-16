const router = require("express").Router();
const puppeteer = require("puppeteer");
//const { scrollPageToBottom } = require("puppeteer-autoscroll-down");
const fs = require("fs/promises");
const { v4: uuidv4 } = require("uuid");
const { PrismaClient } = require("@prisma/client");
const launch = require("../core-logic/ajio-trends/urls-scrppaer");
const productpage = require("../core-logic/ajio-trends/product-page");
const schedule = require("node-schedule");

const { ajio_trens_urls, ajio_trens } = new PrismaClient();

/*
schedule.scheduleJob("0 1 * * WED", () => {
  console.log("Ajio Trends ---> mens(1/2) ---> started ");
  productpage(
    "jackets-and-coats-3419-08331",
    "shirts-3419-08331",
    "sweaters-and-cardigans-3419-08331",
    "sweatshirts-and-hoodies-3419-08331",
    "tees-3419-08331",
    "character-shop-3795-65281"
  );
});

schedule.scheduleJob("0 5 * * WED", () => {
  console.log("Ajio Trends ---> mens(2/2) ---> started ");
  productpage(
    "jeans-3419-08331",
    "shorts-and-three-fourths-3419-08331",
    "trousers-and-pants-3419-08331",
    "track-pants-3419-08331",
    "boots-3419-08331",
    "casual-shoes-3419-08331"
  );

  productpage(
    "flip-flops-and-sandals-3419-08331",
    "formal-shoes-3419-08331",
    "sports-shoes-3419-08331",
    "briefs-and-trunks-3419-08331",
    "vests-3419-08331",
    "dresses-3419-08331"
  );
});

schedule.scheduleJob("0 12 * * WED", () => {
  console.log("Ajio Trends ---> womens(1/2) ---> started ");

  productpage(
    "jackets-and-coats-3419-08332",
    "jeans-and-jeggings-3419-08331",
    "leggings-3419-08331",
    "shirts-3419-08332",
    "shorts-3419-08331",
    "sweaters-and-cardigans-3419-08332"
  );

  productpage(
    "tops-3419-08331",
    "track-pants-3419-08333",
    "trousers-and-pants-3419-08332",
    "tees-3419-08333",
    "bras-3427-94441",
    "camisole-and-slips-3427-94441"
  );
});

schedule.scheduleJob("0 18 * * WED", () => {
  console.log("Ajio Trends ---> womens(2/2) ---> started ");

  productpage(
    "bottomwear-3427-94441",
    "tees-3427-94441",
    "jackets-3419-08331",
    "kurta-suit-sets-3419-08331",
    "kurtas-3419-08331",
    "kurtis-and-tunics-3419-08331"
  );

  productpage(
    "leggings-and-churidars-3419-08331",
    "skirts-and-ghagras-3419-08331",
    "jackets-and-shrugs-3419-08331",
    "shirts-tops-and-tunics-3419-08331",
    "casual-shoes-3419-08332",
    "flat-sandals-3419-08331"
  );
});

schedule.scheduleJob("0 20 * * WED", () => {
  console.log("Ajio Trends ---> kids ---> started ");
  productpage(
    "heeled-sandals-3419-08331",
    "sports-shoes-3419-08332",
    "dresses-and-frocks-3419-08331",
    "dungarees-and-playsuit-3419-08331",
    "jackets-and-coats-3419-08333",
    "shirts-tops-and-tunics-3419-08332"
  );

  productpage(
    "shorts-3419-08332",
    "skirts-3419-08332",
    "sweaters-3419-08331",
    "sweatshirts-3419-08331",
    "tshirts-3419-08331",
    "footwear-3427-94442"
  );
});
router.get("/mens1", async (req, res, next) => {
  console.log("Ajio Trends ---> mens(1/2) ---> started ");
  productpage(
    "jeans-3419-08331",
    "shorts-and-three-fourths-3419-08331",
    "trousers-and-pants-3419-08331",
    "track-pants-3419-08331",
    "boots-3419-08331",
    "casual-shoes-3419-08331"
  );
  productpage(
    "jackets-and-coats-3419-08331",
    "shirts-3419-08331",
    "sweaters-and-cardigans-3419-08331",
    "sweatshirts-and-hoodies-3419-08331",
    "tees-3419-08331",
    "character-shop-3795-65281"
  );

  res.send({ message: "Ok api is working 🚀" });
});
*/
router.get("/mens2", async (req, res, next) => {
  console.log("Ajio Trends ---> mens(2/2) ---> started ");

  productpage(
    "flip-flops-and-sandals-3419-08331",
    "formal-shoes-3419-08331",
    "sports-shoes-3419-08331",
    "briefs-and-trunks-3419-08331",
    "vests-3419-08331",
    "dresses-3419-08331"
  );

  res.send({ message: "Ok api is working 🚀" });
});

router.get("/womens1", async (req, res, next) => {
  console.log("Ajio Trends ---> womens(1/2) ---> started ");

  productpage(
    "jackets-and-coats-3419-08332",
    "jeans-and-jeggings-3419-08331",
    "leggings-3419-08331",
    "shirts-3419-08332",
    "shorts-3419-08331",
    "sweaters-and-cardigans-3419-08332"
  );

  productpage(
    "tops-3419-08331",
    "track-pants-3419-08333",
    "trousers-and-pants-3419-08332",
    "tees-3419-08333",
    "bras-3427-94441",
    "camisole-and-slips-3427-94441"
  );

  res.send({ message: "Ok api is working 🚀" });
});

router.get("/womens2", async (req, res, next) => {
  console.log("Ajio Trends ---> womens(2/2) ---> started ");

  productpage(
    "bottomwear-3427-94441",
    "tees-3427-94441",
    "jackets-3419-08331",
    "kurta-suit-sets-3419-08331",
    "kurtas-3419-08331",
    "kurtis-and-tunics-3419-08331"
  );

  productpage(
    "leggings-and-churidars-3419-08331",
    "skirts-and-ghagras-3419-08331",
    "jackets-and-shrugs-3419-08331",
    "shirts-tops-and-tunics-3419-08331",
    "casual-shoes-3419-08332",
    "flat-sandals-3419-08331"
  );
});


router.get("/kids1", async (req, res, next) => {
  console.log("Ajio Trends ---> kids(1/1) ---> started ");
  productpage(
    "heeled-sandals-3419-08331",
    "sports-shoes-3419-08332",
    "dresses-and-frocks-3419-08331",
    "dungarees-and-playsuit-3419-08331",
    "jackets-and-coats-3419-08333",
    "shirts-tops-and-tunics-3419-08332"
  );

  productpage(
    "shorts-3419-08332",
    "skirts-3419-08332",
    "sweaters-3419-08331",
    "sweatshirts-3419-08331",
    "tshirts-3419-08331",
    "footwear-3427-94442"
  );
});

router.get("/kidsboys", async (req, res, next) => {
  productpage("jackets-and-coats-3419-08334");
  productpage("jeans-3419-08332");
  productpage("shirts-3419-08334");
  productpage("shorts-and-three-fourths-3419-08333");
  productpage("sweaters-3419-08333");
  productpage("sweatshirts-3419-08332");
  productpage("track-pants-3419-08334");
  productpage("trousers-and-pants-3419-08333");
  productpage("tshirts-3419-08333");
  productpage("boys-footwear-3427-15741");

  res.send({ message: "Ok api is working 🚀" });
});
module.exports = router;
