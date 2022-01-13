document.getElementById("start").addEventListener("click", startCount);
document.getElementById("stop").addEventListener("click", stopCount);
document.getElementById("reset").addEventListener("click", resetCount);

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 70;
//const interval = setInterval(startCount, 1000);
var interval = null;

function startCount() {
  if (interval != null) return;
  interval = setInterval(()=>{
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60))
  }, 1000);
  
}

function stopCount() {
  clearInterval(interval);
  interval = null;
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function resetCount() {
  document.getElementById("minutes").innerHTML = "01";
  document.getElementById("seconds").innerHTML = "10";
  totalSeconds = 70;
  startCount();
}
