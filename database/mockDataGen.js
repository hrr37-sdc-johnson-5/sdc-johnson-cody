const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const createCSVdata = () => {
  console.time('timing gen');


  writer.pipe(fs.createWriteStream('comments.csv'));
  for (let i = 0; i < 10000000; i++) {
    const id = i;
    const randomId = faker.random.number({
          min: 1,
          max: 10000000
        });
    const username = faker.internet.userName();
    const comment = faker.lorem.sentence();
    const profileImg = faker.internet.avatar();
    writer.write({
      id: id,
      albumId: randomId,
      username: username,
      comment: comment,
      profileImg: profileImg
    })
  }
  writer.end();
  console.log('done!');
  console.timeEnd('timing gen');
}

createCSVdata();
