import express from "express";
import { getToys, postToy } from "../models/models.js";

const router = express.Router();

/* GET shopping list. */
router.get("/", async (req, res) => {
  const data = await getToys();
  res.json({ success: true, payload: data });
});

router.post("/", async (req, res) => {
  const { item } = req.body;
  const result = await postToy(item);
  res.status(201).json({ success: true, payload: result });
});

export default router;