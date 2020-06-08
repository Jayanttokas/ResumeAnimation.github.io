// set the relative position of the content class
function position(id){
  document.getElementById(id).classList.add("pos");
}

// set the class according to the element on which we are hovering
function about(id) {
  document.getElementById("details").classList.remove("fade");
  switch (id) {
    case 1:
      document.getElementById("detailhead").innerHTML = "About Me";
      document.getElementById("detailhead").classList.add("zoom");
      break;

    case 2:
      document.getElementById("detailhead").innerHTML = "Skills";
      document.getElementById("detailhead").classList.add("zoom");
      break;

    case 3:
      document.getElementById("detailhead").innerHTML = "Education";
      document.getElementById("detailhead").classList.add("zoom");
      break;

    case 4:
      document.getElementById("detailhead").innerHTML = "Projects";
      document.getElementById("detailhead").classList.add("zoom");
      break;

    case 5:
      document.getElementById("detailhead").innerHTML = "Connect On Social Media";
      document.getElementById("detailhead").classList.add("zoom");
      break;

    case 6:
      document.getElementById("detailhead").innerHTML = "Contact Me";
      document.getElementById("detailhead").classList.add("zoom");
      break;

    default:

  }
}

// remove the classes of bottom details part
function aboutOff() {
  document.getElementById("detailhead").innerHTML = "Web Developer | Graphic Designer";
  document.getElementById("details").classList.add("fade");
  document.getElementById("detailhead").classList.remove("zoom");
  document.getElementById("detailhead").classList.remove("right");
}

//link to get to other pages
document.getElementById("1").addEventListener("click", clicked);
document.getElementById("2").addEventListener("click", clicked);
document.getElementById("3").addEventListener("click", clicked);
document.getElementById("4").addEventListener("click", clicked);
document.getElementById("5").addEventListener("click", clicked);
document.getElementById("6").addEventListener("click", clicked);

function clicked(e){
  document.getElementById(e.target.id).classList.add("scale");

  if (e.target.id == '1') {
    setTimeout (function(){
        window.location.assign("AboutMe/index.html");
    },300);
  } else if (e.target.id == "2") {
    setTimeout (function(){
        window.location.assign("Skills/index.html");
    },300);
  } else if (e.target.id == "3") {
    setTimeout (function(){
        window.location.assign("Education/index.html");
    },300);
  } else if (e.target.id == "4") {
    setTimeout (function(){
        window.location.assign("Projects/index.html");
    },300);
  } else if (e.target.id == "5") {
    setTimeout (function(){
        window.location.assign("Social/index.html");
    },300);
  } else if (e.target.id == "6") {
    setTimeout (function(){
        window.location.assign("Contact/index.html");
    },300);
  }

}
