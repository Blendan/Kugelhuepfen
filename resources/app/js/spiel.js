const remote = require('electron').remote;

$(document).ready(
  function() {
    $("#end").click(
      function()
      {
        var window = remote.getCurrentWindow();
        window.close();
      }
    );

    $(".show").click(
      function()
      {
        $(this).addClass("clicked");

        geclickt();
      }
    );

  }
);

function geclickt()
{
  var id = idAuslesen();
  var feld = document.getElementsByClassName('feld');

  if(!feld[id].classList.contains("sprungfeld")&&!feld[id].classList.contains("weg"))
  {
    $(".sprungfeld").removeClass("sprungfeld");

    $(".marked").removeClass("marked");
    sprungFeldermakiren(id);
  }
  else if (feld[id].classList.contains("sprungfeld"))
  {
    springen(id);

    $(".marked").addClass("weg");
    $(".marked").removeClass("marked");
  }

  var ende = ueberpruefeWeiter();

  if (ende)
  {
    keinzuegeMoeglich();
  }
}

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

function springen(id)
{
  var feld = document.getElementsByClassName('feld');

  if (feld[id].classList.contains("sprungfeld"))
  {
    $(".sprungfeld").removeClass("sprungfeld");

    $(feld[id]).removeClass("weg");

    if(feld[id+2].classList.contains("marked"))
    {

      $(feld[id+1]).addClass("weg");
    }

    if(feld[id-2].classList.contains("marked"))
    {
      $(feld[id-1]).addClass("weg");
    }

    if (!(id+18>80))
    {
      if(feld[id+18].classList.contains("marked"))
      {
        $(feld[id+9]).addClass("weg");
      }
    }

    if (!(id-18<0))
    {
      if(feld[id-18].classList.contains("marked"))
      {
        $(feld[id-9]).addClass("weg");
      }
    }
  }
}

function ueberpruefeWeiter()
{
  var feld = document.getElementsByClassName('feld');

  for (var i = 0; i < feld.length; i++)
  {
    if (feld[i].classList.contains("show")&&!feld[i].classList.contains("weg"))
    {
      if (sprungMoeglich(i,-1))
      {
        return false;
      }

      if (sprungMoeglich(i,1))
      {
        return false;
      }

      if (sprungMoeglich(i,9))
      {
        return false;
      }

      if (sprungMoeglich(i,-9))
      {
        return false;
      }
    }
  }

  return true;
}

function keinzuegeMoeglich()
{
  var felder = document.getElementsByClassName("show");
  var weg = document.getElementsByClassName("weg");

  if (felder.length-weg.length==1)
  {
    $("#lose").css({display:"none"});
    $("#win").css({display:"block"});
  }

  $("#keinezuege").animate({left: '-5%'},300);
  $("#keinezuege").animate({left: '0'},2000);
  $("#keinezuege").animate({left: '120%'},300);
  $("#keinezuege").animate({left: '-120%'},0);
}
