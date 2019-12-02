var csv = require('csv-parser');
var fs = require('fs');
var results = [];
fs.createReadStream('input_day1.csv')
    .pipe(csv())
    .on('data', function (data) { return results.push(data); })
    .on('end', function () {
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
});
