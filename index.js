const express = require('express')
const bodyParser = require("body-parser")
const bookController = require("./controllers/BookController")
require('./config/db')
const app = express()

const port = process.env.PORT || 8001

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
  .route("/books")
  .get(bookController.listAllBooks)
  .post(bookController.createBook)

app
  .route("/books/:bookid")
  .get(bookController.readBook)
  .put(bookController.updateBook)
  .delete(bookController.deleteBook)


app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`)
})
