let pause_time_image_logo = document.getElementById("pause-time-image-logo");
let pause_time_image = document.getElementById("pause-time-image");

let time = document.getElementById("time");
let time_added = document.getElementById("time-added");

let no_time_message = document.getElementById("no-time-message");
let time_range_message = document.getElementById("time-range-message");

let min_sec = document.getElementById("min-sec");
let min_label = document.getElementById("min-label");
let sec_label = document.getElementById("sec-label");

let min = document.getElementById("min").value;
let sec = document.getElementById("sec").value;

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");


time.style.display = "inline";
time_added.style.display = "none";

stopButton.style.display = "none";
resetButton.style.display = "none";


function play() {
    var audio = new Audio("sound/Pause-Time-Alarm.wav");
    audio.play();
};


let minutes = 0;
let secondes = 0;

let timeout;

let isStopped = true;


const start = () => {
    pause_time_image_logo.style.display = "none";
    pause_time_image.style.display = "inline";
    pause_time_image.style.marginLeft = "120px";

    time_added.style.display = "inline";

    min_sec.style.display = "none";

    min_label.style.display = "none";
    sec_label.style.display = "none";
    
    stopButton.style.display = "inline";
    resetButton.style.display = "inline";
    resetButton.style.marginLeft = "70px";

    if (isStopped) {
        isStopped = false;
        time_goes_on();
    }
};


const stop = () => {
    if (!isStopped) {
        isStopped = true;
        clearTimeout(timeout);

        pause_time_image_logo.style.display = "inline";
        pause_time_image_logo.style.marginLeft = "120px";
        pause_time_image.style.display = "none";

        min_sec.style.display = "none";
        
        min_label.style.display = "none";
        sec_label.style.display = "none";
        
        startButton.style.display = "inline";
        startButton.style.marginLeft = "8px";
        stopButton.style.display = "none";
        resetButton.style.marginLeft = "8px";
    }
};


const time_goes_on = () => {
    secondes = parseInt(secondes);
    minutes = parseInt(minutes);

    secondes += 1;

    if (secondes == 60) {
        minutes++;
        secondes = 0;
    }

    if (minutes == 60) {
        minutes = 0;
    }

    if (secondes < 10) {
        secondes = "0" + secondes;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    time.textContent = `${minutes}:${secondes}`;
    timeout = setTimeout(time_goes_on, 1000);
    time_added.style.marginLeft = "110px";

    let min = document.getElementById("min").value;
    let sec = document.getElementById("sec").value;

    if (sec < 10) {
        sec = "0" + sec;
    }

    if (min <= 0) {
        min = "00" + min;
        time_added.style.marginLeft = "85px";
    }

    if (min > 0 && sec < 1) {
        sec = "0" + sec;
    }

    if (min > 10) {
        time_added.style.marginLeft = "85px";
    }



    if (min === "01" || min === "02" || min === "03" || min === "04" || min === "05" || min === "06" || min === "07" || min === "08" || min === "09") {
        time_added.style.marginLeft = "85px";
    }

    time_added.textContent = `${min}:${sec}`;


    if (parseInt(minutes) == min && parseInt(secondes) == sec) {
        play();
        clearTimeout(timeout);

        pause_time_image_logo.style.display = "inline";
        pause_time_image_logo.style.marginLeft = "120px";
        pause_time_image.style.display = "none";

        time.style.color = "red";
        time_added.style.display = "none";

        min_sec.style.display = "none";
        
        min_label.style.display = "none";
        sec_label.style.display = "none";

        stopButton.style.display = "none";
        resetButton.style.display = "inline";
    }

    else if (sec < 1 && min < 1) {
        clearTimeout(timeout);
        time.textContent = "00:00";

        pause_time_image_logo.style.display = "inline";
        pause_time_image_logo.style.marginLeft = "50px";
        pause_time_image.style.display = "none";

        no_time_message.style.display = "inline";
        no_time_message.style.color = "white";

        time.style.display = "none";
        time_added.style.display = "none";

        min_sec.style.display = "none";
        
        min_label.style.display = "none";
        sec_label.style.display = "none";
        
        stopButton.style.display = "none";
        resetButton.style.display = "inline";
        resetButton.style.marginLeft = "8px";
    }

    else if (sec > 59 || min > 59) {
        clearTimeout(timeout);
        time.textContent = "00:00";

        pause_time_image_logo.style.display = "inline";
        pause_time_image_logo.style.marginLeft = "50px";
        pause_time_image.style.display = "none";

        time_range_message.style.display = "inline";
        time_range_message.style.color = "white";
        time_range_message.style.textAlign = "center";

        time.style.display = "none";
        time_added.style.display = "none";

        min_sec.style.display = "none";

        min_label.style.display = "none";
        sec_label.style.display = "none";

        stopButton.style.display = "none";
        resetButton.style.display = "inline";
        resetButton.style.marginLeft = "8px";
    }

    else if (min == 10) {
    time_added.style.marginLeft = "85px";
    }

    startButton.style.display = "none";
};


const reset = () => {
    location.reload();
};


startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);