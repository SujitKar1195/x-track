const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected!!!');
  } catch (error) {
    console.log('Not Connected!!');
  }
};
module.exports = connectDB;
