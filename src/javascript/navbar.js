import $ from 'jquery'

$(document).ready(function(){

    $('.nav-link').click(function(){
        var currentNav = $(this);
        $('.nav-link').removeClass('active');
        currentNav.addClass('active');
    });

});