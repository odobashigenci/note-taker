const router = require('express').Router()
const fs = require('fs')
router.get('/notes', (req, res) => {
    const data = fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) throw err
        const allNotes = [].concat(JSON.parse(data))
        res.json(allNotes)
    })
})

router.post('/notes', (req, res) => {
    const data = fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) throw err
        const allNotes = [].concat(JSON.parse(data))
        const userData = req.body
        console.log(userData)
        allNotes.push(userData)
        fs.writeFile('db/db.json', JSON.stringify(allNotes), err => {
            if (err) throw err
            res.json('Note was added correctly!')
        } )
    })
})


module.exports = router