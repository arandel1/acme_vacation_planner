const { client } = require('./db');

const init = async() => {
  console.log('connecting to database');
  await client.connect();

};

init();