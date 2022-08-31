/*console.dir(document);
console.log(document.getElementById("msg"))
console.dir(document.getElementById("msg"))
var k= document.querySelectorAll(".anchor")
console.log(k[1].textContent)
k = document.querySelector(".msg")
console.log(k);
k.style.color = "red"
k.style.fontWeight = "900"
console.log(k.style)

const links = document.querySelectorAll("a")
console.log(links);
for (var i of links){
  console.log(i)
  i.style.fontSize = "25px"
}
const k = document.querySelector(".msg")
console.log(k.innerHTML)
/*k.innerHTML = "<h1> CHANGED </h1>"
const rootNode = document.getRootNode();
console.log(document.querySelectorAll("body")[0])
console.log(rootNode.childNodes[1])
let boody= document.querySelector("body")
let heady= document.querySelector(".head")
console.log(boody.classList)
boody.classList.toggle("bgClass")
heady.classList.toggle("bgClass")
let todo= document.querySelector("#TodoMsg")
console.log(todo.textContent);
const liElement = document.createElement("li");
liElement.textContent = "Hero hai tu";
todo.append(liElement)
/*for (let i=1; i<=5; i++){
  var ka = "liElement" + i
  ka = document.createElement("li");
  ka.textContent = "start "+ i;
  todo.append(ka);
}
for (let i=1; i<=4; i++){
  const todo1 = document.querySelector("#TodoMsg li")
  todo1.remove()
}

todo.insertAdjacentHTML('afterbegin', '<li> <h2 >Hero2 </h2> </li>')
todo.insertAdjacentHTML('afterbegin', '<li> <h2 >Hero3 </h2> </li>')
console.log(todo.getBoundingClientRect())

const btn = document.querySelector(".btn");
console.log(btn);
const btnn = () => alert("hi");
btn.addEventListener("click", function (a) {
  var data = this.textContent;
  console.log(a)
})
const btn = document.querySelector(".btn")
console.log(btn)
let i = 0;
btn.addEventListener("click", function (e) {
  todo = document.querySelector(".Todo-Msg");
  console.log(todo)
  e.target.style.backgroundColor= "green"
  i++;
  todo.insertAdjacentHTML("beforeend", `<li class="todolist">Hero ${i}</li>`)
  const msgs = document.querySelector(".write");
  console.log(msgs.textContent)
})*/
           // Main Project //
const btn = document.querySelector(".form1");
const text = document.querySelector(".write");
const todo = document.querySelector(".Todo-Msg");
btn.addEventListener("submit", (e) => {
  e.preventDefault();
  const text_value =  text.value;
  todo.insertAdjacentHTML("beforeend",`<li >
          <span class="msg"> ${text_value}</span>
          <div class="todo-btn">
          <button class="btn done">Done</button>
          <button class="btn remove">Remove</button>
          </div>
          </li>`);
  text.value ="";
});

todo.addEventListener("click", (e) => {
  const msgBtn = document.querySelectorAll(".todo-btn button")
  
  if (e.target.classList.contains("remove")){
    e.target.remove;
  }
  if (e.target.classList.contains("done")){
    const done = e.target.parentNode.parentNode;
    done.style.backgroundColor = "green"
    e.target.remove();
  }
  if (e.target.classList.contains("remove")){
    const removeList = e.target.parentNode.parentNode;
    removeList.remove();
  }
});

