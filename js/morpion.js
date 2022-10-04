    const h1Element = document.createElement("h1");
    h1Element.textContent = "Jeu du morpion";
    document.body.append(h1Element);
$(function (){

    
    var i = 0
    var array = [0,1,2,3,4,5,6,7,8];
    
    //pour chaque case
    $("body").css("background-color", "lightgrey").append("<h2 class='info'>&nbsp;</h2>");
    $("td").each(function (index, element){
    //Clique dans une case
    $(this).click(function () {

        //vérifier si la case n'est pas déjà occupé
        if ($(element).hasClass("symbole_0") || $(element).hasClass("symbole_1") ) {
        //colorier les bordures des cases occupées en rouge quand on clique dessus
                $(element).css({"border": "1px solid red"});
                setTimeout(() => {
                    $(element).css({"border": "1px solid black"});
                }, 600);
            
        }else {
            //mettre le symbole rond si $i est paire
            if (i % 2 != 0) {
                $(element).addClass("symbole_0")
                i++
                array.splice(index,1,"O")
            //sinon mettre le symbole croix si $i est impaire
            } else {
                $(element).addClass("symbole_1")
                i++
                array.splice(index,1,"X")
            }
        }
        //Condition de victoire pour les ronds
        if (i >= 5){

            if (array[0] === "X" && array[1] === "X" && array[2] === "X" ||
                array[3] === "X" && array[4] === "X" && array[5] === "X" ||
                array[6] === "X" && array[7] === "X" && array[8] === "X" ||
                array[0] === "X" && array[3] === "X" && array[6] === "X" ||
                array[1] === "X" && array[4] === "X" && array[7] === "X" ||
                array[2] === "X" && array[5] === "X" && array[8] === "X" ||
                array[0] === "X" && array[4] === "X" && array[8] === "X" ||
                array[6] === "X" && array[4] === "X" && array[2] === "X" ){
                setTimeout(() => {
                    alert("Le joueur croix a gagné")
                    //Remettre le tableau par défaut
                    array = [0,1,2,3,4,5,6,7,8];
                    //remettre les classes par défaut
                    $("td").removeClass("symbole_0")
                    $("td").removeClass("symbole_1")
                    i = 0
                })
            //vérifier si les croix n'ont pas gagné
            }else if (i > 8){
                var egalite = 1
            }
            //condition de victoire pour les ronds
            if (array[0] === "O" && array[1] === "O" && array[2] === "O" ||
                array[3] === "O" && array[4] === "O" && array[5] === "O" ||
                array[6] === "O" && array[7] === "O" && array[8] === "O" ||
                array[0] === "O" && array[3] === "O" && array[6] === "O" ||
                array[1] === "O" && array[4] === "O" && array[7] === "O" ||
                array[2] === "O" && array[5] === "O" && array[8] === "O" ||
                array[0] === "O" && array[4] === "O" && array[8] === "O" ||
                array[6] === "O" && array[4] === "O" && array[2] === "O" ){
                setTimeout(() => {
                    alert("Le joueur cercle a gagné")
                     //remettre le tableau par défaut
                    array = [0,1,2,3,4,5,6,7,8];
                    //remettre les classes par défaut
                    $("td").removeClass("symbole_0")
                    $("td").removeClass("symbole_1")
                    i = 0
                }, 100)
            }else if (i > 8){
                 egalite++
            }
            if (egalite == 2){
                setTimeout(() => {
                    alert("Égalité")
                    //Remettre le tableau par défaut
                    array = [0,1,2,3,4,5,6,7,8];
                    //Remettre les classes par défaut
                    $("td").removeClass("symbole_0")
                    $("td").removeClass("symbole_1")
                    i = 0
                }, 100)
            }
        }
    })


    })
    
    //Bouton Restart et remettre le tableau par défaut
    $("body").append("<button class='bnut'>Restart</button>")
    $('.bnut').click(function() {
        location.reload();
    })

    
    //esthétique

    $("h1").css("color", "white").css("margin-left", "655px").css("margin-top", "-300px");;
    $("table").css("background-color", "white").css("margin", "auto").css("margin-top", "150px");;
    $('.bnut').css("margin-left", "730px");;
    
})
