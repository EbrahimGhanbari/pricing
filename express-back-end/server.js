const express = require("express");
// const mysql = require("mysql");
const helmet = require("helmet");
const quotesAPI = require("./routes/quotes");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(helmet());
app.use("/api/quotes", quotesAPI);

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "wetbat",
//   password: "wetbat",
//   database: "wetbatdb",
// });

// connection.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("MySql is connected");
// });

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE wetbatdb;";
});

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
