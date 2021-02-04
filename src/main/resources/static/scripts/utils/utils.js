import "../../libs/jquery-3.5.1.min.js"

export function goToJoining() {
    document.location.href = "http://localhost:8080/joining.html";
}

export function goToMainMenu() {
    document.location.href = "http://localhost:8080/main_menu.html";
}

export function goToProfileSettings() {
    document.location.href = "http://localhost:8080/profile_settings.html";
}

export function ajaxGet(url, complete) {
    return $.ajax({
        url: url,
        complete: complete,
        type: "GET",
        dataType: "json",
    });
}

export function ajaxPost(url, data, complete) {
    return $.ajax({
        url: url,
        data: data,
        complete: complete,
        type: "POST",
        contentType: "application/json; charset=utf-8"
    });
}

export function uploadFile() {
    const fileForm = $("<input type='file'>")
    fileForm.click();
    const formData = new FormData()
    return formData.append("photo", fileForm[0].files[0]);
}