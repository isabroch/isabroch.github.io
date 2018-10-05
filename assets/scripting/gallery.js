$(function() {

  var modal = $('.modal')
  var btn = $('.clickme')

  btn.click(function() {
    var target = $(this)
    var scrollBarWidth = window.innerWidth - document.body.offsetWidth;

    $('body')
      .css('margin-right', scrollBarWidth)
      .addClass('showing-modal');

    target.next(modal).css("display","block");

    target.parent().find(".lazy").each(function() {
      $(this).attr('src', $(this).attr('data-src'));
    });

  });

  modal
  .click(function() {
    var target = $(this)
    modal.hide();
    $('body').removeClass('showing-modal');

  })
  .find('.immune').click(function(e) {
    e.stopPropagation();
  });

  $(document).keydown(function(e){
      if (e.keyCode == 27){
        modal.hide();
        $('body').removeClass('showing-modal');
      }
    });

});
