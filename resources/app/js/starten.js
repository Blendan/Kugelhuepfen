"use strict";

$(document).ready(
  function()
  {
    zeichenSpielfeld();
  }
);

function zeichenSpielfeld()
{
  var punkte = "";
  var feld = false;

  for (var i = 0; i < 81; i++)
  {
    if (i==40)
    {
      punkte += "<div class='feld show weg'><div class='punkt'></div></div>";
    }
    else if (i<9||i>71)
    {
        punkte += "<div class='feld hidden'></div>";
    }
    else
    {
      if (i<27||i>53)
      {
        if (i%9==3&&!feld)
        {
          punkte += "<div class='feld show'><div class='punkt'></div></div>";
          feld = true;
        }
        else if(i%9==6&&feld)
        {
          punkte += "<div class='feld hidden'></div>";
          feld = false;
        }
        else if (feld)
        {
          punkte += "<div class='feld show'><div class='punkt'></div></div>";
        }
        else
        {
          punkte += "<div class='feld hidden'></div>";
        }
      }
      else
      {
        if (i%9==0||i%9==8)
        {
          punkte += "<div class='feld hidden'></div>";
        }
        else
        {
          punkte += "<div class='feld show'><div class='punkt'></div></div>";
        }
      }
    }
  }

  document.getElementById("spielfeld").innerHTML = punkte;
}
