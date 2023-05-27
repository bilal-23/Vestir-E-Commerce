import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
    try {
        return await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tfip8.mongodb.net/vestir?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        console.log('Connected to the database');
    } catch (error) {
        throw new Error('Cannot connect to the database');
    }
};

export default connectDB;