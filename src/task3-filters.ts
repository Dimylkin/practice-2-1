// src/tasks/task3-filters.ts
import { Book, Catalog, BookFilter } from './task1-types';

export const filterByAuthor = (authorName: string): BookFilter => {
  // Вернуть функцию, которая проверяет, есть ли authorName в book.authors
  return (book: Book): boolean => book.authors.some((author: string): boolean => author.includes(authorName));
};

export const filterByMinYear = (year: number): BookFilter => {
  // Вернуть функцию, которая проверяет book.year >= year
  return (book: Book): boolean => book.year !== undefined && book.year >= year;
};

export const applyFilters = (books: Book[], filters: BookFilter[]): Book[] => {
  // Применить все фильтры к массиву книг
  return books.filter((book: Book): boolean => filters.every((filter: BookFilter): boolean => filter(book)));
};