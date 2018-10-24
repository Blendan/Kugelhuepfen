$(document).ready(
  function()
  {
    $(window).on('resize',
      function()
        {
          var win = $(this);
          anpassen(win);
        }
      );
  }
);

function anpassen(win)
{
  if (win.height() < win.width())
  {
    $("#spielfeld").css("width","100vh");
    $("#spielfeld").css("height","100vh");
    $("nav").css("height","10vh");
  }
  else
  {
    $("#spielfeld").css("width","100vw");
    $("#spielfeld").css("height","100vw");
    $("nav").css("height","10vw");
  }
}
