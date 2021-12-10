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
    .query(`SELECT * from users WHERE id=${id}`)
    .then((data) => res.json(data.rows[0]))
    .catch((err) => console.log(err));
};
