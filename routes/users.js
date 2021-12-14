import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../controllers/users.js";
const users = express.Router();

// Um alle users zu bekommen und um einen neuen User zu erstellen
users.route("/").get(getAllUsers).post(createUser);

//Um einen einzelnen User zu bekommen, einen einzelnen User zu löschen oder einen einzelnen User zu aktualisieren
users
  .route("/:id")
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser);

export default users;
