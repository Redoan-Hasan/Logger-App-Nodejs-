const path = require('path');
const fs = require('fs');
const arguments = process.argv.slice(2);
const text = arguments.join(' ');
const timeStamps = new Date();
const message = `${text}. --> ${timeStamps} \n`
if(!message){
    console.log("❌ Please provide a text to log");
    console.log("Example: node index.js Hello World!!!");
    process.exit(1);
}
const fileName = path.join(__dirname,"log.txt");
fs.appendFile(fileName,message ,{encoding: "utf-8"}, ()=>{
    console.log("Your log added successfully!!! 😍");
})