import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";

export class IsUniqueNameBook {
  static execute(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;

    const isUnique = !booksDatabase.some((book) => book.name === name);

    if (!isUnique) {
      return res.status(409).json({ error: "Book already registered." });
    }

    next();
  }
}
