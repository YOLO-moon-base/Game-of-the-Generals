function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("img", ev.target.id);
}
<<<<<<< Updated upstream
  
 document.getElementById("piece").addEventListener("dragstart", function(ev) {
  var img = document.createElement("img");
  img.src = "../images/invis.png";
  e.dataTransfer.setDragImage(img, 0, 0);
  }, false);
=======
>>>>>>> Stashed changes

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("img");
  ev.target.appendChild(document.getElementById(data));
}
