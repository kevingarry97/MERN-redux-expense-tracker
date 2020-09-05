const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to DB successfully"));

exports.mongoose = mongoose;
