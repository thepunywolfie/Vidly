const mongoose=require('mongoose')
const id=mongoose.Types.ObjectId();
console.log(id.getTimestamp());

const isValid=mongoose.Types.ObjectId.isValid('1234')
console.log(isValid);