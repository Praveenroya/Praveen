const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: string,
    email:string,
})

const user = mongoose.model('user',userSchema);
model.exports = user;
