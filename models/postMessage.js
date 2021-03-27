import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    gender: String,
    group: String,
    caucassian: String,
    newcomer: String,
    
    forFamily: [],
    title: String,
    covid19Questionaire: [],
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;