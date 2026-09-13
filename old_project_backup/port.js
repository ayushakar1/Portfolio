$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scrollup-button').addClass("show"); 
        }
        else{
            $('.scrollup-button').removeClass("show"); 
        }
    })



    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation

    var typed = new Typed(".typing",{
        strings: ["Developer","Designer","Blogger","Singer","Content Creater"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings: ["Developer","Designer","Blogger","Singer","Content Creater"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});    
