window.addEventListener("load", showTasks);
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let tasks;

if (!localStorage.getItem("todo")) {
  tasks = [];
} else {
  tasks = getTask();
}

const originalTitle = document.title;

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.title = "Where!!!";
  } else {
    document.title = originalTitle;
  }
});

btn.addEventListener("click", handleButtonClick);
btn.addEventListener("touchstart", handleButtonClick);

function handleButtonClick(event) {
  let text = input.value;
  if (text !== "") {
    saveTask(text);
    input.value = "";
    showTasks(); 
  } else {
    alert("Please complete The Title");
  }
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleButtonClick();
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    let ele = e.target.parentElement.parentElement;
    ele.style = "display: none";
    removeTask(ele.textContent.trim()); 
  }
  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("done");
  }
});

ul.addEventListener("touchend", (e) => {
  if (e.target.nodeName === "I") {
    let ele = e.target.parentElement.parentElement;
    ele.style = "display: none";
    removeTask(ele.textContent.trim()); 
  }
  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("done");
  }
});

function createTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  li.innerHTML += `<span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>`;
  return li;
}

function saveTask(text) {
  tasks.push(text);
  localStorage.setItem("todo", tasks);
}

function getTask() {
  return localStorage.getItem("todo").split(",");
}

function showTasks() {
  ul.innerHTML = "";  
  for (const taskText of tasks) {
    let task = createTask(taskText);
    ul.appendChild(task);
  }
}

function removeTask(taskText) {
  tasks = tasks.filter((task) => task !== taskText);
  localStorage.setItem("todo", tasks);
}
