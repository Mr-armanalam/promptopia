import mongoose from "mongoose";

let isConnected = false; //track the connection

// Connect to MongoDB
export const connectToDB = async () => {
    mongoose.set('strictQuery', true); // for error handling of database (throw error)

    if(isConnected) {
        console.log("Already connected to the database.");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "share_prompt"
        });
        isConnected = true;

        console.log("Connected to the MongoDB successfully.");
    } catch (error) {
        console.log(error);
    }
}