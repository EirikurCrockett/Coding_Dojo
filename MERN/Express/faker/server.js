const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/test/post/repeat", (req, res) => {
    res.json({message : req.body})
})

app.listen(port, ()=>console.log(`running on port ${port}`))