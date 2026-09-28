import { Router } from "express";
import authorRoutes from "../../modules/author/author.routes";
import bookRoutes from "../../modules/book/book.routes"

const router = Router();

router.use("/authors", authorRoutes);
router.use("/books", bookRoutes)

export default router;