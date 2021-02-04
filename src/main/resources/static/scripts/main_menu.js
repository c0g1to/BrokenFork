import "../libs/jquery-3.5.1.min.js"
import {UserRoles, UserStorage} from "./utils/UserStorage.js";
import * as utils from "./utils/utils.js";

const rightSidebar = $(".rightSidebar");
const userImage = rightSidebar.children().eq(1);
const userName = rightSidebar.children().eq(2);
const profileButton = $("#profile");
const logoutButton = $("#logout");

// INIT
if (UserStorage.getRole() === UserRoles.GUEST) {
    profileButton.hide();
}
utils.ajaxGet("http://localhost:8080/get_user/" + UserStorage.getLogin(),
    function(jqXHR) {
        userImage.attr("src", $.parseJSON(jqXHR.responseText).photo);
        userName.text($.parseJSON(jqXHR.responseText).nickname);
    });

// BINDINGS
$("#settings").click(function() {
    if ($(this).text() === "Hide") {
        $(this).text("Settings");
        rightSidebar.hide();
    } else {
        $(this).text("Hide");
        rightSidebar.css("display", "flex");
    }
})

profileButton.click(function() {
    utils.goToProfileSettings();
})

logoutButton.click(function() {
    UserStorage.clear();
    utils.goToJoining();
})



