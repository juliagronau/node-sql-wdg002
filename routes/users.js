import express from "express";
import { getAllUsers, getSingleUser } from "../controllers/users.js";
const users = express.Router();

// Um alle users zu bekommen
users.route("/").get(getAllUsers);

//Um einen einzelnen User zu bekommen
users.route("/:id").get(getSingleUser);

export default users;
