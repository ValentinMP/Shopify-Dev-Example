import mongoose from 'mongoose';
mongoose.set('debug', true); // Enable debug mode

const uri = "mongodb+srv://miculescuvalentin:eXMqJaHqj4QXXPd7@cluster0.l8ykv.mongodb.net/Pickyshop?retryWrites=true&w=majority";
const connectDB = async () => {
    try { 
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch(error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};
export default connectDB;