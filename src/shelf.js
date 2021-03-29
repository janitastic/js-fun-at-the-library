module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

function shelfBook (book, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(book);
  }
}

function unshelfBook (title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles (genreShelf) {
  var titles = [];
  for (var i = 0; i < genreShelf.length; i++) {
    titles.push (genreShelf[i].title);
  }
  return titles.join(", ");
}

function searchShelf(shelf, book) {
  var isThere = false;
  for (var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === book) {
      isThere = true;
    } else {
      isThere = false;
    }
  }
return isThere;
}
