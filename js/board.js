$(document).ready(function(){
    var score = 0;
    var board = [];
    board[0] = {"bonus":1, "boardImage":"images/Scrabble_Board_Blank.png"};
    board[1] = {"bonus":1, "boardImage":"images/Scrabble_Board_Blank.png"};
    board[2] = {"bonus":2, "boardImage":"images/Scrabble_Board_Bonus.png"};
    board[3] = {"bonus":1, "boardImage":"images/Scrabble_Board_Blank.png"};
    board[4] = {"bonus":1, "boardImage":"images/Scrabble_Board_Blank.png"};
    board[5] = {"bonus":2, "boardImage":"images/Scrabble_Board_Bonus.png"};
    board[6] = {"bonus":1, "boardImage":"images/Scrabble_Board_Blank.png"};

    for (var i = 0; i < board.length; ++i) {
        $("#board").append("<img src="+board[i].boardImage+" id = b"+ i +" class='bTiles ui-widget-content'>");
    }

    $(".bTiles").droppable({
        drop: function(event,ui) {
            score += 1;
            $("#score").html("Score = " + score);
            // Reference: https://stackoverflow.com/questions/26746823/jquery-ui-drag-and-drop-snap-to-center
            var $this = $(this);
            ui.draggable.position({
                my: "center",
                at: "center",
                of: $this,
                using: function(pos){
                    $(this).animate(pos, 200, "linear");
                }
            });
        } 
    });
});