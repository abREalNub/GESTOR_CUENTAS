let acountManager = {
  list: [],
  add: function (userAcount) {
    if (userAcount.typeof === undefined) {
      this.list.push(userAcount);
    } else console.error("No está guardando una cuenta");
  },
  delete: function (userAcount) {
    if (userAcount.typeof === undefined) {
      let aux = this.list.find(
        (UserAcount) => UserAcount.getEmail === userAcount.getEmail
      );
      if (aux != undefined) {
        let index = this.list.indexOf(aux);
        this.list.splice(index, 1);
      } else console.error("No encontrado");
    } else console.error("No está trabajando sobre una cuenta");
  },
  edit: function (userAcount, newName = null, newPass = null, newEmail = null) {
    if (userAcount.typeof === undefined) {
      let aux = this.list.find(
        (UserAcount) => UserAcount.getEmail === userAcount.getEmail
      );
      if (aux != undefined) {
        let index = this.list.indexOf(aux);

        if (newName != null) {
          userAcount.setUserName(newName);
        } else if (newPass != null) {
          userAcount.setPassword(newPass);
        } else if (newEmail != null) {
          userAcount.setEmail(newEmail);
        }
        this.list[index] = userAcount;
      } else console.error("No encontrado");
    } else console.error("No está trabajando sobre una cuenta");
  },
};

class UserAcount {
  constructor(userName, email, password) {
    let _userName = userName;
    let _email = email;
    let _password = password;

    checkPassword(_password);

    function checkPassword(password) {
      let v = false;
      if (password.length >= 8) {
        let check = function (password) {
          // Verificar si contiene al menos una mayúscula
          const hasUpperCase = /[A-Z]/.test(password);

          // Verificar si contiene al menos un número
          const hasNumber = /\d/.test(password);

          // Verificar si contiene al menos un carácter especial
          const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(
            password
          );

          // Retornar true si cumple con todas las condiciones, caso contrario false
          return hasUpperCase && hasNumber && hasSpecialChar;
        };
        if (check(password)) {
          v = true;
        } else {
          console.error(
            "La contraseña debe contener al menos una letra mayúscula, al menos un número y al menos un caracter especial"
          );
        }
      } else {
        console.error(
          "La contraseña debe contener como mínimo ocho caracteres"
        );
      }

      return v;
    }

    this.getUserName = () => _userName;
    this.getEmail = () => _email;
    this.getPassword = () => _password;

    this.setUserName = function (name) {
      _userName = name;
    };
    this.setEmail = function (newEmail) {
      _email = newEmail;
    };
    this.setPassword = function (newPass) {
      if (checkPassword(newPass) == true) {
        _password = newPass;
      }
    };
    this.strongPassword = (password) => {
      checkPassword(password);
    };
  }
}
/*Probando el objecto acountManager*/
let user1 = new UserAcount("manolo", "email1", "wasd1234Q$%");
let user2 = new UserAcount("gabriela", "email2", "Contr@se44a");
let user3 = new UserAcount("federico", "email3", "HalconFV15/");

acountManager.add(user1);
acountManager.add(user2);
acountManager.add(user3);

acountManager.list.forEach((person) => {
  console.log(person.getUserName());
});
acountManager.delete(user2);

acountManager.list.forEach((person) => {
  console.log("\n", person.getUserName());
});

acountManager.list.forEach((person) => {
  console.log("\n", person.getEmail());
});

acountManager.edit(user3, null, null, "nuevoEmail");
acountManager.list.forEach((person) => {
  console.log("\n", person.getEmail());
});
/*Probando los metodos de la clase*/
let acount1 = new UserAcount("Marcolina", "emailAdress", "sombrilla");
console.log(acount1.getUserName());
console.log(acount1.getEmail());
console.log(acount1.getPassword());
acount1.setEmail("marcolina@nauta.cu");
acount1.setPassword("sombrill@Amar1lla");
console.log(acount1.getUserName());
console.log(acount1.getEmail());
console.log(acount1.getPassword());
