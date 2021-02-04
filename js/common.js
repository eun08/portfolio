$(function(){

    $(window).scroll(function(){
        if($(document).scrollTop() >= 160){
            $('#header').addClass('tag_box_fixed');
        } else {
            $('#header').removeClass('tag_box_fixed');
        }
    })

})