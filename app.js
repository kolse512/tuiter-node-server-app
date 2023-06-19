import express from 'express';
import session from "express-session";
import cors from 'cors';
import mongoose from 'mongoose';
import HelloController from "./controllers/hello-controller.js"
import UserController from './users/users-controller.js';
import TuitsController from './controllers/tuits/tuits-controller.js';
import AuthController from "./users/auth-controller.js";

const CONNECTION_STRING =  'mongodb+srv://Cluster57626:anjali@cluster0.jyy3myf.mongodb.net/tuiter' //'mongodb://127.0.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);

const app = express();

app.set("trust proxy", 1);

app.use(cors({
  credentials: true,
  origin: "https://a5--monumental-starburst-c22729.netlify.app", //"http://localhost:3000",//
})
);

app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: false,
      cookie: {
        sameSite: "none",
        secure: true,
      },
    })
);

app.use(express.json());

TuitsController(app);
HelloController(app)
UserController(app)
AuthController(app)
app.listen(process.env.PORT || 4000) 