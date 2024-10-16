///favicon.ico
const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if(req.url === 'favicon.ico') return res.end()

    const log = `$Date.now(): req.method`

    fs.appendFile("log.txt", log ,  )
    res.end("Hey! I am mayura");
})

myServer.listen(8000, () => console.log("Server Started"));