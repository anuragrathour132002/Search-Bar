import express from "express";
import AdsController from "../controllers/AdsController.js";
const router = express.Router();

router.get("/ads", AdsController.getAllDoc);
export default router;