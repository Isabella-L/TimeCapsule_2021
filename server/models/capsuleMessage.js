import mongoose from 'mongoose';

//what each private capsule must have
const privateSchema = mongoose.Schema({
    creator: String,
    title: String,
    message: String,
    //convert an image into a string using base 64
    selectedFile: String, 
    // likeCount: {
    //     type: Number,
    //     default: 0
    // },
    createAt: {
        type: Date,
        default: new Date()
    },
    openAt: {
        type: Date,
        default: new Date()
    }
});

//turn a schema in to a model
const PrivateMessage = mongoose.model('privateMessage', privateSchema);

export default PrivateMessage;