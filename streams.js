const fs = require("fs");

// read streams from  large data
const readstream = fs.createReadStream("./Docs/blog3.txt");

//write large data in streams to a new file
const writestream = fs.createWriteStream("./Docs/blog4.txt");

// read and write stream
/*
readstream.on("data", (chunk) => {
  console.log("--- NEW CHUNK ---");
  console.log(chunk.toString());


  writestream.write('\n---NEW CHUNK---\n');
  writestream.write(chunk);
});
*/

//piping
readstream.pipe(writestream);