const formSignup = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup {
        padding: 0 35px 40px;        
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $emailLabel = labelCollabcode.render("E-mail");
    const $emailInput = inputCollabcode.render("example@gmail.com");

    const $usernameLabel = labelCollabcode.render("Username");
    const $usernameInput = inputCollabcode.render("alex");

    const $passwordLabel = labelCollabcode.render("Password");
    const $passwordInput = inputCollabcode.render("******");

    const $confirmPasswordLabel = labelCollabcode.render("Confirm password");
    const $confirmPasswordInput = inputCollabcode.render("******");

    const $btn = btnCollabcode.render("Signup");

    return `
      ${$emailLabel}
      ${$emailInput}

      ${$usernameLabel}
      ${$usernameInput}

      ${$passwordLabel}
      ${$passwordInput}

      ${$confirmPasswordLabel}
      ${$confirmPasswordInput}

      ${$btn}
    `;
  };

  module.render = () => {
    module._style();
    return `<form class="form-signup" action="" method="POST">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
