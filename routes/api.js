const express = require('express');

const router = express.Router();

const BlogPost = require('../model/BlogPost');

//Routes
router.get('/api',(req,res) => {

    BlogPost.find({ })
       .then((data) => {
           console.log('Data: ',data);
           res.json(data);
    })
       .catch((error) => {
           console.log('error: ',daerrorta);
    });
});

router.post('/api/save',async(req,res) =>{
    console.log('Body: ',req.data);
    res.json({
        msg: "We received your data!"
    });
});

router.get('/api/name',(req,res) =>{
    const data = {
        username: "user3",
        message: "message3"
    };
    res.json(data);
});

module.exports = router;