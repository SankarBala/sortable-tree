function allowDrop(event) {
  event.preventDefault();
  const draggedElement = document.querySelector(".dragging");
  if (draggedElement) {
    event.target.classList.add("dragover");
  }
}

function drop(event) {
  event.preventDefault();
  const draggedElement = document.querySelector(".dragging");
  const dropZone = event.target.closest("ul, details");

  if (dropZone && draggedElement) {
    dropZone.appendChild(draggedElement);
    event.target.classList.remove("dragover");
  }
}

function drag(event) {
  event.dataTransfer.setData("text/plain", event.target.textContent);
  event.target.classList.add("dragging");
}

document.addEventListener("dragend", function (event) {
  const draggedElement = document.querySelector(".dragging");
  if (draggedElement) {
    draggedElement.classList.remove("dragging");
  }
});
