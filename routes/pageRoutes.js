import express from "express";
import { servePage, postUrl } from "../controllers/pageController.js";

const router = express.Router();

router.route("/").get(servePage);
router.route("/shorturls").post(postUrl);

export default router;
