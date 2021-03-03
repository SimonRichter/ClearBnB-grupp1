global.mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

const atlasURL = "mongodb+srv://clearBnB:grupp1java20@cluster-clearbnb.tl726.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

global.mongoose.connect(atlasURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



app.listen(5000, () => console.log("server started on port 5000"));