'use strict';
const clock = document.getElementById('clock');

setInterval(() => {
    const date = new Date();
    let hour = date.getHours();
    const stringHour = hour.toString();
    let min = date.getMinutes();
    const stringMin = min.toString();
    let second = date.getSeconds();
    const stringSecond = second.toString();
    if(stringHour[1] == undefined) {
        hour = '0' + stringHour[0];
    }
    if(stringMin[1] == undefined) {
        min = '0' + stringMin[0];
    }
    if(stringSecond[1] == undefined) {
        second = '0' + stringSecond[0];
    }
    const time = `#${hour}${min}${second}`;
    const nowTime = `${hour}時${min}分${second}秒`;
    document.documentElement.style.setProperty('--background-color', time);
    clock.innerText = nowTime;
},1000);