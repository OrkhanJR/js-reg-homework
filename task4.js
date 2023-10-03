let attempts = 3;

reg: while (true) {
  alert("Please register");
  let regLogin = prompt("Create your login");
  let regPass = prompt("Create your password");
  alert("Please auth");

  auth: while (true) {
    let authLogin = prompt("Type your login");
    let authPass = prompt("Type your password");

    if (authLogin === regLogin && authPass === regPass) {
      alert("Its ok");
      break reg;
    } else {
      alert("login or password is incorrect");
      --attempts;
    }
    if (attempts <= 0) {
      let createNewUser = confirm("Do you want to create new account?");
      if (createNewUser === true) {
        attempts = 3;
        continue reg;
      } else if (createNewUser === false) {
        attempts = 3;
        continue auth;
      }
    }
  }
}
