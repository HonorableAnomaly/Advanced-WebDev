#!/usr/bin/env node

// Node fs module
// import chalk from "chalk";
const fs = require("fs");
const path = require("path");

// Example #2 - Option 2 (Not ideal - using promisify as a method)
// const util = require("util");

// const lstat = util.promisify(fs.lstat)

// Example #2 - Option 3 (Not ideal - built-in promises module)
// const { lstat } = fs.promises;

// Example #3 - add async keyword to fs below (Ideal - Promise option in the module)
const { lstat } = fs.promises;

//
//
// Process module does not need to be required
// Process.cwd uses current working directory
const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
  // Variety of error handling options
  if (err) {
    // throw new Error(err);
    console.log(err);
    // return;
  }
  //   BAD CODE!!!
  //   for (let filename of filenames) {
  //     fs.lstat(filename, (err, stats) => {
  //       if (err) {
  //         console.log(err);
  //       }

  //       console.log(filename, stats.isFile());
  //     });
  //   }
  //   END OF BAD CODE!

  //   Example #1 (Not ideal - with any additional complexity, this will fall apart)
  //   const allStats = Array(filenames.length).fill(null);

  //   for (let filename of filenames) {
  //     const index = filenames.indexOf(filename);
  //     fs.lstat(filename, (err, stats) => {
  //       if (err) {
  //         console.log(err);
  //       }

  //       allStats[index] = stats;

  //       const ready = allStats.every((stats) => {
  //         return stats;
  //       });

  //       if (ready) {
  //         allStats.forEach((stats, index) => {
  //           console.log(filenames[index], stats.isFile());
  //         });
  //       }
  //     });
  //   }

  //   Example #2 - Option 3 continued - add async keyword to fs at top (Not ideal - does not scale)
  //   for (let filename of filenames) {
  //     try {
  //         const stats = await lstat(filename)

  //         console.log(filename, stats.isFile())
  //     } catch (err) {
  //         console.log(err)
  //     }
  //   }

  // Example #3 - add async keyword to fs at top (Ideal - Promise option in the module)
  const statPromises = filenames.map((filename) => {
    return lstat(path.join(targetDir, filename));
  });

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(filenames[index]);
    } else {
      // Enhance with Chalk
      console.log(filenames[index]);
    }
  }
});

// Example #2 - Option 1 (Not ideal - manual promise)
// const lstat = (filename) => {
//   return new Promise((res, rej) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         rej(err);
//       }

//       res(stats);
//     });
//   });
// };
