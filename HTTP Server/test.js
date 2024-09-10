const express = require("express")
const app = express()

function sum(n){
    let ans =0
    for(let i =1;i<=n;i++){
        ans+=i
    }
    return ans
}
app.get('/',(req,res)=>{
    let n = req.query.n
    let ans = sum(n)
    res.send("The sum is: "+ans)
})

app.listen(3000)