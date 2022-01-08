const mongoose = requir("mongoose");

main().catch((err) => console.log(err));

const main = async function () {
  await mongoose.connect(process.env.MONGODB_URL);
};
