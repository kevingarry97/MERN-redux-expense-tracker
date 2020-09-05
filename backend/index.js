const express = require("express");
const bodyParser = require("body-parser");
const { mongoose } = require("./db/db");
const cors = require("cors");

// Routes
const transactions = require("./routes/transactions");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Routes
app.use("/api/transaction", transactions);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on PORT ${port}`));
