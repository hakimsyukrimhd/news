const router = require("express").Router();

router.get("/", (req,res)=>{
    res.send("ROUTES TO NEWS")
})

module.exports = router;