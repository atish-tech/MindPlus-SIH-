// inport dependency
const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const userRoute = require('./Routes/userRouter')
const cors = require('cors');

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

// connect with database
const connectDb = async () => {
    try {
    const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("Databse is connected");
    }
    catch (error) {
        console.log("database is not connected" , error.message);
    }
}
connectDb();


app.use('/user' , userRoute);
// app.get('/' , (request , response) => {
//     response.send("API is running");
// });
const PORT = process.env.PORT || 5000;

app.listen(PORT , console.log('server is running'));