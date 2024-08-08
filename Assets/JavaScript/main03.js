
const elemento01 = document.querySelector("#valor01");
const elemento02 = document.querySelector("#valor02");
const elemento03 = document.querySelector("#valor03");
const button = document.querySelector(".ingresar");


button.addEventListener("click", () => {
  
  const seleccion01 = elemento01.value;
  const seleccion02 = elemento02.value;
  const seleccion03 = elemento03.value;

  if (seleccion01 + seleccion02 + seleccion03 == "911") {
    document.querySelector(".texto").innerHTML = "Password 1 correcto!!";
  } else if (seleccion01 + seleccion02 + seleccion03 == "714") {
    document.querySelector(".texto").innerHTML = "Password 2 correcto!!";
  } else {
    document.querySelector(".texto").innerHTML = "Password incorrecto!!";
  }
});
