const express = require('express');
const app = express();
const port = process.env.PORT || 3000

schoollist = [{"School.Name":"Bhola Nath Nagar-SBV (Babu Ram)","School.id":1001001}]

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8000");
    next();
});
app.get('/', async(req, res) => {
    res.send(schoollist)
    try {

    } catch (error) {
        console.error(err);
        res.status(500).json({err: "Something went wrong"})
    }
})

app.listen(port, () => console.log('listening on port 3000'))