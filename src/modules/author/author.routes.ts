import { Router } from "express";
import { AuthorController } from "./author.controller";
import { asyncHandler } from "../../shared/middlewares/asyncHandler";

const router = Router();
const controller = new AuthorController();

router.post("/", asyncHandler(controller.create));
router.get("/", asyncHandler(controller.findAll));
router.get("/:id", asyncHandler(controller.findById));
router.put("/:id", asyncHandler(controller.update));
router.get("/:id/books", asyncHandler(controller.findBooksByAuthor))
router.delete("/:id", asyncHandler(controller.delete));

export default router;