// Deteccion de archivos de dom
let boxBtn = document.querySelector(".popup-dot");
let btnSend = document.querySelector(".btn-send");
let msj = document.querySelector(".mensaje");

// creacion de botones
for (let i = 0; i < 5; i++) { 
  let btn= document.createElement("button");
  btn.classList.add("btn");
  btn.classList.add(`btn-${i+1}`);
  btn.textContent = i + 1;
  boxBtn.appendChild(btn);
}
// Detectamos el click de los botones
let btn = document.querySelector(".btn-1");
btn.addEventListener("click", ()=> clickBtn(btn));
let btn2 = document.querySelector(".btn-2");
btn2.addEventListener("click", ()=> clickBtn(btn2));
let btn3 = document.querySelector(".btn-3");
btn3.addEventListener("click", ()=> clickBtn(btn3));
let btn4 = document.querySelector(".btn-4");
btn4.addEventListener("click", ()=> clickBtn(btn4));
let btn5 = document.querySelector(".btn-5");
btn5.addEventListener("click", ()=> clickBtn(btn5));

// Imprimimos en la consola y enviamso un mensaje
function clickBtn(e) {
  console.log("se hizo click en el primer boton");
  e.style.backgroundColor = "blue";

  btnSend.addEventListener("click", sendMessage);
  function sendMessage() { 
    if (btn.style.backgroundColor === "blue") {
      let textTitle = document.getElementById("mensaje-title")
      textTitle.textContent = `Se envio ${e}boton`;
      msj.classList.toggle("mensaje-enviado");
      setTimeout(() => { 
        msj.classList.toggle('mensaje-enviado');

      },3000);
    
    }
  }
}

