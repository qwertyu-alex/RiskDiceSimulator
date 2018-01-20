test = function () {
    var attackerMen = $("#attNum").val();
    var defenderMen = $("#defNum").val();

    var initAttackerMen = attackerMen;
    var initDefenderMen = defenderMen;


    console.log("Amount of attacker: " + attackerMen);
    console.log("Amount of defender: " + defenderMen);

    var arrAttacker, arrDefender;
    var count = 0;

    while(attackerMen > 1 && defenderMen > 0){
        count++;
        var string = "Fight " + count + ": ";

        arrAttacker = attackerDie(attackerMen);
        arrDefender = defenderDie(defenderMen);

        console.log(arrAttacker);
        console.log(arrDefender);

        console.log("Highest Att: " + arrAttacker[0] + "\nDef: " + arrDefender[0]);
        string += ("<b>Highest</b> Att: " + arrAttacker[0] + "\nDef: " + arrDefender[0]);
        if(arrAttacker[0] > arrDefender[0]){
            defenderMen--;
        } else {
            attackerMen--;
        }


        if (arrAttacker.length >= 2 && arrDefender.length >= 2){
            console.log("Second highest Att: " + arrAttacker[0] + "\nDef: " + arrDefender[0]);
            string += ("\n<b>Second highest</b> Att: " + arrAttacker[0] + "\nDef: " + arrDefender[0]);
            if(arrAttacker[1] > arrDefender[1]){
                defenderMen--;
            } else {
                attackerMen--;
            }
        }

        $("#log").prepend("<p>" + string + "</p>");

    }
    $("#log").prepend("<p>------------------------------------------------------------------------</p>");
    $("#log").prepend("<p>The Defender lost " + (initDefenderMen - defenderMen) + " men</p>");
    $("#log").prepend("<p>The Attacker lost " + (initAttackerMen - attackerMen) + " men</p>");
    $("#log").prepend("<p>------------------------------------------------------------------------</p>");


};

function attackerDie(attackerMen) {
    var arr = [];

    if  (attackerMen >= 4){
        for (var i = 0; i < 3; i++){
            arr.push(Math.round(Math.random()*5) + 1);
        }
    } else {
        for (var i = 0; i < attackerMen - 1; i++){
            arr.push(Math.round(Math.random()*5) + 1);
        }
    }

    arr.sort().reverse();
    return arr;
}

function defenderDie(defenderMen) {
    var arr = [];

    if  (defenderMen >= 2){
        for (var i = 0; i < 2; i++){
            arr.push(Math.round(Math.random()*5) + 1);
        }
    } else {
        arr.push(Math.round(Math.random()*5) + 1);
    }

    arr.sort().reverse();
    return arr;
}