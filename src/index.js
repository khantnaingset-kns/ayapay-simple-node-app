//Load express module with `require` directive
const express = require("express");
const app = express();
const PORT = process.env.PORT;

//Define request response in root URL (/)
app.get("/", function (req, res) {
  const response = {
    status: "Ok",
    message: "Hello World!. Your environment is " + process.env.NODE_ENV,
  };
  res.json(response).status(200);
});

app.get("/admin", function (req, res) {
  const response = {
    status: "Ok",
    message:
      "This is Admin console, only specific IP should be access. Your environment is " +
      process.env.NODE_ENV,
  };
  res.json(response).status(200);
});

//Launch listening server on port 2019
app.listen(PORT, function () {
  console.log(
    `app listening on ${PORT}. Your environment is ${process.env.NODE_ENV}`
  );
});
