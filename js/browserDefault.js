"use strict";

const link = document.querySelector(".link");
const linkTwo = document.querySelector(".link-two");

link.onclick = (event) => {
  return false;
};

linkTwo.addEventListener("click", (event) => {
  event.preventDefault();
});

const menu = document.querySelector("#menu");

menu.onclick = (event) => {
  if (event.target.nodeName != "A") return;

  let href = event.target.getAttribute("href");
  alert(href);
  return false;
};

document.addEventListener("contextmenu", (event) => {
   if(event.defaultPrevented) return;
  alert("Котекст меню документа!");
  event.preventDefault();
  console.log(event.defaultPrevented);
});

function handler() {
  alert("...");
}

const heading = document.getElementById("elem");

document.addEventListener("hello", function (event) {
  alert("Hello with " + event.target.tagName);
});
let event = new Event('hello', {bubbles: true});
heading.dispatchEvent(event);

// let event = new MouseEvent("click", {
//   bubbles: true,
//   cancelable: false,
//   clientX: 100,
//   clientY: 100,
// });

alert(event.clientY);

const link = document.querySelector(".link");

link.onclick = function (event) {
  alert("Warning!");
  event.preventDefault();
};

const menu = document.querySelector("#menu");

menu.addEventListener("click", (event) => {
  if (event.defaultPrevented) true;

  let href = event.target.getAttribute("href");
  alert(href);

  event.preventDefault();
});

const link = document.querySelector(".link");

link.addEventListener("click", (event) => {
  alert("Warning!");
  event.preventDefault();
});

const menu = document.getElementById("menu");

menu.onclick = function (event) {
  if (event.target.nodeName != "A") return;

  let href = event.target.getAttribute("href");
  alert(href);
  return false;
};

const button = document.querySelector(".button");

button.oncontextmenu = (event) => {
  alert("Наше власне контекст меню!");
  event.stopPropagation();
  return false;
};

document.addEventListener("contextmenu", (event) => {
  if (event.defaultPrevented) return;
  event.preventDefault();
  alert("Контекстне меню документа");
});

const button = document.querySelector(".button");

button.onclick = (event) => {
  console.log("Is event!");
  console.log(event.isTrusted);
};

// const heading = document.querySelector("#elem");

document.addEventListener("hello", (event) => {
  alert("Привіт від " + event.target.tagName);
});

// let event = new Event("hello", { bubbles: true });

heading.dispatchEvent(event);

// let event = new MouseEvent("click", {
//   bubbles: true,
//   cancelable: true,
//   clientX: 0,
//   clientY: 100,
// });

alert(event.clientY);

// const heading = document.querySelector("#elem");

heading.addEventListener("hello", (event) => {
  alert(event.detail.age);
});

heading.dispatchEvent(
  new CustomEvent("hello", {
    detail: { age: 20 },
  })
);

const button = document.querySelector(".button");

button.onclick = function (event) {
  if (event.altKey && event.shiftlKey) {
    alert("Yes!");
  }
};

button.onclick = function (event) {
  if (event.altKey && event.shiftKey) {
    alert("Ура!");
  }
};

button.onmousemove = function (event) {
  button.innerHTML = event.clientX + ":" + event.clientY;
};

const button = document.querySelector(".button");

button.ondblclick = function (event) {
  alert("Hello");
};

document.oncopy = function (event) {
  alert("Копіювання заборонено!");
  return false;
};

const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (event) => {
  alert("Курсор заходить на елемент");
  console.log(event.type);
});

btn.addEventListener("mouseout", (event) => {
  alert("Курсор виходить з елемента!");
  console.log(event.type);
});
btn.addEventListener("mousemove", (event) => {
  console.log(event.type);
});
const span = document.querySelector(".dbl");
span.addEventListener("dblclick", (event) => {
  alert("DBL");
});
span.addEventListener("mousedown", (event) => {
  event.preventDefault();
});
document.addEventListener("copy", (event) => {
  if (event.ctrlKey != undefined) {
    alert("Копіювання заборонено!");
  }
  alert("Копіювання заборонено!");
});
buttonEx.addEventListener("mousedown", (event) => {
  console.log("Click");
});
buttonEx.addEventListener("mouseout", (event) => {
  alert("Кнопку відпущено!");
});
buttonEx.addEventListener("mousemove", (event) => {
  console.log(1);
});
buttonEx.ondblclick = (event) => {
  console.log(event.type);
  console.log("Hello dblClick");
};
buttonEx.addEventListener("contextmenu", (event) => {
  alert("Власне контекст меню");
  event.preventDefault();
});

const button = document.querySelector(".button");

button.addEventListener("click", (event) => {
  if (event.altKey || event.shiftKey) {
    alert("Клік на кнопку!");
  }
});
button.onclick = function () {
  alert("click");
};
button.addEventListener("mousedown", (event) => {
  alert("Клік на кнопку!");
});
button.addEventListener("mouseup", (event) => {
  alert("Відпущена кнопка!");
});
button.addEventListener("mouseover", (event) => {
  alert("Курсор заходить на елемент");
});
button.addEventListener("mouseout", (event) => {
  alert("Курсор залишає елемент!");
});
button.addEventListener("mousemove", (event) => {
  console.log(event.type);
  console.log("Курсор над елементом");
});

