let dailyBtn = document.querySelector(".daily-tab");
let monthBtn = document.querySelector(".monthly-tab");
let weekBtn = document.querySelector(".weekly-tab");

let hrs = document.querySelectorAll('.hrs');
let lastTime = document.querySelectorAll('.last-time') 

let loader = document.querySelector(".loader");


function dailyData(){
  fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    hrs.forEach((e,i) => {
      hrs[i].innerHTML = `${data[i].timeFrames.daily.current}hrs`; 
    })
    lastTime.forEach((e,i) => {
      lastTime[i].innerHTML = `Last Day - ${data[i].timeFrames.daily.previous}hrs`; 
    })
  })
}

function weeklyData(){
  fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    hrs.forEach((e,i) => {
      hrs[i].innerHTML = `${data[i].timeFrames.weekly.current}hrs`; 
    })
    lastTime.forEach((e,i) => {
      lastTime[i].innerHTML = `Last Week - ${data[i].timeFrames.weekly.previous}hrs`; 
    })
  })
}

function monthlyData(){
  fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    hrs.forEach((e,i) => {
      hrs[i].innerHTML = `${data[i].timeFrames.monthly.current}hrs`; 
    })
    lastTime.forEach((e,i) => {
      lastTime[i].innerHTML = `Last Month - ${data[i].timeFrames.monthly.previous}hrs`; 
    })
  })
}


dailyBtn.addEventListener('click', () => {
  loader.classList.add('loading')

  dailyBtn.classList.add('active');
  weekBtn.classList.remove('active');
  monthBtn.classList.remove('active');
  dailyData();

  setTimeout(() => {
    loader.classList.remove('loading')
  }, 1500)
})


weekBtn.addEventListener('click', () => {
  loader.classList.add('loading')

  dailyBtn.classList.remove('active');
  weekBtn.classList.add('active');
  monthBtn.classList.remove('active');
  weeklyData();

  setTimeout(() => {
    loader.classList.remove('loading')
  }, 1500)
})

monthBtn.addEventListener('click', () => {
  loader.classList.add('loading')

  dailyBtn.classList.remove('active');
  weekBtn.classList.remove('active');
  monthBtn.classList.add('active');
  monthlyData();

  setTimeout(() => {
    loader.classList.remove('loading')
  }, 1500)
})