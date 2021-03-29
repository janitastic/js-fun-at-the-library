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
  // if the reviews array includes the new review, display reviews
  if (reviews.includes(review)) {
    return reviews.length;
    //if it does not, add the review to the reviews array
  } else {
    return reviews.push(review);
  }
}
//console.log(saveReview);

//Declare calculatePageCount function with the title parameter
function calculatePageCount (title) {
  //Return a value of the title letter count * 20
  var bookPageCount = title.length * 20;
  return bookPageCount;
}

//console.log(calculatePageCount);

//declare a function of writeBook that declares an object using it's parameters as values
function writeBook (title, bookCharacter, genre) {
  //create a variable equal to an object with 4 kvp's
  var book = {
    title: title,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  };
  return book;
}
//console.log(writeBook);

//declare a function of editBook with a book parameter
function editBook(book) {
//Access pageCount of a book
  book.pageCount = book.pageCount * .75;
  //return the value of book's pageCount
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
