import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { IsValidBook } from "../middlewares/isValidBook.middleware";
import { IsUniqueNameBook } from "../middlewares/isUniqueNameBook.middleware";
import { RequestValidate } from "../middlewares/requestValidate.middleware";
import { addBookSchema, updateBookSchema } from "../schemas/books.schemas";

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.post(
  "/",
  RequestValidate.execute({ body: addBookSchema }),
  IsUniqueNameBook.execute,
  booksControllers.addBook
);

booksRouter.get("/", booksControllers.getAll);

booksRouter.get("/:id", IsValidBook.execute, booksControllers.getById);

booksRouter.patch(
  "/:id",
  RequestValidate.execute({ body: updateBookSchema }),
  IsValidBook.execute,
  IsUniqueNameBook.execute,
  booksControllers.updateBook
);

booksRouter.delete("/:id", IsValidBook.execute, booksControllers.deleteBook);
