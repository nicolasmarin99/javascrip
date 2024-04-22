
let email = document.getElementById("inputEmail3");
let password = document.getElementById("inputPassword3");
let error1 = document.getElementById("error1")
let error2 = document.getElementById("error2")

let vemail = "";
let vpassword = "";

let btnsign = document.getElementById("btnentrar");


btnsign.addEventListener("click", function (e) {
    e.preventDefault();

    vemail = email.value;
    vpassword = password.value;

    console.log(vemail);
    console.log(vpassword);

    if (vemail === "") {
        error1.innerHTML = "error al ingresar email";
        error1.style.color = "red";
    }

    if (vpassword === "") {
        error2.innerHTML = "error ingresar contraseña";
        error2.style.color = "green";
    }

})

