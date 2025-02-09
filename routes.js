import express from "express";
//import morgan from 'morgan';
//import bodyParser from "body-parser";
import dotenv from "dotenv";
import Data from "./models/Data.js";

dotenv.config();

const router = express.Router();

router.use(express.json());

router.get("/test", (request, response) => {

  response.send("Hello, World root!");

});

export default router;
