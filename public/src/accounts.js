function findAccountById(accounts, id) {
  let accountById = accounts.find((accounts) => accounts.id === id);

  return accountById;
}

function sortAccountsByLastName(accounts) {
  let sortedByLastName = accounts.sort((lastNameA, lastNameB) =>
    lastNameA.name.last < lastNameB.name.last ? -1 : 1
  );
  return sortedByLastName;
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (books[i].borrows[j].id === account.id) {
        totalBorrows++;
      }
    }
  }
  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter(
      (book) =>
        book.borrows[0].id === account.id && book.borrows[0].returned === false
    )
    .map((book) => {
      book.author = authors.find((author) => author.id === book.authorId);
      return book;
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
