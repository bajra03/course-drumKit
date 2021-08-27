var numberOfButton = document.querySelectorAll(".drum").length;
console.log(numberOfButton);

for (var i = 0; i < numberOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("Got clicked!");
  });
}