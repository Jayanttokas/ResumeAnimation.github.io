document.getElementById("back").addEventListener("click", shift);

function shift(){
  document.getElementById("shift").classList.add("shiftbottom");
  setTimeout(function(){
    window.location.assign("../index.html");
  },900)
}
