$(document).ready(
  function() {
    $("#end").click(
      function() {
        window.close();
      }
    );

    $(".show").click(
      function()
      {
        $(this).addClass("clicked");

        var cliked = document.getElementsByClassName('clicked');
        var feld = document.getElementsByClassName('feld');

        if(!cliked[0].classList.contains("sprungfeld")&&!cliked[0].classList.contains("weg"))
        {
          $(".sprungfeld").removeClass("sprungfeld");
          $(".left").removeClass("left");

          $(".marked").removeClass("marked");
          sprungFeldermakiren(idAuslesen());
        }
        else
        {

          if (cliked[0].classList.contains("sprungfeld"))
          {
            $(".sprungfeld").removeClass("sprungfeld");

            var id = idAuslesen();



            $(this).removeClass("weg");

            if(feld[id+2].classList.contains("marked"))
            {
              $(feld[id+1]).addClass("weg");
            }

            if(feld[id-2].classList.contains("marked"))
            {
              $(feld[id-1]).addClass("weg");
            }

            if(feld[id+18].classList.contains("marked"))
            {
              $(feld[id+9]).addClass("weg");
            }

            if(feld[id-18].classList.contains("marked"))
            {
              $(feld[id-9]).addClass("weg");
            }

            $(".marked").addClass("weg");
            $(".marked").removeClass("marked");

            $(".left").removeClass("left");
          }
          $(this).removeClass("clicked");
        }
      }
    );

  }
);

function idAuslesen()
{
  var feld = document.getElementsByClassName("feld");

  for (var i = 0; i < feld.length; i++) {
    if (feld[i].classList.contains("clicked"))
    {
      $(feld[i]).removeClass("clicked");
      return i;
    }
  }
}

function sprungFeldermakiren(id)
{
  var feld = document.getElementsByClassName("feld");

  $(feld[id]).addClass("marked");

  if (sprungMoeglich(id,-1))
  {
    $(feld[id-2]).addClass("sprungfeld");
  }

  if (sprungMoeglich(id,1))
  {
    $(feld[id+2]).addClass("sprungfeld");
  }

  if (sprungMoeglich(id,9))
  {
    $(feld[id+18]).addClass("sprungfeld");
  }

  if (sprungMoeglich(id,-9))
  {
    $(feld[id-18]).addClass("sprungfeld");
  }
}

function sprungMoeglich(id,wo)
{
  if (id+wo<0||id+wo>81)
  {
    return false;
  }
  else
  {
    var feld = document.getElementsByClassName("feld");
    if(!feld[id+wo].classList.contains("weg")&&!feld[id+wo].classList.contains("hidden")&&feld[id+wo*2].classList.contains("weg"))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
