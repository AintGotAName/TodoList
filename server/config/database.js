import { connect } from "mongoose";

async function connectDB(connection) {
    console.log(`---------- Connecting database ----------\n`);
    try {
        await connect(connection);
        console.log(`---------- Database connected ----------\n`);
    } catch (err) {
        console.log(`---------- Failed to connect database ----------\n`);
    }
}

export { connectDB };
