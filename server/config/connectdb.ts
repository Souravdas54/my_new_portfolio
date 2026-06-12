import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const dbName = "QR_CODE"

const mongodbUrl = `mongodb+srv://${username}:${password}@cluster0.ewwcraz.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`

// Define ANSI color codes
const green = "\x1b[32m";
const red = "\x1b[31m";

 const connectDatabse = async (): Promise<void> => {
    try {
        await mongoose.connect(mongodbUrl)
        console.log(`${green}MongoDB connection successfully ✔ to ${dbName}`);
    } catch (error) {
        console.error(`${red}MongoDB connection error. Please check your internet connection :`, error);
        setTimeout(connectDatabse, 5000)
    }
}

export default connectDatabse;