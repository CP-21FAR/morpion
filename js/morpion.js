var turn = true;
var move = 1;

$(function (){
   $("td").click(function (){

       if(!$(this).hasClass("symbole_0") && !$(this).hasClass("symbole_1")){
           $(this).addClass(("symbole_") + ((turn) ? "1" : "0"))
           turn =! turn
       }
       move++;
            if (Gagnant() == ("symbole_1")) {
                $('body').append('<div class="gagnant"><span>Gagnant</span> X</div>');
                $('body').append('<button onclick="location.reload()">Rejouer</button>');
                $('.gagnant').css('background-color', '#61892f');
                $('button').css('color', '#61892f');
            } else if (Gagnant() == ("symbole_0")) {
                $('body').append('<div class="gagnant"><span>Gagnant</span> O</div>');
                $('body').append('<button onclick="location.reload()">Rejouer</button>');
                $('.gagnant').css('background-color', '#ff0000');
                $('button').css('color', '#ff0000');
            }
   })
});

function Gagnant() {
    cs1 = $("table tr:nth-child(1) td:nth-child(1)").attr('class');
    cs2 = $("table tr:nth-child(1) td:nth-child(2)").attr('class');
    cs3 = $("table tr:nth-child(1) td:nth-child(3)").attr('class');
    cs4 = $("table tr:nth-child(2) td:nth-child(1)").attr('class');
    cs5 = $("table tr:nth-child(2) td:nth-child(2)").attr('class');
    cs6 = $("table tr:nth-child(2) td:nth-child(3)").attr('class');
    cs7 = $("table tr:nth-child(3) td:nth-child(1)").attr('class');
    cs8 = $("table tr:nth-child(3) td:nth-child(2)").attr('class');
    cs9 = $("table tr:nth-child(3) td:nth-child(3)").attr('class');

    //check rows
    if((cs1 == cs2) && (cs2 == cs3)){
        console.log(cs3);
        return cs3;
    } else if ((cs4 == cs5) && (cs5 == cs6)){
        return cs6;
    }else if ((cs7 == cs8) && (cs8 == cs9)){
        return cs9;
    }

    else if((cs1 == cs4) && (cs4 == cs7)){
        return cs7;
    }else if((cs2 == cs5) && (cs5 == cs8)) {
        return cs8;
    }else if((cs3 == cs6) && (cs6 == cs9)) {
        return  cs9;
    }

    else if ((cs1 == cs5) && (cs5 == cs9)){
        return cs9;
    }else if ((cs3 == cs5) && (cs5 == cs7)) {
        return cs7;
    }

    return -1;

}

