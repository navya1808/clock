console.log('hello, we r making clock now');

function updateClock(){ 
let todayDate = new Date();
let hours = todayDate.getHours();
let minutes = todayDate.getMinutes();
let seconds = todayDate.getSeconds();

let timeOfDay = (hours < 12) ? "AM" : "PM";
let currentMinutes = (minutes <10) ? ("0" + minutes) : minutes; 
let currentSeconds = (seconds <10) ? ("0" + seconds) : seconds;
let currentHours = (hours > 12)? (hours - 12) : hours;
currentHours = (hours == 0)? "12" : currentHours;

let date = currentHours + ":" + currentMinutes + ":" + currentSeconds  + " " + timeOfDay;


document.getElementById('clock').innerHTML = date;
}