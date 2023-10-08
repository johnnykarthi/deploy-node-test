require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT;

app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})

app.use('/api/user',require('./routes/userRoutes'))

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`)))
    .catch((err) => console.log(err))