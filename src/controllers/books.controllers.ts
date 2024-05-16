import { Request, Response } from "express";
import { BooksServices } from "../services/books.services";

interface IBooksControllers {
  addBook(req: Request, res: Response): Response;
  getAll(req: Request, res: Response): Response;
  getById(req: Request, res: Response): Response;
  updateBook(req: Request, res: Response): Response;
  deleteBook(req: Request, res: Response): Response;
}

export class BooksControllers implements IBooksControllers {
  addBook(req: Request, res: Response): Response {
    const booksServices = new BooksServices();

    const addBook = booksServices.addBook(req.body);

    return res.status(201).json(addBook);
  }

  getAll(req: Request, res: Response): Response {
    const booksServices = new BooksServices();
    const search = req.query.search as string | undefined;

    const getAll = booksServices.getAll(search);

    return res.status(200).json(getAll);
  }

  getById(req: Request, res: Response): Response {
    const booksServices = new BooksServices();

    const getById = booksServices.getById(req.params.id);

    return res.status(200).json(getById);
  }

  updateBook(req: Request, res: Response): Response {
    const booksServices = new BooksServices();

    const updatedBook = booksServices.updateBook(req.body, req.params.id);

    return res.status(200).json(updatedBook);
  }

  deleteBook(req: Request, res: Response): Response {
    const booksServices = new BooksServices();

    booksServices.deleteBook(req.params.id);

    return res.status(204).json();
  }
}
