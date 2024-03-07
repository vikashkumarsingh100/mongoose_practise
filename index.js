const mongoose=require('mongoose');



async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test")
}
main().then(()=>{
    console.log("server connected")
}).catch((err)=>{
    console.log(err)
});
const userSchema=mongoose.Schema({
    name:String,
    age:String,
    salary:String
})

const User=mongoose.model('User',userSchema);
// const user1=new User({name:"vikash",age:25,salary:70000});
// const user2=new User({name:"ketan",age:24,salary:72000});
// user1.save().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err);
// })
// user2.save().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// User.insertMany([{name:"rahul",age:45,salary:50000},{name:"rohan",age:5,salary:59000},{name:"raushan",age:52,salary:40000}])
// .then((data)=>{
//     console.log(data)
// }).catch((data)=>{
//     console.log(data);
// })
// User.findById("65e4e5a18c2763f232f5c00c").then((data)=>console.log(data)).catch((err)=>console.log(err));
// User.updateMany({salary:{$gt:50000}},{salary:60000}).then((data)=>console.log(data)).catch((err)=>console.log(err))
User.findOneAndDelete({salary:60000},{new:true},{multi:true}).then((data)=>console.log(data)).catch((err)=>console.log(err))