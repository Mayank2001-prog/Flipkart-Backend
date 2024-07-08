import mongoose from "mongoose";

export const Connection = async (username, password) => {
  // const url = `mongodb+srv://${username}:${password}@mern-stack.ozlm389.mongodb.net/`;
  const url = `mongodb://${username}:${password}@ac-5x0dymx-shard-00-00.ozlm389.mongodb.net:27017,ac-5x0dymx-shard-00-01.ozlm389.mongodb.net:27017,ac-5x0dymx-shard-00-02.ozlm389.mongodb.net:27017/?ssl=true&replicaSet=atlas-d7ssfh-shard-0&authSource=admin&retryWrites=true&w=majority&appName=MERN-STACK`;

  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DataBase connected successfully");
  } catch {
    console.log("error while connecting with the database");
  }
};

export default Connection;
