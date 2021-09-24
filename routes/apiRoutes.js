const router = require('express').Router();
let db = require("../db/db.json");

router.get("/notes", (req, res) => {
    res.json(db)
    // console.log("/api/notes response", res)
})

router.post('/notes', (req, res) => {
    req.body.id = db.length + 1;

    console.log("/api/notes post request", req.body)

    db.push(req.body)
    res.json(db)
})

router.delete("/notes/:id", (req, res) => {
    console.log("deletingggg", parseInt(req.params))

    var newDb = [];

    console.log("DATABASE LENGTH", db.length)
    for (var i = 0; i < db.length; i++) {
        console.log("each notes id", db[i].id)

        if (parseInt(req.params.id) !== db[i].id) {
            newDb.push(db[i])
        }  
    }
    db = newDb;
    res.json(db);

})

module.exports = router;