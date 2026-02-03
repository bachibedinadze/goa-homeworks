const fs = require('fs');

const writeStream = fs.createWriteStream('./output.txt', { flags: 'w' });

writeStream.write('პირველი ხაზი\n');
writeStream.write('მეორე ხაზი\n');
writeStream.write('მესამე ხაზი\n');
writeStream.write('მეოთხე ხაზი\n');

writeStream.end();

writeStream.on('finish', () => {
  console.log('ჩაწერა დასრულდა');
});