import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/appError";

export class IsValidBook {
  static execute(req: Request, res: Response, next: NextFunction) {
    if (!booksDatabase.some((book) => book.id === Number(req.params.id))) {
      throw new AppError("Book not found.", 404);
    }

    next();
  }
}
