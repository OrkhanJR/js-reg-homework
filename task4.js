reg: while (true) {
    alert("Please register");
    let regLogin = prompt("Create your login");
    let regPass = prompt("Create your password");
  
    auth: while (true) {
      alert("Please auth");
      let authLogin = prompt("Type your login");
      let authPass = prompt("Type your password");
  
      if (authLogin === regLogin && authPass === regPass) {
        alert("Its ok");
        break reg;
      } else {
        alert("login or password is incorrect");
      }
    }
  }