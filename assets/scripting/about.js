$(function() {

  var $el, $ps, $up, totalHeight;
  var arrow = $(".arrow")

  $(".wrap .button").click(function() {

      if(arrow.hasClass("down")){
        arrow.addClass("up").removeClass("down");

        totalHeight = 0
        $el = $(this);
        $p  = $el.parent();
        $ps = $p.find(".aboutdesc");

        $ps.each(function() {
          totalHeight += $(this).outerHeight();
        });

        $p
          .css({
            // Set height to prevent instant jumpdown when max height is removed
            "height": $p.height(),
            "max-height": 9999
          })
          .animate({
            "height": totalHeight
          });

          // prevent jump-down
          return false;

      } else {
        arrow.addClass("down").removeClass("up");

        $el = $(this);
        $p  = $el.parent();

        $p
          .css({
            // Set height to prevent instant jumpdown when max height is removed
            "height": $p.height(),
            "max-height": "none"
          })
          .animate({
            "height": "4.55em"
          });

          // prevent jump-down
          return false;


      }
      });


});
