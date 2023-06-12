import express from 'express';
import session from "express-session";
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js"
import UserController from './users/users-controller.js';
import TuitsController from "./controllers/tuits/tuits-controller.js";
import AuthController from "./users/auth-controller.js";

const app = express()
app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: true,
      // store: new session.MemoryStore(),
    })
);
   
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
)

app.use(express.json());
HelloController(app);
UserController(app);
AuthController(app);
TuitsController(app);
const port = process.env.PORT || 4000;
app.listen(port)