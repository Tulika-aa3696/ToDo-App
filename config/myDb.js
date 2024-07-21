const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('Connection was Established successfully'))
    .catch((error) => {
      console.log('Connection could not be Established');
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
