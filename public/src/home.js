const _lengthCounter = (arg) => arg.length;

function getTotalBooksCount(books) {
  return _lengthCounter(books);
}

function getTotalAccountsCount(accounts) {
  return _lengthCounter(accounts);
}

function getBooksBorrowedCount(books) {
  let result = 0;
  for (let key of books) {
    if (key.borrows[0].returned === false) {
      result++;
    }
  }
  return result;
}

function getMostCommonGenres(books) {
  const genreCount = books.reduce((total, book) => {
    const found = total.find((item) => book.genre === item.name);
    total.push({ name: book.genre, count: 1 });
    if (found) {
      found.count++;
    }
    const sortedList = total.sort((bookA, bookB) =>
      bookA.count < bookB.count ? 1 : -1
    );
    return sortedList;
  }, []);
  return genreCount.splice(0, 5);
}

function getMostPopularBooks(books) {
  const popularCount = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  });
  const sortedList = popularCount.sort((bookA, bookB) =>
    bookA.count < bookB.count ? 1 : -1
  );

  [first, second, third, fourth, fifth] = sortedList;

  return [first, second, third, fourth, fifth];
}

function getMostPopularAuthors(books, authors) {
  const popCount = books.reduce((total, book) => {
    const foundValue = total.find((key) => book.authorId === key.name);
    if (foundValue) {
      foundValue.count += book.borrows.length;
    } else {
      total.push({ name: book.authorId, count: book.borrows.length });
    }
    const sortedList = total.sort((bookA, bookB) =>
      bookA.count < bookB.count ? 1 : -1
    );
    return sortedList;
  }, []);

  for (const key of popCount) {
    let authorName = authors.find((author) => author.id === key.name);
    key.name = `${authorName.name.first} ${authorName.name.last}`;
  }

  const [first, second, third, fourth, fifth] = popCount;
  return [first, second, third, fourth, fifth];
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
