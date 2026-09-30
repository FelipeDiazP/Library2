import { Router } from "express";
import authorRoutes from "../../modules/author/author.routes";
import bookRoutes from "../../modules/book/book.routes"
import loansRoutes from "../../modules/loan/loan.routes"

const router = Router();

router.use("/authors", authorRoutes);
router.use("/books", bookRoutes)
router.use("/loans", loansRoutes)

export default router;