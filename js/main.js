

//Tomamos el formulario creado en htmal
const idFormulario = document.getElementById("formulario");

//Registramos un nuevo usuario
idFormulario.addEventListener("submit",(e)=>{ 
    e.preventDefault(); //Evitamos que se recargue la pagina

    const user = document.getElementById("user").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //Creamos el objeto usuario
    const usuario = new User(user,email,password);
    
    //Agregamos el usuario al array
    users.push(usuario);

    //Guardo los datos en el storage
    localStorage.setItem("Usuario",JSON.stringify(users));
    
    //Limpiamos el formulario
    idFormulario.reset();

    console.log("El usuario ya esta registrado");
})

const userFormulario = document.getElementById("user");

function verificarUsuario(userName){
    let user = localStorage.getItem("Usuario",JSON.stringify(users));
    user = users.find(user => user.userName === userName);
    /* let text = document.createElement('p'); */
    user === undefined ? true : invalidarFormulario();
    /* user === undefined ? true : false; */
    /* user === undefined ? text.innerText = "Puedes registrarte" : text.innerText = "no puedes registrarte"; */
    /* idFormulario.appendChild(text);  */
}

function invalidarFormulario(){ //funcion que me invalida el formulario cambiando su estilo con bootstrap
    const userFormulario = document.getElementById("user");
    userFormulario.className = "form-control is-invalid";
    userFormulario.id = "floatingInputGroup2";
}

verificarUsuario("guille86");