const button = document.querySelector(".down-up");

button.addEventListener("mousedown", (event) => {
  console.log(event.buttons);
  console.log(event.which);
});

button.addEventListener(
  "mousedown",
  (event) => {
    if (event.ctrlKey && event.altKey) {
      console.log(event.type);
    }
  },
  { once: false }
);

// const span = document.querySelector(".span");

span.ondblclick = (event) => {
  alert("DoubleClick");
};

span.addEventListener("mousedown", (event) => {
  event.preventDefault();
  console.log(event.ctrlKey);
});

document.addEventListener("copy", (event) => {
  alert("Копіювання тексту заборонено!");
  event.preventDefault();
});

const button = document.querySelector(".button");

button.addEventListener("mousedown", (event) => {
  console.log(`Натиснута кнопка ${event.button}`);
});

button.addEventListener("click", (evennt) => {
  console.log("Натиснута основна кнопка миші");
});

button.addEventListener("contextmenu", (event) => {
  console.log("Викликано контестне меню (права кнопка миші)");
});

button.addEventListener("mousemove", (event) => {
  console.log("Вводжу курсор по елементі!");
});

const block = document.querySelector(".block");
block.addEventListener("mousemove", (event) => {
  block.innerHTML = `clientX - ${event.clientX} <br /> clientY - ${event.clientY}`;
});

block.addEventListener("mouseenter", (event) => {
  console.log("Курсор над елементом");
});

block.addEventListener("mouseleave", (event) => {
  console.log("Курсор покинув елемент");
});

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  if ((event.shiftKey && event.ctrlKey) || (event.metaKey && event.ctrlKey)) {
    alert("click");
  }
});

document.addEventListener("mousemove", (event) => {
  console.log(`ClientX: ${event.clientX}  ClientY : ${event.clientY}`);
});

const button = document.querySelector(".click");

button.addEventListener("mousedown", (event) => {
  alert("Сталась подія mousedown");
});

button.addEventListener("mouseup", (event) => {
  alert("Сталась подія mouseup");
});

button.addEventListener("mouseover", (event) => {
  console.log("Курсор наведений на елемент");
});

button.addEventListener("mouseout", (event) => {
  console.log("Курсор покинув елемент!");
});

button.addEventListener("mousemove", function (event) {
  button.innerHTML = `Coordinates: ${event.clientX}: ${event.clientY}`;
});

button.style.cssText = `

   width: 300px;
   height: 300px;

`;

button.onclick = (event) => {
  console.log(event.target);
  console.log(event.type);
  console.log(event.currentTarget);
};

button.oncontextmenu = function (event) {
  alert("Відкрито наше власне контекстне меню");
//   event.preventDefault();
};

button.addEventListener("click", (event) => {
  if ((event.shiftKey && event.ctrlKey) ||
     (event.altKey && event.metaKey)) {
    alert("Нажата кнопка Shift + Ctrl + Click");
  }
});

button.style.cssText = `

   width: 250px;
   height: 250px;
`;

button.addEventListener("mousemove", (event) => {
  button.innerHTML = event.clientX + ":" + event.clientY;
});

let spanNode = document.querySelector(".span");

spanNode.addEventListener("dblclick", (event) => {
  alert("Спрацював doubleClick");
});

spanNode.addEventListener("mousedown", (event) => {
  console.log(event.altKey);
  event.preventDefault();
});

document.addEventListener("copy", (event) => {
  console.log(event.type);
  alert("Копіювання вмісту сайту - заборонено!");
  event.preventDefault();
});

const button = document.querySelector(".button");

button.addEventListener("mousedown", function (event) {
  console.log("Клік на ліву кнопку миші");
});

button.addEventListener('mouseup', function (event) {
  console.log("Відпустив кнопку миші");
});

button.onmouseover = (event) => {
  console.log("Курсор над елементом");
};

button.onmouseout = (event) => {
  console.log("Курсор виходить з елемента");
};

button.addEventListener("mousemove", (event) => {
  button.innerHTML = "Coordinates: " + event.clientX + ":" + event.clientY;
});

button.addEventListener("dblclick", function (event) {
  console.log("ДаблКлік");
});

button.onclick = (event) => {
  console.log(event.button);
};

button.addEventListener("click", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.altKey) {
    alert("Click");
  }
});

button.addEventListener("mousemove", (event) => {
  button.innerHTML = `Coordinates: ${event.clientX}:${event.clientY}`;
});

button.addEventListener("dblclick", (event) => {
  alert("DBLclick");
});

button.oncopy = (event) => {
  alert("Копіювання зобронено!");
  event.preventDefault();
};

const button = document.querySelector(".btn-ex");

button.addEventListener("mouseover", (event) => {
  console.log("Курсор над елементом");
  console.log(event.target);
  console.log(event.relatedTarget);
});

button.addEventListener("mouseout", (event) => {
  console.log("Курсор покидає елемент");
  console.log(event.target);
  console.log(event.relatedTarget.tagName);
});

const button = document.querySelector(".btn");

button.addEventListener("click", function (event) {
  console.log("Click");
});

button.addEventListener("click", function (event) {
  console.log("Clack");
});
