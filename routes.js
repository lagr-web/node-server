
import express from "express";
import morgan from 'morgan';
import bodyParser from "body-parser";
import dotenv from 'dotenv';


dotenv.config();

const router = express.Router();

router.get("/test", (request, response) => {
  response.send("Hello, World root!");
});

router.get("/data", (request, response) => {
  response.send("Hello, World data!");
});

export default router;
