// Declare a function createTitle with a parameter of title
function createTitle(title) {
  // Return a string of a modified title with "The " before the argument
  return "The " + title;
}
//console.log(createTitle);


// Declare a function that creates an object, using it's parameters as values
function buildMainCharacter(name, age, pronouns) {
  // Create character object using 3 kvp's with the arguments in the function
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  // Return the character object
  return character;
}
//console.log(buildMainCharacter);

// Declare saveReview function with a review parameter
function saveReview (review, reviews) {
  // if the reviews array includes the new review
  if (reviews.includes(review)) {
    return reviews.length;
  } else {
    return reviews.push(review);
  }
}
//console.log(saveReview);

function calculatePageCount (title) {
  return title.length * 20;
};

//console.log(calculatePageCount);

function writeBook (title, bookCharacter, genre) {
  return book = {
    title: title,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  };
}

//console.log(writeBook);

function editBook(book) {
  book.pageCount = book.pageCount * .75;
  return book.pageCount;
};
//console.log(editBook);

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
};
