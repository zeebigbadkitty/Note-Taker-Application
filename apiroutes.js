const router = require("express").Router()
const fs = require("fs")
let dbstore = require("./db/db.json")

//this is what fulfills the fetch
router.get("/notes", (req, res)=>{
dbstore = JSON.parse(fs.readFileSync("./db/db.json"))
res.json(dbstore)

})

router.post("/notes", (req, res)=>{
//request from the frontend
let newNote = {
   title: req.body.title, 
   text: req.body.text,
   id:Math.random()
}    
//pushing it
dbstore.push(newNote)
//rewriting the array with new note
fs.writeFileSync("./db/db.json", JSON.stringify(dbstore))

res.json(dbstore)
})
//"declaring what we want to keep"
router.delete("/notes/:id", (req, res)=>{
let updatedNotes = []
for(var i = 0; i<dbstore.length; i++) {
    
}

})

module.exports=router