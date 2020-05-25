document.getElementById("back").addEventListener("click", shift);

function shift(){
  document.getElementById("shift").classList.add("fade");
  setTimeout(function(){
    window.location.assign("../index.html");
  },950)
}


document.getElementById("social").addEventListener("click", link)

function link(e) {
  if(e.target.id =="fb"){
    window.location.assign("https://www.facebook.com/tokasjayant/");
  } else if( e.target.id == "ln"){
    window.location.assign("https://www.linkedin.com/in/jayant-tokas-466707171/");
  } else if (e.target.id == "git") {
    window.location.assign("https://github.com/Jayanttokas");
  } else if (e.target.id == "insta"){
    window.location.assign("https://www.instagram.com/lens_courtesy/");
  }
}
