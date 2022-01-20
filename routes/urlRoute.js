import express from "express";
import { getUrlShort } from "../controllers/urlController.js";

const router = express.Router();

router.route("/:shortUrl").get(getUrlShort);

export default router;
