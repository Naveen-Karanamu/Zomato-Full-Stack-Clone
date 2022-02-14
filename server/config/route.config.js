import passport from "passport";
import JwtPassport from "passport-jwt"

// Database Model
import { UserModel } from "../database/user"

const JWTStrategy =JwtPassport.Strategy;
const ExtractJwt=JwtPassport.ExtractJwt;

const options ={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"zomato"
}

export default (passport)=>{
    passport.use(new JWTStrategy(options, async(jwt_payload, done)=>{
        try {
            const doesUserExist=UserModel.findById(jwt_payload.user);
            if(!doesUserExist) return done(null, false)

            return done(null, doesUserExist);
        } catch (error) {
            throw new Error(error);    
        }
    }))
}