const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".notes-container");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("data")
}

showNotes()

function updateNotes() {
    localStorage.setItem("data", notesContainer.innerHTML)
}

createBtn.addEventListener("click", function () {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.classList.add("input-box");
    inputBox.setAttribute("contenteditable", "true");
    img.src = "/images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateNotes()
  });

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateNotes()
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box")
    notes.forEach(note => {
        note.onkeyup = function() {
            updateNotes()
        }
    })
  }
});

document.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        document.execCommand("insertLineBreak")
        e.preventDefault()
    }
})