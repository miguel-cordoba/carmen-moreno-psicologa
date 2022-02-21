// document.getElementById("hamburger").addEventListener("click", function(e) {
//    document.body.classList.add("on");
// });
window.onscroll = () => {
  const nav = document.querySelector("#navbar");
  if (this.scrollY <= 500) nav.className = "";
  else nav.className = "scroll";
};

var burgeranchor = document.getElementsByClassName("menu2Anchor");

for (var i = 0; i < burgeranchor.length; i++) {
  burgeranchor[i].addEventListener("click", function(e) {
    var x = document.getElementById("burgercheck");
    x.checked = false;
  });
}
