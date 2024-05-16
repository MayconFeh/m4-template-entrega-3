import { z } from "zod";

export const addBookSchema = z.object({
  name: z.string().min(3),
  pages: z.number().min(1),
  category: z.string().optional(),
});

export const updateBookSchema = z.object({
  name: z.string().min(3).optional(),
  pages: z.number().min(1).optional(),
  category: z.string().optional(),
});
