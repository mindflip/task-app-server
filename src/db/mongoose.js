const mongoose = require("mongoose");

const main = async function () {
  await mongoose.connect(process.env.MONGODB_URL);
};

main().catch((err) => console.log(err));
