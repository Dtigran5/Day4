// JavaScript code to handle hover effect
var itemList = document.getElementById("itemList");
var items = itemList.getElementsByTagName("li");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", function() {
    this.style.color = "red";
  });

  items[i].addEventListener("mouseout", function() {
    this.style.color = "black";
  });
}
