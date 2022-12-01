const express = require("express");
const app = express();
const path = require("path");
const apiroutes = require("./apiroutes.js")
const router = express.Router();

const PORT = process.env.PORT || 3001; //for deployment

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//Making the api routes available
app.use("/api", apiroutes)
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

//What we're sending to the user
app.get("/notes", (req, res) => {
res.sendFile(path.join(__dirname, "./public/notes.html"));
});

//Sending HTML
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
