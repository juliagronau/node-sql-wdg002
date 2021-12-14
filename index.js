import "dotenv/config.js";
import express from "express";
import users from "./routes/users.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use("/users", users);

app.get("/", (req, res) =>
  res.send(
    "<h1>Jetzt endlich mit echten Daten aus einer Postgresql Datenbank!!</h1>"
  )
);

app.listen(port, () => console.log(`Server hört am port ${port}`));
