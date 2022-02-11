// env variables
require("dotenv").config()

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import session from "express-session";

// configs
import googleAuthConfig from "./config/google.config";

// Microservice Routs
import Auth from "./API/Auth"
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu"
import Image from "./API/Image"
import Order from "./API/Orders"
import Review from "./API/Reviews"
import User from "./API/Users"

// Database connection
import ConnectDB from "./database/connection"

// passport configurations
googleAuthConfig(passport);

const zomato = express();

// Session config
zomato.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'Session started'
}));


// MiddleWares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());


// Application Routs
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order",Order);
zomato.use("/review", Review);
zomato.use("/user", User);


zomato.get("/", (req, res) => res.json({ message: "Setup done" }));

zomato.listen(3001, () => ConnectDB().then(() => console.log("Server is running")).catch(() => console.log("Server is running, But database connection failed!")))