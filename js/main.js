

//Tomamos el formulario creado en htmal
const idFormulario = document.getElementById("formulario");

//Registramos un nuevo usuario
idFormulario.addEventListener("submit",(e)=>{ 
    e.preventDefault(); //Evitamos que se recargue la pagina

    const user = document.getElementById("user").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(verificarUsuario(user)) invalidarUsuario();
    
    if(verificarMail(email)) invalidarEmail();

    //si usuario y mail no estan registrados registro el usuario
    if(!verificarUsuario(user) && !verificarMail(email)) registrarUsuario(user,email,password);
    
    
    //Limpiamos el formulario
    idFormulario.reset();    
})

const userFormulario = document.getElementById("user");

//funcion que verifica el usuario
function verificarUsuario(userName){
    let user = localStorage.getItem("Usuario",JSON.stringify(users));
    user = users.find(user => user.userName === userName);
    if(user != undefined) return true;
}

//funcion que verifica el mail
function verificarMail(userEmail){
    let email = localStorage.getItem("Usuario",JSON.stringify(users));
    email = users.find(user => user.email === userEmail);
    if(email != undefined) return true;
}

//funcion que me cambia el estilo del input del formulario con bootstrap
function invalidarUsuario(){ 
    const userFormulario = document.getElementById("user");
    userFormulario.className = "form-control is-invalid";
    userFormulario.id = "floatingInputGroup2";
}

//funcion que me cambia el estilo del input del formulario con bootstrap
function invalidarEmail(){ 
    const emailFormulario = document.getElementById("email");
    emailFormulario.className = "form-control is-invalid";
    emailFormulario.id = "floatingInputGroup2";
}


//funcion que registra el usuario
function registrarUsuario(user,email,password){
    //Creamos el objeto usuario
    const usuario = new User(user,email,password);

    //Agregamos el usuario al array
    users.push(usuario);

    //Guardo los datos en el storage
    localStorage.setItem("Usuario",JSON.stringify(users));
}

