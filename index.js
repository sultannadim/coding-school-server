const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Api comming soon");
});

app.listen(port, () => {
  console.log("server runnig from port : ", port);
});
