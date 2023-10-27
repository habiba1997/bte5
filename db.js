const mongoose = require('mongoose');
const db = 'mongodb+srv://habibahmedmagdy2023:5j9Clm426jdLgYmi@cluster0.mt2lvzh.mongodb.net/boycott?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log(`Mongoose connected.....`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
