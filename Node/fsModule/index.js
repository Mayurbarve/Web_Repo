// const math = require("./module1");

// console.log(math.subFn(4,5))

const fs = require("fs");

//sync
// fs.writeFileSync("Sync.txt", "Jindagi ek safar hai suhana");
// //Async
// fs.writeFile("Async.text", "khoobsurat bahut hai lekin dil lagane ke kabil nahi hai", (err) => {})

// const result = fs.readFileSync("Sync.txt", "utf-8");
// console.log(result);

// fs.readFile("./Async.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log("Error", err)
//     }else{
//         console.log(result)
//     }
// })

// use for append contet in the file
// fs.appendFileSync("Sync.txt", "\nyaha kal kya ho kisne jana")

//delete the file
// fs.unlinkSync("./text.txt")