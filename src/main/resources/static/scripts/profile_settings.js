import "../libs/jquery-3.5.1.min.js"
import * as utils from "./utils/utils.js";
import {UserRoles, UserStorage} from "./utils/UserStorage.js";

const login = $(".Container p.line");
const photo = $("#photo > img");
const nickname = $("[name='nickname']");
const password = $("[name='password']");
let newImage;

// INIT
if (UserStorage.getRole() === UserRoles.GUEST) {
    utils.goToMainMenu();
}
utils.ajaxGet("http://localhost:8080/get_user/" + UserStorage.getLogin(),
    function(jqXHR) {
        login.text($.parseJSON(jqXHR.responseText).login);
        photo.attr("src", $.parseJSON(jqXHR.responseText).photo);
        nickname.attr("value", $.parseJSON(jqXHR.responseText).nickname)
    });

// BINDINGS
$(".logoButton").click(function() {
    utils.goToMainMenu();
})

$("#photo").click(function() {
    newImage = utils.uploadFile();
})

$("#save").click(function() {
    $.ajax({
        url: "http://localhost:8080/save_photo/" + UserStorage.getLogin(),
        data: newImage,
        complete: function(jqXHR) {
            photo.attr("src", jqXHR.responseText)
        },
        type: "POST",
        contentType: false,
        processData: false
    });
    utils.ajaxPost("http://localhost:8080/update_user",
        JSON.stringify({
            nickname: nickname.val(),
            login: UserStorage.getLogin(),
            password: password.val()
        }),
        function() {
            alert("Saved successfully");
        })
});