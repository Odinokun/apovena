module.exports = function() {

  // begin menu
  $('.header-top__burger').on('click', function () {
    $('#menu').toggleClass('active');
    $('#main-wrap').toggleClass('no-scroll');
  });
  // end menu

};