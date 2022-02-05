import express from "express";
import cors from "cors";
import helmet from "helmet";

const zomato = express();

// MiddleWares
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());

zomato.get("/",(req, res)=>res.json({message:"Setup done"}));

zomato.listen(3002,()=>console.log("Server is running"))