const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector('.deadline');
const giveaway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.deadline-format h4');

let tmpDate = new Date();
[tmpYear, tmpMonth, tmpDay] = [tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate()];

// let futureDate = new Date(2021,0,19,0,0,0);
const futureDate = new Date(tmpYear, tmpMonth, tmpDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${month} ${year} ${hours}:${mins}am`;

// future time in miliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  [oneDay, oneHour, oneMinute] = [24*60*60*1000, 60*60*1000, 60*1000];
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let mins = Math.floor((t % oneHour) / oneMinute);
  let secs = Math.floor((t % oneMinute)/1000);
  
  // set values array
  const values = [days, hours, mins, secs];
  items.forEach((item, i) => item.innerHTML = values[i]>=10 ? values[i] : `0${values[i]}`);

  if(t < 0){
    // you need to call getRemainingTime after defining countdown variable in order to access it
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}

// countdown
// call getRemainingTime every second
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();