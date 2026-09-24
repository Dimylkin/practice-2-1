// src/tasks/task2-functions.ts
import { Book, Catalog, BookFilter } from './task1-types';

export function formatBook(book: Book): string {
  // Вернуть строку: "Title (Year): Authors"
  // Например: "TypeScript Guide (2023): John Doe, Jane Smith"

  return book.title + " (" + book.year + ") — " + book.authors.join(', ')
}

export function calculateAverageYear(books: Book[]): number {
  // Вернуть средний год издания
  // Если книг нет — вернуть 0

  const years: number[] = books
    .map((book: Book): any => book.year)
    .filter((year: any): year is number => year !== undefined);

  if (years.length === 0) {
    return 0;
  }

  let sum_years: number = 0;
  for (const year of years) {
    sum_years += year;
  }
  return sum_years / years.length;
}