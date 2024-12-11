import express from "express";
import UserController from "./user/user.controller";
import logger from "./middleware/logger.middleware";
import AuthController from "./auth/auth.controller";
import authMiddleware from "./middleware/auth.middleware";
import cors from "cors";
import { IUser } from "./user/user.types";

const app = express();
const port = 8000;

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

app.use(express.json());
app.use(cors());

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", AuthController);
app.use("/users", UserController);

app.get("/private", authMiddleware, (req, res) => {
  console.log("Get user with authMiddleware: ", req.user);

  res.send("Private route");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
