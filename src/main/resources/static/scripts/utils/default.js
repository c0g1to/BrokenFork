import "../../libs/jquery-3.5.1.min.js"

$("input[type='text'], input[type='password']").attr(
    {"autocomplete": "off", "maxlength": 32});

$("[name=\"order\"]").click(function() {
    if ($(this).val() === "ascending") {
        $(this).val("descending");
    } else {
        $(this).val("ascending");
    }
});

$(".blockMenu > *, #photo")
    .mouseenter(function() {
        $(this).find("img").fadeTo(100, 0.33);
        $(this).find("a").show();
    })
    .mouseleave(function() {
        $(this).find("img").fadeTo(100, 1);
        $(this).find("a").hide(0);
    })
    .mousedown(function() {
        $(this).css("background-color", "black");
        $(this).find("a").css("color", "white");
    })
    .mouseup(function() {
        $(this).css("background-color", "transparent");
        $(this).find("a").css("color", "black");
    })

$("img").on("dragstart", function(event) {
    event.preventDefault();
});