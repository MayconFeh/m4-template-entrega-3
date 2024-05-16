import { booksDatabase, generateId } from "../database/database";
import { IBook, TCreateBook, TUpdateBody } from "../interfaces/books.interfaces";

interface IBooksServices {
  addBook(body: TCreateBook): IBook;
  getAll(): IBook[];
  getById(id: string): IBook;
  updateBook(body: TUpdateBody, id: string): IBook;
  deleteBook(id: string): void;
}

export class BooksServices implements IBooksServices {
    addBook(body: TCreateBook): IBook {
      const date = new Date();
  
      const newBook: IBook = {
        id: generateId(),
        name: body.name,
        pages: body.pages,
        category: body.category,
        createdAt: date,
        updatedAt: date,
      };
  
      booksDatabase.push(newBook);
  
      return newBook;
    }
  
    getAll(searchParam?: string): IBook[] {
      if (searchParam) {
        return booksDatabase.filter((book) =>
          book.name.toLowerCase().includes(searchParam.toLowerCase())
        );
      }
      return booksDatabase;
    }
  
    getById(id: string): IBook {
      const book = booksDatabase.find((book) => book.id === Number(id)) as IBook;
  
      return book;
    }
  
    updateBook(body: Partial<TCreateBook>, id: string): IBook {
      const currentBook = booksDatabase.find(
        (book) => book.id === Number(id)
      ) as IBook;
  
      const date = new Date();
  
      const newBook = { ...currentBook, ...body, updatedAt: date };
  
      const index = booksDatabase.findIndex((book) => book.id === Number(id));
  
      booksDatabase.splice(index, 1, newBook);
  
      return newBook;
    }
  
    deleteBook(id: string): void {
      const index = booksDatabase.findIndex((book) => book.id === Number(id));
  
      booksDatabase.splice(index, 1);
    }
  }