let counter =0

function counterIncrease(){
    console.log("Counter is: "+ ++counter);
    setTimeout(counterIncrease, 1000);
}
counterIncrease()