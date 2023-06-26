// const rightbtn = document.querySelector('nextright')
// const leftbtn = document.querySelector('nextleft')
// const imgNuber =  document.querySelector(".slider-content-left-top img")
//   console.log(imgNuber.length)
//   let index = 0
//   rightbtn.addEventListener("click",function(){
//     index = index+1
//     if(index>imgNuber.length-1){
//       index = 0
//     }
//     document.querySelector(".slider-content-left-top").style.right = index *100+"%"
//   })
//   rightbtn.addEventListener("click",function(){
//     index = index-1
//     if(index <= 0){
//       index = imgNuber.length-1
//     }
//     document.querySelector(".slider-content-left-top").style.right = index *100+"%"
//   })


const countdown = document.querySelector('.countdown');
const timerHours = countdown.querySelector('.hours');
const timerMinutes = countdown.querySelector('.minutes');
const timerSeconds = countdown.querySelector('.seconds');

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

  return {
    total,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(endtime) {
  function updateClock() {
    const t = getTimeRemaining(endtime);

    
    timerHours.innerHTML = ('0' + t.hours).slice(-2);
    timerMinutes.innerHTML = ('0' + t.minutes).slice(-2);
    timerSeconds.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) +  2 * 60 * 60 * 1000);
initializeClock(deadline);












      