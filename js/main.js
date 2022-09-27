


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
    localStorage.setItem("Usuarios",JSON.stringify(users));
    
    //Limpiamos el formulario
    idFormulario.reset();

    let textUsuario = document.createElement('p');
    textUsuario.innerText = "Se ha registrado correctamente";
})

function verificarUsuario(userName){
    let user = users.find(user => user.userName === userName);
    if(user === undefined){
        let text = document.createElement('p');
        text.innerText = "No estas registrado debes registrarte";
        idFormulario.appendChild(text);
    }else{
        let text = document.createElement('p');
        text.innerText = "Ingreso exitoso";
        idFormulario.appendChild(text);
    }
}

verificarUsuario("guille86");

