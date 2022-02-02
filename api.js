const express = require('express');
const app = express();
const port = process.env.PORT || 3000

schoollist = [{"School Name":"Bhola Nath Nagar-SBV (Babu Ram)","School ID":1001001}]

app.get('/', async(req, res) => {
    res.send(schoollist)
    try {

    } catch (error) {
        console.error(err);
        res.status(500).json({err: "Something went wrong"})
    }
})

app.listen(port, () => console.log('listening on port 3000'))