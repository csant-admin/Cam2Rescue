
$(document).ready(function () {
    $("#about,#contact,#signup,#login,#account").hide();
    $(".home-btn").click(function () {
        $("#home").show();
        $("#about,#contact,#signup,#login,#account").hide();
    });
    $(".about-btn").click(function () {
        $("#about").show();
        $("#home,#contact,#signup,#login,#account").hide();
    });
    $(".contact-btn").click(function () {
        $("#contact").show();
        $("#home,#about,#signup,#login,#account").hide();
    });
    $(".signup-btn").click(function () {
        $("#signup").show();
        $("#home,#about,#contact,#login,#account").hide();
    });
    $(".login-btn").click(function () {
        $("#login").show();
        $("#home,#about,#contact,#signup,#account").hide();
    });
    
});


