const fs = require('fs')
fs.readFile('hello.txt','utf-8',(err,data)=>{
        if(data)
            console.log(data)
        else
            console.log(err)
    
})
console.log("nishikant");
console.log("namaster js");

function hello(){
    console.log("hello js");
    
}
setTimeout(hello,0)
sum =0
for(let i=0;i<100;i++){
    sum+=i
}
console.log(sum);

setTimeout(() => {
    console.log("hello js 2");
    
}, 1000);
setTimeout(() => {
    console.log("hello js 3");
    
}, 0);
ans =1
for(let i = 1;i<50;i++){
    ans*=i
}
console.log(ans);
for(let i = 1;i<50;i++){
    console.log(i);
    
}

setTimeout(() => {
    console.log("hi here");
    setTimeout(() => {
        console.log("I am inside timeout");
    }, 2000);
}, 1000);

setTimeout(() => {
    console.log("hi there");
}, 1000);
setTimeout(() => {
    console.log("I am outside timeout");
}, 2000);

const p = new Promise((reslove)=>{
    reslove();
});
console.log(typeof(p));
const n = new Date()
console.log(typeof(n));

for(let i = 0;i<4;i++)
    console.log(i);
    