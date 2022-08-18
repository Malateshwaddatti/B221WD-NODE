const os=require("os");
const fs=require("fs");
const { error } = require("console");

console.log("Hello Guvi!!!");

function double(num){
    return num*2;
}
console.log(process.argv);
const num=process.argv[2];
console.log("the double value is :",double(num));

console.log("The total free memory is :",os.freemem());
console.log("The Total balance memory is :",os.totalmem());

fs.readFile("./next.text","utf-8",(err,data)=>{
    console.log(data);
    
    

});


fs.copyFile("./next.text","awsome.text",()=>{
    console.log("copy the filed");
})
fs.rename("./next.text","./good.text",()=>{
    console.log("copy the filed");


})
const data=fs.readFileSync("./next.text","utf8");
console.log(data);

