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

    $('.gnb > li > a.about,a.contact').click(function(){        
        $('#wrap').addClass('active');
    })

    $('.gnb > li > a.works').click(function(){
        $('#wrap').removeClass('active');
    })


    $('.tag_box ul > li > a').click(function(){
        $('.tag_box ul > li > a').removeClass('on');
        $(this).addClass('on');

    })//tag click

    // filtering
	  // cache collection of elements so only one dom search needed
   var $mediaElements = $('.filter-gallery');

$('.filter_link').click(function(e){
    e.preventDefault();
    // get the category from the attribute
    var filterVal = $(this).data('filter');

    if(filterVal === 'all'){
      $mediaElements.show();
    }else{
       // hide all then filter the ones to show
       $mediaElements.hide().filter('.' + filterVal).show();
    }
});


    







})//jq