$(function () {
    $("#dialogue").click(function () {
        i = num;
    })
    $("#next").click(function () {
        $(".dialogue").fadeOut(1000);
        $(".reporter").fadeOut(1000);
        $(".professor").fadeIn(1000);
        $(".dialogue2").fadeIn(1000);
        $("#next2").fadeIn(1000);
    })
    $("#next2").click(function () {
        $(".dialogue2").fadeOut(1000);
        $(".professor").fadeOut(1000);
        $("#next2").fadeOut(1000);
        $(".introduce").fadeIn(1000);
        $("#label1").fadeIn(1000);
        $("#label2").fadeIn(1000);
        $("#label3").fadeIn(1000);
        $("#label4").fadeIn(1000);
        $("#water1").fadeIn(1000);
        $("#water2").fadeIn(1000);
        $("#water3").fadeIn(1000);
        $("#return").fadeIn(500);
        $("#nextstep").fadeIn(500);
    })
    $("#label1").click(function () {
        $("#water1").fadeIn(1000);
        $("#water2").fadeIn(1000);
        $("#water3").fadeIn(1000);
        $(".rainstorm1").fadeOut(1000);
        $(".rainstorm2").fadeOut(1000);
        $(".waterline").fadeOut(1000);
        $(".waterlogging").fadeOut(1000);
    })
    $("#label2").click(function () {
        $("#water1").fadeOut(1000);
        $("#water2").fadeOut(1000);
        $("#water3").fadeOut(1000);
        $(".rainstorm1").fadeIn(1000);
        $(".rainstorm2").fadeIn(1000);
        $(".waterline").fadeOut(1000);
        $(".waterlogging").fadeOut(1000);
    })
    $("#label3").click(function () {
        $("#water1").fadeOut(1000);
        $("#water2").fadeOut(1000);
        $("#water3").fadeOut(1000);
        $(".rainstorm1").fadeOut(1000);
        $(".rainstorm2").fadeOut(1000);
        $(".waterline").fadeIn(1000);
        $(".waterlogging").fadeOut(1000);
    })
    $("#label4").click(function () {
        $("#water1").fadeOut(1000);
        $("#water2").fadeOut(1000);
        $("#water3").fadeOut(1000);
        $(".rainstorm1").fadeOut(1000);
        $(".rainstorm2").fadeOut(1000);
        $(".waterline").fadeOut(1000);
        $(".waterlogging").fadeIn(1000);
    })
})
function change() {
    document.getElementById("next").style.transform = "scale(1.3)";
    document.getElementById("return").style.transform = "scale(1.3)";
    document.getElementById("return").title = "点击回到主题界面";
}
function reset() {
    document.getElementById("next").style.transform = "scale(1)";
    document.getElementById("return").style.transform = "scale(1)";
}
function change2() {
    document.getElementById("next2").style.transform = "scale(1.3)";
    document.getElementById("nextstep").style.transform = "scale(1.3)";
}
function reset2() {
    document.getElementById("next2").style.transform = "scale(1)";
    document.getElementById("nextstep").style.transform = "scale(1)";
}
function change3() {
    document.getElementById("label1").style.transform = "scale(1.2)";
    document.getElementById("label1").src = "img/label1-1.png";
    document.getElementById("label2").style.transform = "scale(1)";
    document.getElementById("label2").src = "img/label2.png";
    document.getElementById("label3").style.transform = "scale(1)";
    document.getElementById("label3").src = "img/label3.png";
    document.getElementById("label4").style.transform = "scale(1)";
    document.getElementById("label4").src = "img/label4.png";
}
function change4() {
    document.getElementById("label1").style.transform = "scale(1)";
    document.getElementById("label1").src = "img/label1.png";
    document.getElementById("label2").style.transform = "scale(1.2)";
    document.getElementById("label2").src = "img/label2-1.png";
    document.getElementById("label3").style.transform = "scale(1)";
    document.getElementById("label3").src = "img/label3.png";
    document.getElementById("label4").style.transform = "scale(1)";
    document.getElementById("label4").src = "img/label4.png";
}
function change5() {
    document.getElementById("label1").style.transform = "scale(1)";
    document.getElementById("label1").src = "img/label1.png";
    document.getElementById("label2").style.transform = "scale(1)";
    document.getElementById("label2").src = "img/label2.png";
    document.getElementById("label3").style.transform = "scale(1.2)";
    document.getElementById("label3").src = "img/label3-1.png";
    document.getElementById("label4").style.transform = "scale(1)";
    document.getElementById("label4").src = "img/label4.png";
}
function change6() {
    document.getElementById("label1").style.transform = "scale(1)";
    document.getElementById("label1").src = "img/label1.png";
    document.getElementById("label2").style.transform = "scale(1)";
    document.getElementById("label2").src = "img/label2.png";
    document.getElementById("label3").style.transform = "scale(1)";
    document.getElementById("label3").src = "img/label3.png";
    document.getElementById("label4").style.transform = "scale(1.2)";
    document.getElementById("label4").src = "img/label4-1.png";
}