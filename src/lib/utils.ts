import mongoose from "mongoose";

const connection = {
    isConnected: 0,
};

const mongoURI =
    process.env.NEXT_PUBLIC_MONGO || "mongodb://localhost:27017/plan";

console.log(mongoURI);
export const connectToDb = async () => {
    try {
        if (connection.isConnected === 1) {
            console.log("Using existing connection.");
            return;
        }
        const db = await mongoose.connect(mongoURI);
        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
};
