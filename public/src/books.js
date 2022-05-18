function findAuthorById(authors, id) {
  let foundAuthor = {};
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    if (author.id === id) {
      foundAuthor = author;
    }
  }
  return foundAuthor;
}

function findBookById(books, id) {
  let foundBook = {};
  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    if (book.id === id) {
      foundBook = book;
    }
  }
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  let returned = [];
  let borrowed = [];
  let result = [];

  for (let book of books) {
    if (book.borrows[0].returned) {
      returned.push(book);
    } else {
      borrowed.push(book);
    }
  }
  result.push(returned);
  result.push(borrowed);
  return [borrowed, returned];
}

function getBorrowersForBook(book, accounts) {
  let accountsArr = [];
  for (let borrow of book.borrows) {
    let borrowerAccount = accounts.find((account) => borrow.id === account.id);
    borrowerAccount.returned = borrow.returned;
    accountsArr.push(borrowerAccount);
  }
  return accountsArr.splice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
