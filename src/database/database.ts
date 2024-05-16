import { IBook } from "../interfaces/books.interfaces";

export const booksDatabase: IBook[] = [];

let id = 0;

export const generateId = () => {
  id++;
  return id;
};
