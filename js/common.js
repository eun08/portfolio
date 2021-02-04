$(function(){

    $(window).scroll(function(){
        if($(document).scrollTop() >= 160){
            $('#header').addClass('tag_box_fixed');
        } else {
            $('#header').removeClass('tag_box_fixed');
        }
    })//scroll

    $('.gnb > li > a').click(function(){
        $('.gnb > li > a').removeClass('on');
        $(this).addClass('on');

    })//nav click

    $('.tag_box ul > li > a').click(function(){
        $('.tag_box ul > li > a').removeClass('on');
        $(this).addClass('on');

    })//tag click




})//jq