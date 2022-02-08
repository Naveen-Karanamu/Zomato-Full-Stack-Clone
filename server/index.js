// env variables
require("dotenv").config()

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// Microservice Routs
import Auth from "./API/Auth"

// Database connection
import ConnectDB from "./database/connection"

const zomato = express();

// MiddleWares
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());

// Application Routs
zomato.use("/auth",Auth);

zomato.get("/",(req, res)=>res.json({message:"Setup done"}));

zomato.listen(3001,()=>ConnectDB().then(()=>console.log("Server is running")).catch(()=>console.log("Server is running, But database connection failed!")))