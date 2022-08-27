// import modules
import * as dotenv from "dotenv";
import express from "express";

import { connectDB } from "../config";

import { UserRouter } from "./routers";

// config environment
dotenv.config();
const env = process.env;
const port = env.PORT || 8000;

connectDB(env.DB_ENTRANCE);

const app = express();

// Config routers
app.use("/user", UserRouter);

app.use("*", (req, res) => {
    res.send(`<h1>Developing</h1>`);
});

// Listen on port
app.listen(port, () => {
    console.log(`---------- App listening on port ${port} ----------\n`);
});
