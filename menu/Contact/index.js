document.getElementById("back").addEventListener("click", shift);

function shift(){
  document.getElementById("shift").classList.add("shifttop");
  setTimeout(function(){
    window.location.assign("../index.html");
  },950)
}
