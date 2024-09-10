const fs = require("fs")
const readLine = require("readline")
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})
fs.readFile("file.txt", "utf-8",(err,data)=>{
    if(err){
        console.log("Error while reading the file:\n "+err);
        return
    }
    
    console.log("Reading the file... \n"+data+"\n\n");
    rl.question("Write some data to insert in the file: ",(newData)=>{
        newData = data+newData
        rl.close()
        fs.writeFile("file.txt", newData, (err)=>{
            if(err)
                console.log("Error while writing in the file: ",err);
            else
            console.log("Succesfully written (Check you file)")
        })
    })
})
