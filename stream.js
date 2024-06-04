const fs = require("fs");

const readstream = fs.createReadStream("./docs/large.txt");
const writestream = fs.createWriteStream("./docs/large-write.txt");

// readstream.on("data", (data) => {
//   writestream.write(data.toString());
//   writestream.write("-------------chunk-------------");
// });
readstream.pipe(writestream);
