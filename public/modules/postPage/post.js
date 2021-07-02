function showWishlist() {
  var x = document.getElementById("list_box");
  var title = document.getElementById("nav_title");
  var img1 = "../../img/arrow.png";
  var img2 = "../../img/orangeArrow.png";
  var imgElement = document.getElementById("arrow");

  if (x.style.display === "block" && title.style.color === "red") {
    x.style.display = "none";
    title.style.color = "black";
    imgElement.src = img1;
  } else {
    x.style.display = "block";
    title.style.color = "red";
    imgElement.src = img2;
  }
}
