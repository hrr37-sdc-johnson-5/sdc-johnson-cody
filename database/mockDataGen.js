const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

// const generateRandomComments = () => {
//   randomNumber = faker.random.number({
//     min: 1,
//     max: 5
//   });
//   let comments = [];
//   for (let i = 0; i < randomNumber; i++) {
//     comments.push({
//       username: faker.internet.userName(),
//       comment: faker.lorem.sentence(),
//       profileImgUrl: faker.internet.avatar()
//     });
//   }
//   return JSON.stringify(comments);
// }


// let randomComments = generateRandomComments();
// console.log(randomComments);
// console.log(randomComments.slice(0, randomComments.length - 2).split(";,"));

const createCSVdata = () => {
  console.time('timing seed');
  writer.pipe(fs.createWriteStream('comments.csv'));
  for (let i = 0; i < 10000000; i++) {
    const album_id = i;
    const commentsObj = JSON.stringify({
      username: faker.internet.userName(),
      comment: faker.lorem.sentence(),
      profileImgUrl: faker.internet.avatar()
    });
    writer.write({
      album_id,
      commentsObj
    })
  }

  writer.end();
  console.log('done!');
  console.timeEnd('timing seed');
}

createCSVdata();
