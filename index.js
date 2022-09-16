const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const { forms_details, forms_data } = new PrismaClient();
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
const { v4: uuidv4 } = require("uuid");
app.use(cors({
  origin: '*'
}));
app.get("/", async (req, res, next) => {
  res.send({ message: "success api working" });
});
app.get("/allform/strucutre", async (req, res, next) => {
 
    try {
      let urls = await forms_details.findMany({
       
      });
      res.send({ data: urls });
    } catch (err) {
      res.status(400);
      console.log("error",err);
      res.send({ error: "DB error" });
    }
 
});

// create forms and save form name with form structure

app.post("/from/create", async (req, res, next) => {
  if (req.body?.form_name && req.body?.form_structure) {
    console.log("proper strucute");
    try {
      let urls = await forms_details.create({
        data: {
          form_name: req.body?.form_name,
          form_structure: req.body?.form_structure,
        },
      });
      res.send({ message: "success api working" });
    } catch (err) {
      res.status(400);
      console.log("error",err);
      res.send({ error: "DB error" });
    }
  } else {
    res.status(400);
    res.send({ error: "wrong body format" });
  }
});

// get a patricular form structure with form name

app.get("/getfrom/structure/:name", async (req, res, next) => {
  var name = req.params.name;

  if (req.params.name) {
    try {
      let data = await forms_details.findUnique({
        where: {
          form_name: name,
        },
      });

      res.send({ data: data });
    } catch (err) {
      res.status(400);
      res.send({ error: "error in db" });
    }
  } else {
    res.status(400);
    res.send({ error: "invalid params" });
  }
});

// add new data in form

app.post("/from/entry", async (req, res, next) => {
  if (req.body?.form_name && req.body?.data) {
    console.log("proper strucute");
    try {
      let urls = await forms_data.create({
        data: {
          id:uuidv4(),
          form_name: req.body?.form_name,
          data: req.body?.data,
        },
      });
      res.send({ message: "success api working" });
    } catch (err) {
      res.status(400);
      console.log("ree",err);
      res.send({ error: "DB error" });
    }
  } else {
    res.status(400);
    res.send({ error: "wrong body format" });
  }
});

// get all submitted data for a particulat form

app.get("/getfrom/data/:name", async (req, res, next) => {
  var name = req.params.name;

  if (req.params.name) {
    try {
      let data = await forms_data.findMany({
        where: {
          form_name: name,
        },
      });

      res.send({ data: data });
    } catch (err) {
      res.status(400);
      res.send({ error: "error in db" });
    }
  } else {
    res.status(400);
    res.send({ error: "invalid params" });
  }
});

// delete a patricular submission

app.delete("/from/data/:id", async (req, res, next) => {
  var id = req.params.id;

  if (req.params.id) {
    try {
      let data = await forms_data.delete({
        where: {
          id:id
        },
      });

      res.send({ data: data });
    } catch (err) {
      res.status(400);
      res.send({ error: "error in db" });
    }
  } else {
    res.status(400);
    res.send({ error: "invalid params" });
  }
});



app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
