//Doctype.java
// java for group 11 a3
var selectNavbar = $('#navbar');
var selectNavbarHeader = $('.navbar-header');

var adjustable = function() {
  if ( document.documentElement.clientWidth <= 767 ) {
    $('.adjustable-drop .hide').removeClass('hide');
  } else {
    var collection = [];
    var widthFree = selectNavbar.width() - selectNavbarHeader.outerWidth(true) - selectNavbar.find('.navbar-right').outerWidth(true);
    $('.adjustable-drop').find('> li').removeClass('hide').each(function() {
      if ( widthFree >= $(this).outerWidth(true) ) {
        widthFree -= $(this).outerWidth(true);
      } else {
        collection.push(this);
      }
    });
    $(collection).addClass('hide');
  }
};

$(window).resize(function() {
  adjustable(); 
});

$(window).trigger('resize');