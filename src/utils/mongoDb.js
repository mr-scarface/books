// const mongoose = require('mongoose');

// const mongooseOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// let mongoDb;
// (async function () {
//   const db = await mongoose.createConnection(process.env.MONGODB_URI, mongooseOptions);

//   db.once('open', () => {
//     console.log(`Mongo Database connected successfully`);
//   });

//   db.on('error', function (error) {
//     console.error(`Error in Mongo connection: ${error}`);
//     db.close();
//   });

//   db.on('close', function () {
//     console.log(`Closing Mongo Database...`);
//   });

//   mongoDb = db;
// })();

const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.Promise = global.Promise;

const mongoDb = mongoose.createConnection(process.env.MONGODB_URI, mongooseOptions, (err) => {
  if (!err) {
    console.log('Connected to MongoDB...');
  }
});

module.exports = { mongoDb };
