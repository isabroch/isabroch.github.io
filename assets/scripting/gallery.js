$(function() {

  var modal = $('.modal')
  var btn = $('.clickme')
  var scrollBarWidth = window.innerWidth - document.body.offsetWidth;

function doSomething() {
  var target = $(this);
console.log('click');
  $('body')
    .css('margin-right', scrollBarWidth)
    .addClass('showing-modal');

  target.parent().find(modal).css("display","block");

  target.parent().find(".lazy").each(function() {
    $(this).attr('src', $(this).attr('data-src'));
  });
}

  btn.click(doSomething());

  // $('.clickme').parent.find("h3").click(doSomething());

  modal.click(function() {
    var target = $(this)
    modal.hide();
    $('body').css('margin-right', 0).removeClass('showing-modal');

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
