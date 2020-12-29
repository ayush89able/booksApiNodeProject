const express = require('express')
const bodyParser = require("body-parser")
const bookController = require("./controllers/BookController")
const cors = require('cors');
require('./config/db')
const app = express()

const port = process.env.PORT || 8001

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app
  .route("/")
  .get((req, res) => {
    res.send("Please go to '/books' route")
  })

app
  .route("/books")
  .get(cors(), bookController.listAllBooks)
  .post(cors(), bookController.createBook)

app
  .route("/books/:bookid")
  .get(cors(), bookController.readBook)
  .put(cors(), bookController.updateBook)
  .delete(cors(), bookController.deleteBook)


app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`)
})
