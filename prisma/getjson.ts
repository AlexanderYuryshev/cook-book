const csv = require('csvtojson');

async function csvToJson(path) {
    return await csv().fromFile(path);
}
csvToJson('./prisma/recipes.csv').then((data) => console.dir(data, {maxArrayLength: null}));
