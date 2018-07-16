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
    $("#spielfeld").css("width",win.height());
    $("#spielfeld").css("height",win.height());
  }
  else
  {
    $("#spielfeld").css("width",win.width());
    $("#spielfeld").css("height",win.width());
  }
}
