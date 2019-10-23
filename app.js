/* eslint-disable no-console */
const express = require("express");

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;

bookRouter.route("book").get((req, res) => {
  const response = { hello: "this is my API" };
});
app.get("/", (req, res) => {
  res.send(" Welcome to my api");
});

app.listen(port, () => {
  console.log(` Server started on port  ${port}`);
});
