const Book = require('../models/Book')

exports.listAllBooks = (req, res) => {
    Book.find({}, (err, book) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).json(book)
    });
};


exports.createBook = (req, res) => {
    let newBook = new Book(req.body);
    newBook.save((err, book) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(201).json(book)
    });
};

exports.readBook = (req, res) => {
    Book.findById(req.params.bookid, (err, book) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).json(book)
    })
}

exports.updateBook = (req, res) => {
    Book.findOneAndUpdate(
        { _id: req.params.bookid },
        req.body,
        { new: true },
        (err, book) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).json(book)
        }
    )
}

exports.deleteBook = (req, res) => {
    Book.remove({ _id: req.params.bookid }, (err, book) => {
        if (err) {
            res.status(404).send(err)
        }
        res.status(200).json({ message: "Book successfully deleted" })
    })
}