const fs = require("fs");
const path =  require("path");

try {

        //   create file
//  const x = path.join(__dirname, "assts");
//  fs.mkdirSync(x);
//  console.log("file created")

//    read file

//    const read = fs.readdirSync(path.join(__dirname, "assts"));
//    console.log(read);

// file remove

fs.rmdirSync(path.join(__dirname, "file"))

    
} catch (error) {
     console.log(error.message);
}