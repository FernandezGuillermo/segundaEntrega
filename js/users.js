
//Clase usuario
class User{
    constructor(userName,email,password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
}

//array que guarda los usuarios
const users = [];

//usuarios
const guillermo = new User("guille86","fernandez_guillermo@outlook.com","167524893");
const florencia = new User("flor_98","m.floreciaperez@hotmail.com","morcilla");

//pusheo usuarios al array
users.push(guillermo);
users.push(florencia);


//guardo en el storage los usuarios ya cargados
localStorage.setItem("Usuario",JSON.stringify(users));