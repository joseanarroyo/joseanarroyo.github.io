/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Portfolio functionality
$(window).load(function() {
    // Only load 3 portfolio items at a time
    $("#portfolio .project").hide();
    $("#portfolio .project").slice(0, 3).show();

    $("#portfolio #more").click(function(){
        var showing = $("#portfolio .project:visible").length;
        $("#portfolio .project").slice(showing - 1, showing + 3).fadeIn('fast');
        $("#portfolio .project").each(function(){
            if($(this).is(':hidden')){
                $("#portfolio #more").show();
            }
            else{
                $("#portfolio #more").hide();
            }
        });
    });
});

// Initialize lazy loading of images
$("img.lazy").lazyload({
    effect: "fadeIn",
    threshold: 400
});


// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});