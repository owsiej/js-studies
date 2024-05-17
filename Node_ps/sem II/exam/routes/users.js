const express = require("express");
const multer = require("multer");
const bcrypt = require("bcrypt");

const User = require("../models/user.js");
const { databaseConnect, databaseDisconnect } = require("../services/db.js");
const userDataValidator = require("../middlewares/user/user-data-validator.js");
const generateToken = require("../services/generate-jwt-token.js");

const upload = multer();
const router = express.Router();
const collectionName = process.env.MONGO_USER_COLLECTION;

router.use(upload.none());

router.post("/register", userDataValidator, async (req, res) => {
  const { login, password } = req.body;
  try {
    const db = await databaseConnect();
    const collection = db.collection(collectionName);
    const ifUserAlreadyExists = await collection.findOne(
      { login: login },
      { projection: { _id: 0, login: 1 } }
    );
    if (ifUserAlreadyExists) {
      res.status(409);
      return res.send("User already exists.");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User(login, hashedPassword);
    const insertedUser = await collection.insertOne(user);
    res.status(201);
    res.send(insertedUser);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error.message);
  } finally {
    await databaseDisconnect();
  }
});

router.post("/login", async (req, res) => {
  const { login, password } = req.body;
  try {
    const db = await databaseConnect();
    const collection = db.collection(collectionName);
    const user = await collection.findOne({
      login: login,
    });
    if (!user) {
      res.status(404);
      return res.send("Given user does not exists.");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const token = await generateToken(user._id);
      res.status(200);
      res.send(token);
    } else {
      res.status(401);
      res.send("Wrong password.");
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
