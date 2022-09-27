

//Tomamos el formulario creado en htmal
const idFormulario = document.getElementById("formulario");

//Registramos un nuevo usuario
idFormulario.addEventListener("submit",(e)=>{ 
    e.preventDefault(); //Evitamos que se recargue la pagina

    const user = document.getElementById("user").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    if(verificarUsuario(user)){ //si el usuario ya esta registrado
        invalidarFormulario(); //invalido el usuario y no se registra
    }
    else{
        registrarUsuario(user,email,password); //si el usuario no esta registrado se registra
    }
    
    //Limpiamos el formulario
    idFormulario.reset();    
})

const userFormulario = document.getElementById("user");

function verificarUsuario(userName){
    let user = localStorage.getItem("Usuario",JSON.stringify(users));
    user = users.find(user => user.userName === userName);
    if(user != undefined) return true;
}

function invalidarFormulario(){ //funcion que me invalida el formulario cambiando su estilo con bootstrap
    const userFormulario = document.getElementById("user");
    userFormulario.className = "form-control is-invalid";
    userFormulario.id = "floatingInputGroup2";
}

function registrarUsuario(user,email,password){
    //Creamos el objeto usuario
    const usuario = new User(user,email,password);

    //Agregamos el usuario al array
    users.push(usuario);

    //Guardo los datos en el storage
    localStorage.setItem("Usuario",JSON.stringify(users));
}
