//declare variable
var hour;
var min;
var sec;
var date;

//every 1000ms run through time fx
setInterval(time, 1000);

function time() {
    date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    change();
    addzero();
    remainder();
    remainder2();
    remainder3();
    remainder4();
    remainder5();
}

// this makes 5--> 05
function addzero() {
    if (hour < 10) {
        document.querySelector("#hr").innerText = "0" + hour;
    }

    if (min < 10) {
        document.querySelector("#mn").innerText = "0" + min;
    }

    if (sec < 10) {
        document.querySelector("#sc").innerText = "0" + sec;
    }

}

// this changes background colors based on division by 7,11,13,17
function remainder() {
    if (sec % 7 > 0) {
    document.querySelector("#bd").style.background = 'linear-gradient(0.25turn, #743b06, #43125f, #2825c5';
    }
}

function remainder2() {
    if (sec % 7 == 0) {
    document.querySelector("#bd").style.background = 'blue';
    }
}

function remainder3() {
    if (sec % 11 == 0) {
    document.querySelector("#bd").style.background = 'red';
    }
}

function remainder4() {
    if (sec % 13 == 0) {
    document.querySelector("#bd").style.background = 'green';
    }
}

function remainder5() {
    if (sec % 17 == 0) {
    document.querySelector("#bd").style.background = 'black';
    }
}

//this inserts updated time for top function 
function change() {
    document.querySelector("#hr").innerText = hour;
    document.querySelector("#mn").innerText = min;
    document.querySelector("#sc").innerText = sec;
}

