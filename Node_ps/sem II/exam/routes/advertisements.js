const express = require("express");
const multer = require("multer");

const upload = multer();
const router = express.Router();
const Advertisement = require("../models/advertisement.js");
const advertisementDataValidator = require("../middlewares/advertisement-data-validator.js");
const advertisementPropertiesValidator = require("../middlewares/advertisement-properties-validator.js");
const idValidator = require("../middlewares/id-validator.js");
const headerValidator = require("../middlewares/request-headers.js");
const { databaseConnect, databaseDisconnect } = require("../services/db.js");
const ObjectId = require("mongodb").ObjectId;
const {
  textRepresentation,
  htmlRepresentation,
} = require("../models/object-representations.js");

router.use(upload.none());

router.get("/", async (req, res) => {
  if (req.params) {
    // tutaj stworzymy filter ogloszen w zaleznosci od podanych kryteriow
  }
  try {
    const db = await databaseConnect();
    const collection = db.collection(process.env.MONGO_COLLECTION_NAME);

    const adOutput = await collection.find({}).toArray();

    res.send(adOutput);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error.message);
  } finally {
    await databaseDisconnect();
  }
});

router.get("/:adId", idValidator, async (req, res) => {
  const adId = req.params.adId;

  try {
    const db = await databaseConnect();
    const collection = db.collection(process.env.MONGO_COLLECTION_NAME);
    const ad = await collection.findOne({
      _id: new ObjectId(adId),
    });
    if (ad) {
      res.status(200);
      res.format({
        "text/plain": function () {
          res.send(textRepresentation(ad));
        },
        "text/html": function () {
          res.send(htmlRepresentation(ad));
        },
        "application/json": function () {
          res.send(ad);
        },
      });
    } else {
      res.status(400);
      res.send("Ad of given id does not exists.");
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error.message);
  } finally {
    await databaseDisconnect();
  }
});

router.post(
  "/add",
  headerValidator,
  advertisementPropertiesValidator,
  advertisementDataValidator,
  async (req, res) => {
    const {
      title,
      description,
      author,
      category,
      tags,
      price,
      paidPeriodInWeeks,
    } = req.body;
    const newAd = new Advertisement(
      title,
      description,
      author,
      category,
      tags,
      price,
      paidPeriodInWeeks
    );
    try {
      const db = await databaseConnect();

      const collection = db.collection(process.env.MONGO_COLLECTION_NAME);
      const insertedAd = await collection.insertOne(newAd);

      res.status(201);
      res.send(insertedAd);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.send(error.message);
    } finally {
      await databaseDisconnect();
    }
  }
);
router.put(
  "/:adId",
  headerValidator,
  idValidator,
  advertisementDataValidator,
  async (req, res) => {
    const adId = req.params.adId;
    const body = req.body;
    console.log(req.headers);
    res.send("udalo sie");
    // try {
    //   const db = await databaseConnect();
    //   const collection = db.collection(process.env.MONGO_COLLECTION_NAME);
    //   const ad = await collection.findOne({
    //     _id: new ObjectId(adId),
    //   });
    //   if (ad) {
    //     res.status(200);
    //     res.send(ad);
    //   } else {
    //     res.status(400);
    //     res.send("Ad of given id does not exists.");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   res.status(500);
    //   res.send(error.message);
    // } finally {
    //   await databaseDisconnect();
    // }
  }
);

router.delete("/:adId", idValidator, async (req, res) => {
  const adId = req.params.adId;

  try {
    const db = await databaseConnect();
    const collection = db.collection(process.env.MONGO_COLLECTION_NAME);

    const deleteResult = await collection.deleteOne({
      _id: new ObjectId(adId),
    });
    if (deleteResult.deletedCount === 0) {
      res.status(400);
      res.send("Ad with requested id does not exits.");
    } else {
      res.status(200);
      res.send("Requested ad deleted.");
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error.message);
  } finally {
    await databaseDisconnect();
  }
});

module.exports = router;

// - dokonczyc updatowanie ad iterujac przez obiekt z properties i dodajac pare key,value do obiektu ktory bedzie opisywac update
// - wyszukiwanie po roznych kryteriach
// - middleware 404 z obrazkiem
// - endpoint user z autoryzacja tokenem jwt, przypisanie ad uzytkownikom
