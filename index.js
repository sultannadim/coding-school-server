const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const categories = require("./data/category.json");
const courseDetails = require("./data/details.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Api comming soon");
});

app.get("/courses", (req, res) => {
  res.send(courseDetails);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const details = courseDetails.find((d) => d.id == id);
  res.send(details);
});

app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const categoryCourse = courseDetails.filter((d) => d.id == id);
  res.send(categoryCourse);
});

app.listen(port, () => {
  console.log("server runnig from port : ", port);
});
