const fs = require("fs");
const { log } = require("util");

fs.readFile("file.txt", "utf-8",(err,data)=>{
    if(err){
        console.log("Error while reading the file:\n "+err);
        return
    }
    // deleting spaces from start and end
    data = data.trim()
    // converting to an array 
    dataList = data.split("")
    console.log(dataList);
    
    // removing unnecessary spaces in between the text
    newData = ''
    lastWasSpace = false
    dataList.map((str)=>{
        if(str===' '){
            if(!lastWasSpace)
                newData+=" "
            lastWasSpace = true
        }
        else{
            newData+=str
            lastWasSpace = false
        }
    })

    fs.writeFile("file.txt", newData,(err)=>{
        if(err)
            console.log("Error occured during writing the file: ", err);
        else
            console.log("Successfully written to the file. (Check the file)");
    })
})
