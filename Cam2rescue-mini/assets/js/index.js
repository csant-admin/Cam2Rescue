
$(document).ready(function () {
    $("#about").hide();
    $("#contact").hide();
    $("#signup").hide();
    $("#login").hide();
    $("#account").hide();
    $(".home-btn").click(function () {
        $("#home").show();
        $("#about").hide();
        $("#contact").hide();
        $("#signup").hide();
        $("#login").hide();
        $("#account").hide();
    })
    $(".about-btn").click(function () {
        $("#about").show();
        $("#home").hide();
        $("#contact").hide();
        $("#signup").hide();
        $("#login").hide();
        $("#account").hide();
    })
    $(".contact-btn").click(function () {
        $("#contact").show();
        $("#about").hide();
        $("#home").hide();
        $("#signup").hide();
        $("#login").hide();
        $("#account").hide();
    })
    $(".signup-btn").click(function () {
        $("#signup").show();
        $("#about").hide();
        $("#home").hide();
        $("#contact").hide();
        $("#login").hide();
        $("#account").hide();
    })
    $(".login-btn").click(function () {
        $("#login").show();
        $("#signup").hide();
        $("#about").hide();
        $("#home").hide();
        $("#contact").hide();
        $("#account").hide();
    })
})