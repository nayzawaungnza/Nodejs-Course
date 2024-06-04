const { log } = require("console");
const fs = require("fs");

//read file system
// fs.readFile("./docs/contact.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//   }
//   if (data) {
//     console.log(data.toString());
//   }
// });

//write file system
// if (!fs.existsSync("./docs/contact.txt")) {
//   fs.writeFile("./docs/contact.txt", "Hello World", (error) => {
//     if (error) {
//       console.log(error);
//     }
//   });
// } else {
//   fs.unlink("./docs/contact.txt", (error) => {
//     if (error) {
//       console.log(error);
//     }
//   });
//   console.log("file deleted.");
// }
if (fs.existsSync("./new-folder")) {
  //forder delete
  fs.rmdir("./new-folder", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("forder delete.");
  });
} else {
  //forder create
  fs.mkdir("./new-folder", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("forder created.");
  });
}
