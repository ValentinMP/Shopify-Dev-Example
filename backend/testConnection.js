import mongoose from 'mongoose';

const uri = '<Your MongoDB URI>';

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');
        process.exit(0);
    })
    .catch((err) => {
        console.error('Connection error:', err.message);
        process.exit(1);
    });
