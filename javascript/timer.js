function showTime(){

    // Date Object
    const now = new Date(); //get current time from Date
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format our string
    const time = hours + ":" + minutes + ":" + seconds;

    // Display our string
    document.getElementById("timer").innerText = time;

    setTimeout(showTime, 1000);

}

showTime();