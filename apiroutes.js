const router = require("express").Router()
const fs = require("fs")
let dbstore = require("./db/db.json")

//this is what fulfills the fetch
router.get("/notes", (req, res)=>{
dbstore = JSON.parse(fs.readFileSync("./db/db.json"))
res.json(dbstore)

})

router.post("/notes", (req, res)=>{
    
})



module.exports=router