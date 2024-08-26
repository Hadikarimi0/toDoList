let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let li = document.querySelector("li");
let i = document.querySelector("i");
const originalTitle = document.title;

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.title = "Where!!!";
  } else {
    document.title = originalTitle;
  }
});

btn.addEventListener("click", () => {
  let text = input.value;
  if (text !== "") {
    let task = createTask(text);
    task.innerHTML += `<span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>`;
    ul.appendChild(task);
    input.value = "";
  } else {
    alert("Please complete The Title");
  }
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    let ele = e.target.parentElement.parentElement;
    ele.style = "display : none";
  }
  if (e.target.nodeName === "LI") {
    let ele = e.target.classList.toggle("done");
  }
});

function createTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  return li;
}
