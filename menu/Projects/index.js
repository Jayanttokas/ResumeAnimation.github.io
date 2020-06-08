document.getElementById("back").addEventListener("click", fade);

function fade(){
  document.getElementById("shift").classList.add("fadeout");
  setTimeout(function(){
    window.location.assign("../index.html");
  },950)
}


// set the relative position of the content class
function position(id){
  document.getElementById(id).classList.add("pos");
}

//link to get to other pages
document.getElementById("1").addEventListener("click", clicked);
document.getElementById("2").addEventListener("click", clicked);
document.getElementById("3").addEventListener("click", clicked);
document.getElementById("4").addEventListener("click", clicked);
document.getElementById("5").addEventListener("click", clicked);
document.getElementById("6").addEventListener("click", clicked);
document.getElementById("7").addEventListener("click", clicked);
document.getElementById("8").addEventListener("click", clicked);


function clicked(e){
  document.getElementById(e.target.id).classList.add("scale");

  if (e.target.id == '1') {
    setTimeout (function(){
        window.location.assign("https://jayanttokas.github.io/NewResumetry.github.io/#firstPage");
    },300);
  } else if (e.target.id == "2") {
    setTimeout (function(){
        window.location.assign("https://jayanttokas.github.io/CarDealerShipTemplete.github.io/");
    },300);
  } else if (e.target.id == "3") {
    setTimeout (function(){
        window.location.assign("https://jayanttokas.github.io/Codeplayer.github.io/");
    },300);
  } else if (e.target.id == "4") {
    setTimeout (function(){
        window.location.assign("https://jayanttokas.github.io/BudgetCalculator.github.io/");
    },300);
  } else if (e.target.id == "5") {
    setTimeout (function(){
        window.location.assign("https://jayanttokas.github.io/CoffeeStore.github.io/");
    },300);
  } else if (e.target.id == "6") {
    setTimeout (function(){
        window.location.assign("https://jayanttokas.github.io/Project_picsApp/");
    },300);
  } else if (e.target.id == "7") {
    setTimeout (function(){
        window.location.assign("https://jayanttokas.github.io/ReactYtSearchApp/");
    },300);
  } else if (e.target.id == "8") {
    setTimeout (function(){
        window.location.assign("https://jayanttokas.github.io/Pigdicegame.github.io/");
    },300);
  }

}
