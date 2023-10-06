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
      alert("It's ok");
      break reg;
    } else {
      alert("Login or password is incorrect");
      --attempts;
    }
    if (attempts <= 0) {
      let createNewUser = confirm("Do you want to create a new account?");
      if (createNewUser === true) {
        attempts = 3;
        continue reg;
      } else if (createNewUser === false) {
        createNewUser = confirm("Do you want to reset your password?");
        if (createNewUser === false) {
          attempts = 3;
          continue auth;
        } else if (createNewUser === true) {
          reset: while (true) {
            let checkLogin = prompt("To reset your password, type your login");
            if (checkLogin === regLogin) {
              let newPass = prompt("Create new password");
              regPass = newPass;
              attempts = 3;
              continue auth;
            } else if (checkLogin !== regLogin) {
              let confirmation = confirm(
                "Login is incorrect, do you want to create a new account?"
              );
              if (confirmation === true) {
                attempts = 3;
                continue reg;
              } else if (confirmation === false) {
                continue reset;
              }
            }
          }
        }
      }
    }
  }
}
