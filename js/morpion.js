    const h1Element = document.createElement("h1");
    h1Element.textContent = "Jeu du morpion";
    document.body.append(h1Element);
$(function (){
    const h3Element = document.createElement("h3");
    h3Element.textContent = "";
    document.body.append(h3Element);
    
    var i = 0
    var array = [0,1,2,3,4,5,6,7,8];
    
    //pour chaque case
    $("body").append("<h2 class='info'>&nbsp;</h2>");
    $("td").each(function (index, element){

    //Clique dans une case
    $(this).click(function () {

        //vérifier si la case n'est pas déjà occupé
        if ($(element).hasClass("symbole_0") || $(element).hasClass("symbole_1") ) {
        //colorier les bordures des cases occupées en rouge quand on clique dessus
                $(element).css({"border": "2px solid darkred"});
                setTimeout(() => {
                    $(element).css({"border": "1px solid black"});
                }, 600);
            
        }else {
            //mettre le symbole rond si $i est paire
            if (i % 2 != 0) {
                h3Element.textContent = "Au tour des X";
                $(element).addClass("symbole_0")
                i++
                array.splice(index,1,"O")


            //sinon mettre le symbole croix si $i est impaire
            } else {  
                h3Element.textContent = "Au tour des O";
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
                    h3Element.textContent = "✨ Le joueur X a gagné ✨";
                    $("h3").css("color", "green").css("text-shadow", " 1px 1px 0px green");
                    $("td").css("pointer-events", "none");
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
                h3Element.textContent = "✨ Le joueur 0 a gagné ✨";
                $("h3").css("color", "green").css("text-shadow", " 1px 1px 0px green");
                $("td").css("pointer-events", "none");
            }else if (i > 8){
                 egalite++
            }
            if (egalite == 2){
                h3Element.textContent = "✨ Egalité des deux joueurs ✨";
                $("h3").css("color", "gold").css("text-shadow", "1px 1px 1px black");
                $("td").css("pointer-events", "none");
            }
        }
    })


    })
    
    //Bouton Restart et remettre le tableau par défaut
    $("body").append("<button class='bnut'>Recommencer</button>")
    $('.bnut').click(function() {
        location.reload();
    })

    
    //CSS
    $("body").css("background", "radial-gradient(circle, rgba(193,192,192,1) 8%, rgba(136,136,136,1) 70%)").css("font-family", "Arial");
    $("h1").css("color", "white").css("text-shadow", "1px 1px 2px darkred").css("text-align", "center").css("margin-top", "-300px").css("margin-bottom", "250px");
    $("table").css("background-color", "white").css("margin", "auto").css("margin-top", "150px").css("border", "black").css("border-collapse", "collapse");
    $("h3").css("color", "white").css("text-align", "center").css("margin-top", "270px").css("text-shadow", "1px 1px 2px darkred");
    $('.bnut').css("margin", "auto").css("display", "block").css("background-color", "darkred").css("color", "white").css("padding", "15px 32px").css("border", "none");
    
})
