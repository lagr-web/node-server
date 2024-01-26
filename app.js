// app.js

import express from "express";
import { PORT } from "./config.js";
import routes from './routes.js'

//const port = process.env.PORT || 3001;

const app = express();

app.use('/', routes);

app.listen(PORT, () => {
console.log("Server Listening and is ready on PORT:", PORT);
});
