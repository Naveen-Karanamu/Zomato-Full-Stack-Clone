// Libraries
import express from "express";
import passport from "passport";

// Database model
import { FoodModel } from "../../database/allModels";

const Router = express.Router();

/*
Route: /r
Description: Get all the food based on particular restaurant
params: _id
Access: Public
Method: GET
*/