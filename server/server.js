import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import capsuleRoutes from './routes/capsules.js'

const app = express();

app.use(cors());
app.use(express.json({limit:"30mb", extended: true}));
app.use(express.urlencoded({limit:"30mb", extended: true}));

//http://localhost:5000
//set every routes inside the post.js routes is gonna start with /post
app.use('/capsules', capsuleRoutes);

//connect to mongoDB
const CONNECTION_URL = 'mongodb+srv://isabella:2021CoCoa@cluster.ahdmy.mongodb.net/timecapsules?retryWrites=true&w=majority';
//const CONNECTION_URL = 'mongodb+srv://Sicheng:lusicheng@cluster0.lb9og.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, () => console.log('Server running on port: 5000')))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
