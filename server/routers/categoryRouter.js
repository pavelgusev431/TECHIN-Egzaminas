import express from "express";
import {getCategories, getCategoryById} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.route("/").get(getCategories);
categoryRouter.route("/:id").get(getCategoryById);

export default categoryRouter;