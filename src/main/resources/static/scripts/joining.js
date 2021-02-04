import "../libs/jquery-3.5.1.min.js"
import * as utils from "./utils/utils.js";
import {UserRoles, UserStorage} from "./utils/UserStorage.js";

const registerButton = $(".containerCap:first-child > .AButton:first-child");
const signInButton = $(".containerCap:first-child > .AButton:last-child");
const nickname = $("[name='nickname']");
const login = $("[name='login']");
const password = $("[name='password']");

let state = "sign_in"

function clearFields() {
    nickname.val(null);
    login.val(null);
    password.val(null);
}

// INIT
if (UserStorage.getLogin() !== null) {
    utils.goToMainMenu();
}

// BINDINGS
registerButton.click(function() {
    state = "register";
    registerButton.css({
        "fontWeight": "bold",
        "background": "var(--b-dark)"
    });
    signInButton.css({
        "fontWeight": "normal",
        "background": "var(--b-color)"
    });
    nickname.show(100);
});

signInButton.click(function() {
    state = "sign_in";
    signInButton.css({
        "fontWeight": "bold",
        "background": "var(--b-dark)"
    });
    registerButton.css({
        "fontWeight": "normal",
        "background": "var(--b-color)"
    });
    nickname.hide(100);
});

$("#submit").click(function() {
    if (state === "register") {
        utils.ajaxPost("http://localhost:8080/register",
            JSON.stringify({
                nickname: nickname.val(),
                login: login.val(),
                password: password.val()
            }),
            function(jqXHR) {
                if (jqXHR.status === 200) {
                    clearFields();
                    signInButton.click()
                    alert("Registered successfully");
                } else {
                    alert(jqXHR.responseText);
                }
            })
    } else {
        utils.ajaxPost("http://localhost:8080/sign_in",
            JSON.stringify({
                nickname: "null",
                login: login.val(),
                password: password.val()
            }),
            function(jqXHR) {
                if (jqXHR.status === 200) {
                    UserStorage.setLogin(login.val());
                    UserStorage.setRole(UserRoles.USER);
                    utils.goToMainMenu();
                } else {
                    alert(jqXHR.responseText);
                }
            })
    }
});

$("#guest").click(function() {
    UserStorage.setLogin(UserRoles.GUEST);
    UserStorage.setRole(UserRoles.GUEST);
    utils.goToMainMenu();
});