// app.js

import express from "express";
import { PORT } from "./config.js";
import routes from './routes.js'
import mongoose from "./db.js";


const app = express();

app.use('/', routes);

app.listen(PORT, () => {
console.log("Server Listening and is ready on PORT:", PORT);
});
