
function shelfBook (book, shelf) {
  if (shelf.length >= 3) {
    return
  } else {
    shelf = shelf.unshift(book);
    return shelf;
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

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === title) {
      return true;
    }
  }
return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
