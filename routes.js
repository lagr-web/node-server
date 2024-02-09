
import express from "express";
import morgan from 'morgan';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import Data from "./models/Data.js";

dotenv.config();

const router = express.Router();

router.use(express.json());

router.get("/test", (request, response) => {
  response.send("Hello, World root!");
});

router.get("/data", (request, response) => {
  response.send("Hello, World data!");
});

router.get("/getAlldata", async (request, response) => {

  try {
    const cards = await Data.find();
    response.json(cards);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

export default router;
