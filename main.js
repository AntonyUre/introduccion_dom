let boxBtn = document.querySelector(".popup-dot");

let btnSend = document.querySelector(".btn-send");
let msj = document.querySelector(".mensaje");

for (let i = 0; i < 5; i++) { 
  let btn= document.createElement("button");
  btn.classList.add("btn");
  btn.classList.add(`btn-${i+1}`);
  btn.textContent = i + 1;
  boxBtn.appendChild(btn);
}

let btn = document.querySelector(".btn-1");
btn.addEventListener("click", clickBtn(btn));
let btn2 = document.querySelector(".btn-2");
btn.addEventListener("click", clickBtn(btn2));
let btn3 = document.querySelector(".btn-3");
btn.addEventListener("click", clickBtn(btn3));
let btn4 = document.querySelector(".btn-4");
btn.addEventListener("click", clickBtn(btn4));
let btn5 = document.querySelector(".btn-5");
btn.addEventListener("click", clickBtn(btn5));

function clickBtn(e) {
  console.log("se hizo click en el primer boton");
  e.style.backgroundColor = "blue";

  btnSend.addEventListener("click", sendMessage);
  function sendMessage() { 
    if (btn.style.backgroundColor === "blue") {
      msj.classList.toggle("mensaje-enviado");
      setTimeout(() => { 
        msj.classList.toggle("mensaje-enviado");

      },3000);
    
    }
  }
}

