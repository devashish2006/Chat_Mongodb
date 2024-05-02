const mongoose = require("mongoose");
const Chat = require('./models/chat.js')

main()
    .then(() => {
    console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let allChats = [
//     {
//         from: "ankur",
//         to: "shubh",
//         msg: "what is an array",
//         created_at: new Date(),
//     },
//     {
//         from: "mehul",
//         to: "shubh",
//         msg: "aur kya scene h",
//         created_at: new Date(),
//     },
//     {
//         from: "shriyansh",
//         to: "shubh",
//         msg: "aur bhai kya chal raha",
//         created_at: new Date(),
//     },
//     {
//         from: "ankur",
//         to: "shriyansh",
//         msg: "what is your future pan",
//         created_at: new Date(),
//     },
//     {
//         from: "shubh",
//         to: "mehul",
//         msg: "kya chal raha h",
//         created_at: new Date(),
//     },
//     {
//         from: "raja",
//         to: "ankur",
//         msg: "germany bola lo!",
//         created_at: new Date(),
//     },
//     {
//         from: "tanish",
//         to: "somya",
//         msg: "mai a raha hu darwaza khol dena papa ko ni batana",
//         created_at: new Date(),
//     },
    
// ]
//  Chat.insertMany(allChats);
