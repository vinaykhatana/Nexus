import express from "express";
import {
  getCampaigns,
  createCampaign,
  deleteCampaign,
  updateCampaign,
} from "../controllers/campaignController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getCampaigns);
router.post("/", protect, createCampaign);
router.delete("/:id", protect, deleteCampaign);
router.put("/:id", protect, updateCampaign);

export default router;
