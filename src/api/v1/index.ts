import { Router } from "express";
import authorRoutes from "../../modules/author/author.routes";
<<<<<<< HEAD
=======
import bookRoutes from "../../modules/book/book.routes";
import loanRoutes from "../../modules/loan/loan.routes";
>>>>>>> 6ab41a4 (feat: commit inicial de la Library API)

const router = Router();

router.use("/authors", authorRoutes);
<<<<<<< HEAD
=======
router.use("/books", bookRoutes);
router.use("/loans", loanRoutes);
>>>>>>> 6ab41a4 (feat: commit inicial de la Library API)

export default router;