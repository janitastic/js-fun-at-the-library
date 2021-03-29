function createLibrary(name) {
  return library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
