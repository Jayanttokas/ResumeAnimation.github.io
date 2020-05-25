document.getElementById("back").addEventListener("click", shift);

function shift(){
  document.getElementById("shift").classList.add("shiftright");
  setTimeout(function(){
    window.location.assign("../index.html");
  },950)
};
