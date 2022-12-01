const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

const app = express();
const PORT = 3001;

//Starting Express Server

app.use(express.static("public"));
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

//What we're sending to the user
app.get("/index.html", (req, res) => res.send("."));

//Sending HTML
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
