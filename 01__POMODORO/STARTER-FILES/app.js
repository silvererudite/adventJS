// pomodoro time of 25 mins -> some way to store it
// time_left = 25 
// after every min elapsed, the timer decrements by one
// events - start, stop, 
// when user clicks start btn it should change to stop and vice versa
// start -> event fired where after every 60 secs i.e 
// seconds_elapsed % 60 
// we decrement time_left by 1

// event -> stop 
// event also stops firing when timer reaches 0
// seconds event would stop until the user presses the start button again

// state to check if timer has started or not


let timerStarted = false;
let timer_btn = document.getElementById('start-btn');
let totalTime = document.getElementById('timeValue');
let timerId = null;
let time_left = totalTime.value;
timer_btn.addEventListener('click', fireTimer);

function fireTimer(){
  
  if(!timerStarted){
    timer_btn.textContent = "Stop";
    timerId = setInterval(decrementTimer, 60000);
  }
  else{
    clearInterval(timerId);
    timer_btn.textContent = "Start";
  }
  
  timerStarted = !timerStarted;
}

function decrementTimer(){
  totalTime.value = time_left;
  if(!time_left){
    clearInterval(timerId);
    timer_btn.textContent = "Start";
  }

  time_left--;
}


