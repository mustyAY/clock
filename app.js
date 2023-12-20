const milliHandle = document.querySelector('.handle__milli');
const secondHandle = document.querySelector('.handle__second');
const minuteHandle = document.querySelector('.handle__minute');
const hourHandle = document.querySelector('.handle__hour');

setInterval(() => {
    clock();
}, 1);

function clock() {

    const d = new Date();

    const milli = d.getMilliseconds();
    const seconds = d.getSeconds();
    const minutes = d.getMinutes();
    const hours = d.getHours();

    const millisTick = milli * (360 / 1000);
    const secondsTick = (seconds * 6) + (millisTick / 60);
    const minutesTick = (minutes * 6) + (secondsTick / 60)
    const hoursTick = (hours * 30) + (minutesTick / 12);

    milliHandle.style.transform = `rotate(${millisTick}deg)`
    secondHandle.style.transform = `rotate(${secondsTick}deg)`;
    minuteHandle.style.transform = `rotate(${minutesTick}deg)`;
    hourHandle.style.transform = `rotate(${hoursTick}deg)`

}