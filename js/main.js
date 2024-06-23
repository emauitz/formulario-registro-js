const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click", () => {
    container.classList.remove("toggle");
});
btnSignUp.addEventListener("click", () => {
    container.classList.add("toggle");
});

//------------------------------
//FALTA LA LOGICA DE LOGUEO Y CREACION DE NUEVO USUARIO
//Tambien falta la logica de password===ringresepassword
//falta definir cuantos caracteres debera poseer el password, el usuario, y el formato del email
