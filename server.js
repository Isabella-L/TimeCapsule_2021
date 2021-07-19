const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
 
const routes = require('./routes/api');

//const MONGODB_URI = "mongodb+srv://Tianle:Le20020903@cluster0.lb9og.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//connect to DB
mongoose.connect('mongodb://localhost/TC',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connection.on('connected',() => {
    console.log('mongoose is connected!');
})
/*
//save date to DB
const data = {
    title: 'T1', 
    body: 'message1'
};

const newBlogPost = new BlogPost(data); //instance of the model

newBlogPost.save((error) => {
    if (error){
        console.log('Error happened');
    } else{
        console.log('Data has been saved!');
    }
});
*/

app.use(morgan('tiny'));
app.use('/',routes);

app.listen(PORT,console.log(`server is starting at ${PORT}`));