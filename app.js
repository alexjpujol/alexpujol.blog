const express = require('express');
const app = express();

app.use(express.static('./public'));;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/builds/production/index.html');
});

app.get('/blog', (req, res) => {
    res.send("This is the blog route!")
})

const port = 3000;

app.listen(port, () => {
    console.log("Listening on " + port);
})