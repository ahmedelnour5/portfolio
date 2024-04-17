import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";

const port = 8080;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
