const express = require('express');
const path = require('path');
const app = express();

// app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// res.json({res:"Hello Ubuntu"})
res.send("hello Ubuntu..")
});

app.listen(5000,()=>{
    console.log("server run 5000")
});