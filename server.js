const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 5000;

const connectDB = require("./db");
connectDB();

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Define Routes
app.use("", require("./routes/fetch-products"));
app.use("/note", require("./routes/save-note"));
app.use("/product", require("./routes/update-product"));

app.use(express.static(path.join(__dirname, 'boycott', 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'boycott', 'build', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
