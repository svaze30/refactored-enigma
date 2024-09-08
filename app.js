const express = require("express");
const path = require("path");

const app = express();

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get("/new", (req, res) => {
//   res.render("new");
// });

const newRouter = require(path.join(__dirname, "routes", "newRouter"));
const indexRouter = require(path.join(__dirname, "routes", "indexRouter"));

app.use(express.urlencoded({ extended: true }));

// app.use("/new", newRouter);
app.use("/", indexRouter);
app.use("*", indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at port : ${PORT}`);
});
