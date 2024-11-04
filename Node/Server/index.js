
const http = require("http");
const fs = require("fs");
const url = require("url")

//create server
const myServer = http.createServer((req, res) => {
    //remove extra data which print with response
    if(req.url === '/favicon.ico') return res.end();

    //load and save new requests on server (log data)
    const log = `${Date.now()} ${req.method}: ${req.url}New Request Received\n`;

    //parse the url and query parameters "?","&" ex: name : "mayur"
    const myUrl = url.parse(req.url, true);
    //print the respone url data and parameters 
    console.log(myUrl);

    //append the response data and log data into a log.txt file
    fs.appendFile("log.txt",log, (err, data) => {
        //pasre the pathname from myurl and pass to switch case
        switch(myUrl.pathname){
            case "/":
                res.end("Hello from Server!");
                break;
            case "/about":
                //in query parameter user enter ? name = "xyz" then it parsed ans save in search variable
                const search = myUrl.query.name
                res.end(`Hey! Iam ${search}`);
                break;
            case "/signup":
                if(req.method === "GET") res.end("SignUp Page");
                else if (req.method === "POST"){
                    //DB Query
                    res.end("Page Not Found");
                }
            default:
                res.end("Error 404 Page Not Found");
        }
    })
})

//define the server and show start signal!
myServer.listen(8000, () => console.log("Server Started!"))