function countDown(value, element){
    let lis = document.querySelectorAll(`${element} li`);
    let str = '';
    if(value < 10){
        str = '0' + value;
    }else{
        str += value;
    }
    let values = str.split('');
    lis[0].innerHTML = values[0];
    lis[1].innerHTML = values[1];
}
function updateTime(){
    window.requestAnimationFrame(updateTime);
    let date = new Date();
    let day = 9;
    let hour = 23 - date.getHours();
    let minute = 59 - date.getMinutes();
    let second = 59 - date.getSeconds();
    countDown(second, ".second-container");
    countDown(minute, ".minute-container");
    countDown(hour, ".hour-container");
    countDown(day, ".day-container");
}
updateTime()
