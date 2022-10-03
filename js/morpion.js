var turn = true;
var move = 1;

// Ajout de Cercle
$(function (){
   $("td").click(function (){

       if(!$(this).hasClass("symbole_0") && !$(this).hasClass("symbole_1")){
           $(this).addClass(("symbole_") + ((turn) ? "1" : "0"))
           turn =! turn // Inverser la valeur de bool
       }
       move++;
            if (findWinner() == ("symbole_1")) {
                $('body').append('<div class="winner"><span>Winner</span> X</div>');
                $('body').append('<button onclick="location.reload()">Play Again</button>');
                $('.winner').css('background-color', '#61892f');
                $('button').css('color', '#61892f');
            } else if (findWinner() == ("symbole_0")) {
                $('body').append('<div class="winner"><span>Winner</span> O</div>');
                $('body').append('<button onclick="location.reload()">Play Again</button>');
                $('.winner').css('background-color', '#ff0000');
                $('button').css('color', '#ff0000');
            }
   })
});

function findWinner() {
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

    //check columns
    else if((cs1 == cs4) && (cs4 == cs7)){
        return cs7;
    }else if((cs2 == cs5) && (cs5 == cs8)) {
        return cs8;
    }else if((cs3 == cs6) && (cs6 == cs9)) {
        return  cs9;
    }
    //check diagonals
    else if ((cs1 == cs5) && (cs5 == cs9)){
        return cs9;
    }else if ((cs3 == cs5) && (cs5 == cs7)) {
        return cs7;
    }

    //no winner
    return -1;

}

