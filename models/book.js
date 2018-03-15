const mongoose = require("mongoose");

const bookSchemaObject = {
    name: String,
    author: String
};

const bookSchema = mongoose.Schema(bookSchemaObject);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;