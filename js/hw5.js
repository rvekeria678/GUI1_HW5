/*
File: hw5.js
GUI Assignment: Scrabble Game
Raj Vekeria, UMass Lowell Computer Science, rvekeria@cs.uml.edu
Copyright (c) 2021 by Raj. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by RV on December 15, 2021 at 2:52 PM
*/
$(document).ready(function() {
    
    var totalScore = 0;

    var ScrabbleTiles = [] ;
    ScrabbleTiles["A"] = { "value" : 1,  "od" : 9,  "nr" : 9, "timg" : "images/Scrabble_Tile_A.png" } ;
    ScrabbleTiles["B"] = { "value" : 3,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_B.jpg" } ;
    ScrabbleTiles["C"] = { "value" : 3,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_C.jpg" } ;
    ScrabbleTiles["D"] = { "value" : 2,  "od" : 4,  "nr" : 4, "timg" : "images/Scrabble_Tile_D.jpg" } ;
    ScrabbleTiles["E"] = { "value" : 1,  "od" : 12, "nr" : 12, "timg" : "images/Scrabble_Tile_E.jpg" } ;
    ScrabbleTiles["F"] = { "value" : 4,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_F.jpg" } ;
    ScrabbleTiles["G"] = { "value" : 2,  "od" : 3,  "nr" : 3, "timg" : "images/Scrabble_Tile_G.jpg" } ;
    ScrabbleTiles["H"] = { "value" : 4,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_H.jpg" } ;
    ScrabbleTiles["I"] = { "value" : 1,  "od" : 9,  "nr" : 9, "timg" : "images/Scrabble_Tile_I.jpg" } ;
    ScrabbleTiles["J"] = { "value" : 8,  "od" : 1,  "nr" : 1, "timg" : "images/Scrabble_Tile_J.jpg" } ;
    ScrabbleTiles["K"] = { "value" : 5,  "od" : 1,  "nr" : 1, "timg" : "images/Scrabble_Tile_K.jpg" } ;
    ScrabbleTiles["L"] = { "value" : 1,  "od" : 4,  "nr" : 4, "timg" : "images/Scrabble_Tile_L.jpg" } ;
    ScrabbleTiles["M"] = { "value" : 3,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_M.jpg" } ;
    ScrabbleTiles["N"] = { "value" : 1,  "od" : 6,  "nr" : 6, "timg" : "images/Scrabble_Tile_N.jpg" } ;
    ScrabbleTiles["O"] = { "value" : 1,  "od" : 8,  "nr" : 8, "timg" : "images/Scrabble_Tile_O.jpg" } ;
    ScrabbleTiles["P"] = { "value" : 3,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_P.jpg" } ;
    ScrabbleTiles["Q"] = { "value" : 10, "od" : 1,  "nr" : 1, "timg" : "images/Scrabble_Tile_Q.jpg" } ;
    ScrabbleTiles["R"] = { "value" : 1,  "od" : 6,  "nr" : 6, "timg" : "images/Scrabble_Tile_R.jpg" } ;
    ScrabbleTiles["S"] = { "value" : 1,  "od" : 4,  "nr" : 4, "timg" : "images/Scrabble_Tile_S.jpg" } ;
    ScrabbleTiles["T"] = { "value" : 1,  "od" : 6,  "nr" : 6, "timg" : "images/Scrabble_Tile_T.jpg" } ;
    ScrabbleTiles["U"] = { "value" : 1,  "od" : 4,  "nr" : 4, "timg" : "images/Scrabble_Tile_U.jpg" } ;
    ScrabbleTiles["V"] = { "value" : 4,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_V.jpg" } ;
    ScrabbleTiles["W"] = { "value" : 4,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_W.jpg" } ;
    ScrabbleTiles["X"] = { "value" : 8,  "od" : 1,  "nr" : 1, "timg" : "images/Scrabble_Tile_X.jpg" } ;
    ScrabbleTiles["Y"] = { "value" : 4,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_Y.jpg" } ;
    ScrabbleTiles["Z"] = { "value" : 10, "od" : 1,  "nr" : 1, "timg" : "images/Scrabble_Tile_Z.jpg" } ;
    ScrabbleTiles["Blank"] = { "value" : 0,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_Blank.jpg" } ;

    var board = [];
    board[0] = {"bonus":1, "boardImage":"images/Scrabble_Board_Blank.png"};
    board[1] = {"bonus":1, "boardImage":"images/Scrabble_Board_Blank.png"};
    board[2] = {"bonus":2, "boardImage":"images/Scrabble_Board_Bonus.png"}; // Bonus Square
    board[3] = {"bonus":1, "boardImage":"images/Scrabble_Board_Blank.png"};
    board[4] = {"bonus":1, "boardImage":"images/Scrabble_Board_Blank.png"};
    board[5] = {"bonus":2, "boardImage":"images/Scrabble_Board_Bonus.png"}; // Bonus Square
    board[6] = {"bonus":1, "boardImage":"images/Scrabble_Board_Blank.png"};
    
    for (var i = 0; i < board.length; ++i) {
        $("#board").append("<img src="+board[i].boardImage+" id = b"+ i +" class='bTiles ui-widget-content snapZone'>");
    }
    // Reference: https://jqueryui.com/droppable/
    $(".bTiles").droppable({
        drop: function(event,ui) {
            $(ui.draggable).addClass("onBoard");
            // // Testing: used to see what tile is dropped on a specific part of the board
            // console.log("Tile " + $(ui.draggable).attr('id') + " dropped on " + $(this).attr('id'));
            
            if ($(this).attr('id') == 'b2' || $(this).attr('id') == 'b5') { $(ui.draggable).addClass("bonus", 0); }
            else $(ui.draggable).removeClass("bonus");

            $("#score").html("Rolling Score: " + getScore());
        }
    });
    // Reference: https://jqueryui.com/droppable/
    $("#tilerack").droppable({
        drop: function(event,ui) {
            $("#tilerack").css("darkgray 5px ridge");
            $(ui.draggable).removeClass("onBoard");
            $(ui.draggable).removeClass("bonus");
            $("#score").html("Rolling Score: " + getScore());
        }
    });

    // Draws the initial tiles when page is first loaded up
    drawTiles();
    $("#tilesleft").html("Tiles Left: " + moreTiles());

    // Generates random letter based off weighted tile disctribution
    function generateRandomLetter() {
        rx = Math.floor((Math.random() * 100) + 1);
        if (rx > 0 && rx <= 9) { return "A"; } // od: 9
        else if (rx > 9 && rx <= 11) { return "B"; } // od: 2
        else if (rx > 11 && rx <= 13) { return "C"; } // od: 2
        else if (rx > 13 && rx <= 17) {return "D"; } // od: 4
        else if (rx > 17 && rx <= 29) {return "E"; } // od: 12
        else if (rx > 29 && rx <= 31) {return "F"; } // od: 2
        else if (rx > 31 && rx <= 34) {return "G"; } // od: 3
        else if (rx > 34 && rx <= 36) {return "H"; } // od: 2
        else if (rx > 36 && rx <= 45) {return "I"; } // od: 9
        else if (rx > 45 && rx <= 46) {return "J"; } // od: 1
        else if (rx > 46 && rx <= 47) {return "K"; } // od: 1
        else if (rx > 47 && rx <= 51) {return "L"; } // od: 4
        else if (rx > 51 && rx <= 53) {return "M"; } // od: 2
        else if (rx > 53 && rx <= 59) {return "N"; } // od: 6
        else if (rx > 59 && rx <= 67) {return "O"; } // od: 8
        else if (rx > 67 && rx <= 69) {return "P"; } // od: 2
        else if (rx > 69 && rx <= 70) {return "Q"; } // od: 1
        else if (rx > 70 && rx <= 76) {return "R"; } // od: 6
        else if (rx > 76 && rx <= 80) {return "S"; } // od: 4
        else if (rx > 80 && rx <= 86) {return "T"; } // od: 6
        else if (rx > 86 && rx <= 90) {return "U"; } // od: 4
        else if (rx > 90 && rx <= 92) {return "V"; } // od: 2
        else if (rx > 92 && rx <= 94) {return "W"; } // od: 2
        else if (rx > 94 && rx <= 95) {return "X"; } // od: 1
        else if (rx > 95 && rx <= 97) {return "Y"; } // od: 2
        else if (rx > 97 && rx <= 98) {return "Z"; } // od: 1
        else if (rx > 98 && rx <= 100) {return "Blank"; } // od: 2
        else { return "Error"; }
    }

    // Generates tile to be placed on tile rack
    function generateTile() {
        let tileLetter = generateRandomLetter();
        while (ScrabbleTiles[tileLetter].nr <= 0) { tileLetter = generateRandomLetter(); }
        ScrabbleTiles[tileLetter].nr -= 1;
        $("#tilerack").prepend("<img src='./images/Scrabble_Tile_"+tileLetter+".jpg' id='"+tileLetter+"' class='tles ui-widget-content'></img>");
        // Reference: https://api.jqueryui.com/draggable/#option-snap
        // Reference: https://jqueryui.com/draggable/
        $(".tles").draggable({revert:'invalid', snap: ".snapZone", snapMode: "inner" });
    }
    // Responsible for drawing tiles after each new round or next word
    function drawTiles() {
        // If there exists no more tiles, show end game message and reset the game
        if (!moreTiles()) {
            alert("You have finished the Game!");
            resetGame();
        } else {
            // Draws up to seven tiles
            for (let playableTiles = $(".tles").length; playableTiles < 7; ++playableTiles) {
                generateTile();
            }
        }
    }

    // Determines if there still exists tiles to be dispensed
    function moreTiles() {
        var remainingTiles = 0;
        let keys = Object.keys(ScrabbleTiles);
        for (let i = 0; i < Object.keys(ScrabbleTiles).length; ++i) {
            remainingTiles += ScrabbleTiles[keys[i]].nr;
        }
        return remainingTiles;
    }

    // Determines the score based upon the tiles placed on the board
    function getScore() {
        if ($(".onBoard").length >= 2) {
            let scr = 0;
            let boardTiles = document.getElementsByClassName('onBoard');

            var tileltr;
            for (var i = 0; i < boardTiles.length; ++i) {
                tileltr = boardTiles[i].id;
                scr += ScrabbleTiles[tileltr].value;
            }

            switch ($(".bonus").length) {
                case 1:
                    return scr * 2;
                case 2:
                    return scr * 4;
                default:
                    return scr;
            }
        }
        return 0;
    }
    // Resets Game through by returning global variable and ui elements to their intial states
    function resetGame() {
        let keys = Object.keys(ScrabbleTiles);

        // Removes any remaining tiles left on the board
        if ($(".tles").length){ $(".tles").remove(); }

        // Resetting letter tile distributions
        for (let i = 0; i < Object.keys(ScrabbleTiles).length; ++i) {
            ScrabbleTiles[keys[i]].nr = ScrabbleTiles[keys[i]].od;
        }
        // Resetting ui elements
        $("#totalscore").html("Total Score: --");
        $("#score").html("Rolling Score: 0");
        totalScore = 0;
    }
    // Handles Next Button Actions
    $("#next-btn").click(function() {
        if ($(".onBoard").length >= 2) {
            
            totalScore += getScore();

            $(".onBoard").remove();
            $("#totalscore").html("Total Score: " + totalScore);
            drawTiles();
            if (moreTiles() <= 7) {
                alert("You finished the game with a total score of " + totalScore);
                resetGame();
                drawTiles();
            }
            $("#tilesleft").html("Tiles Left: " + moreTiles());

            $("#score").html("Rolling Score: 0");
        }
    });
    // Handles Reset Button Actions
    $("#reset-btn").click(function() {
        resetGame();
        drawTiles();
        $("#tilesleft").html("Tiles Left: " + moreTiles());
    });
    // Handles New Button Actions
    $("#new-btn").click(function() {
        if (moreTiles() <= 7) {
            alert("You finished the game with a total score of " + totalScore);
            resetGame();
            drawTiles();
            $("#tilesleft").html("Tiles Left: " + moreTiles());
        }
        else {
            if ($(".tles").length) { $(".tles").remove(); }
            drawTiles();
            $("#tilesleft").html("Tiles Left: " + moreTiles());
        }
    });
});