/*
Import the fileSystem module/ library
*/
const fs = require("fs");
const { mkdir } = require("fs/promises");

// reading files
/*
fs.readFile('./Docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data); // logs the buffer
  console.log(data.toString()); // converts the buffer to the string
});
*/

// writing files
/*
fs.writeFile("./Docs/blog2.txt", "Hello Again node ninja", () => {
  console.log('File created and written to it');
});
*/
// Working with directories
/*
if (!fs.existsSync("./Assets")) {
  fs.mkdir("./Assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder created");
  });
} else {
  fs.rmdir("./Assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder deleted.");
  });
}
*/

// deleting files
if (fs.existsSync("./Docs/delete.txt")) {
  fs.unlink("./Docs/delete.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File Deleted");
  });
}
