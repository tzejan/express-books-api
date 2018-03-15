var express = require("express");
const Book = require("../models/books");
var router = express.Router();

/* GET books listing. */
router.get("/", async function(req, res) {
  try {
    let result = await Book.find({});
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ messsage: `${error.message}` });
  }

  // res.json({ message: "respond with all books" });
});

router.get("/:id", async function(req, res) {
  try {
    let result = await Book.find({ _id: req.params.id });
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ messsage: `${error.message}` });
  }
  // res.json({ message: `get book with id ${req.params.id}` });
});

router.post("/", async function(req, res) {
  try {
    let newBook = new Book({ name: req.body.name, author: req.body.author });
    await newBook.save();
    console.log(newBook);
    console.log("Book created successfully " + newBook);
    res.json({
      message: `create new book using data from ${req.body}, ${newBook}`
    });
  } catch (error) {
    console.error("Book can't be created");
    res.status(500).send("Error creating book");
  }
});

router.put("/:id", async function(req, res) {
  try {
    let updatedDetails = { name: req.body.name, author: req.body.author };
    let result = await Book.findByIdAndUpdate(req.params.id, updatedDetails, { new: true });
    console.log("Changed to "+result);
    res.json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ messsage: `${error.message}` });
  }
  // res.json({ message: `update book with id ${req.params.id}` });
});

router.delete("/:id", async function(req, res) {
  try {
    let result = await Book.deleteOne({ _id: req.params.id });
    console.log(result);
    if (result.n === 1) {
      res.send({ message: "Document found and deleted!" });
    } else {
      res.send({ message: "Document not found!" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ messsage: `${error.message}` });
  }
  // res.json({ message: `delete book with id ${req.params.id}` });
});

module.exports = router;
