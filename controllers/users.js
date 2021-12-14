import pool from "../db/pg.js";

export const getAllUsers = (req, res) => {
  pool
    .query("SELECT * from users")
    .then((data) => res.json({ users: data.rows }))
    .catch((err) => console.log(err));
};

export const getSingleUser = (req, res) => {
  const id = req.params.id;
  pool
    .query("SELECT * from users WHERE id=$1", [id])
    .then((data) => {
      // console.log(data);
      if (data.rowCount === 0) {
        res.status(404).send("User mit dieser ID existiert nicht");
      } else {
        res.status(200).json(data.rows[0]);
      }
    })
    .catch((err) => console.log(err));
};

export const createUser = (req, res) => {
  const { first_name, last_name } = req.body;
  pool
    .query(
      "INSERT INTO users (first_name, last_name) VALUES ($1, $2) RETURNING *;",
      [first_name, last_name]
    )
    .then((data) => {
      res.status(201).json(data.rows[0]);
    })
    .catch((err) => console.log(err));
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  pool
    .query("DELETE FROM users WHERE id=$1", [id])
    .then((data) => {
      if (data.rowCount === 0) {
        res.status(404).send("User mit dieser ID existiert nicht");
      } else {
        res.status(200).send("User erforlgreich gelöscht");
      }
    })
    .catch((err) => res.status(500).json(err));
};

export const updateUser = (req, res) => {
  const id = req.params.id;
  const { first_name, last_name } = req.body;
  pool
    .query(
      "UPDATE users SET first_name=$1, last_name=$2 WHERE id=$3 RETURNING *;",
      [first_name, last_name, id]
    )
    .then((data) => {
      if (data.rowCount === 0) {
        res.status(404).send("User mit dieser ID existiert nicht");
      } else {
        res.status(200).json(data.rows[0]);
      }
    })
    .catch((err) => res.status(500).json(err));
};
