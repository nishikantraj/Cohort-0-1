const { log } = require("console")
const express = require("express")
const app = express()

const user = [{
    name: "John",
    kidneys:[{
        healthy: false
    },{
        healthy:true
    }]
}]

app.use(express.json())

app.get('/',(req,res)=>{
    let totalKidney = user[0].kidneys.length
    let healthyKidney =0
    let unHealthyKidney =0
    for(let i =0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy)
            healthyKidney++
        else
            unHealthyKidney++
    }
    res.send({totalKidney:totalKidney,healthyKidney:healthyKidney,unHealthyKidney:unHealthyKidney})
})

app.post('/',(req,res)=>{
    let isHealthy = req.body.isHealthy
    // console.log(req.body);
    user[0].kidneys.push({healthy:isHealthy})
    res.send("kidney added")
})

app.put('/',(req,res)=>{
    if(checkAllKidneyHealthStatus(user)){
        for(let i = 0;i<user[0].kidneys.length;i++){
            if(!user[0].kidneys[i].healthy)
                user[0].kidneys[i].healthy = true
        }
        res.send("changes made")
    }
    else{
        res.send("All the kidneys are already healthy")
    }
})

app.delete('/',(req,res)=>{
    let onlyHealthyKidneys=[]
    if(user[0].kidneys.length > 0 && checkAllKidneyHealthStatus(user)){
        for(let i = 0;i<user[0].kidneys.length;i++){
            if(user[0].kidneys[i].healthy)
                onlyHealthyKidneys.push({healthy:true})
        }
        user[0].kidneys = onlyHealthyKidneys
        res.send("all kidneys are healthy now")
    }
    else{
        res.send("Error: No unhelathy Kidneys found")
    }
})


// All the extra functions
function checkAllKidneyHealthStatus(user){
    for(let i =0;i<user[0].kidneys.length;i++){
        if(!user[0].kidneys[i].healthy)
            return true
    }
    return false
}
app.listen(3000)