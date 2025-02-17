import { Request, Response } from "express";
import pool from "../config/db.connect";

const getAll = async (req: Request, res: Response) => {
  res.send("getAll user");
};

const getOne = async (req: Request, res: Response) => {
  res.send("getOne user");
};

const create = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const query = "INSERT INTO users (username, password) VALUES ($1, $2)";
  const values = [username, password];

  try {
    await pool.query(query, values);

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const update = async (req: Request, res: Response) => {
  res.send("update user");
};

const remove = async (req: Request, res: Response) => {
  res.send("remove user");
};

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
};
