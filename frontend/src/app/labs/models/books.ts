export type book = {
  id: string;
  title: string;
  author: string;
  year: number;
};

export type bookList = {
  books: book[];
};
