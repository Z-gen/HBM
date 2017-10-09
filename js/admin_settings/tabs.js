'use strict';




$(function () {
    var tabs = $('.form_tab');

    function switchTab() {
        for (let i = 0; i < tabs.length; i++) {
            if ($(tabs[i]).hasClass('active')) {
                $('#tab_content' + (i + 1) ).css('display', 'inline-block');
            }
            else {
                $('#tab_content' + (i + 1) ).css('display', 'none');
            }
        }  
    }


    $('.form_tab').on('click', function() {
        for (let i = 0; i < tabs.length; i++) {
            $(tabs[i]).removeClass('active');
        }
        $(this).addClass('active');
        switchTab();
    })

    switchTab();
})




