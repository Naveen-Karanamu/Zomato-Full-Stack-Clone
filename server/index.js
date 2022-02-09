// env variables
require("dotenv").config()

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import session  from "express-session";

// configs
import googleAuthConfig from "./config/google.config";
zomato.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla' 
  }));

// Microservice Routs
import Auth from "./API/Auth"

// Database connection
import ConnectDB from "./database/connection"

// passport configurations
googleAuthConfig(passport);

const zomato = express();

// MiddleWares
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// Application Routs
zomato.use("/auth",Auth);


zomato.get("/",(req, res)=>res.json({message:"Setup done"}));

zomato.listen(3001,()=>ConnectDB().then(()=>console.log("Server is running")).catch(()=>console.log("Server is running, But database connection failed!")))