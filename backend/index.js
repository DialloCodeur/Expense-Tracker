import mongoose from "mongoose";
import "dotenv/config";

async function runGetStarted() {
    const uri = process.env.MONGO_URI;
    const client = await mongoose.connect(uri);

    console.log(client)

}
runGetStarted()
