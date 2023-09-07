import express from "express";
import { addComment, getComments } from "../controllers/commentsController.js";

const router = express.Router();

router.route("/")
    .get(getComments)
    .post(addComment);

export default router;