const fs = require("fs")

fs.readFile("file.txt", "utf-8",(err,data)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(data);  
})

function expensiveOperations(num){
    count = 0
    for (let index = 0; index < num; index++) {
        for(let i =0; i<num;i++){
            count+=i
        }
    }
    console.log(count);
}
expensiveOperations(100000)