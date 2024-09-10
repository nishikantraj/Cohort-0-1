function getTime(){
    const date = new Date()

    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    // 24 Hour Formatted
    let formatted24Hour = format24(hour,minute, second)
    // 12 Hour formatted
    let formatted12Hour = format12(hour,minute, second)

    console.log("24-hour format: " + formatted24Hour);
    console.log("12-hour format: " + formatted12Hour+"\n\n");
}

function format24(hours, minutes, seconds) {
    // Add leading zeros if needed
    const pad = (num) => num.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function format12(hours, minutes, seconds) {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours || 12; // the hour '0' should be '12'
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
}

// Function to add leading zeros
function pad(num) {
    return num.toString().padStart(2, '0');
}

setInterval(getTime,1000)