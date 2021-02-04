import "../libs/jquery-3.5.1.min.js"

$(".lineMenu button").click(function() {
    if ($(this).text() === "agent") {
        $(this).text("participant");
    } else if ($(this).text() === "participant") {
        $(this).text("agent");
    }
});

$(".lineMenu img")
    .mousedown(function() {
        $(this).css("filter", "invert(0.5)");
    })
    .mouseup(function() {
        $(this).css("filter", "invert(0)");
    });