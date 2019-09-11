module.exports = function() {

  // begin menu
  $('.header-top__burger').on('click', function () {
    $('#menu, #header-top__burger').toggleClass('active');
    $('#main-wrap').toggleClass('no-scroll');
  });
  // end menu

};