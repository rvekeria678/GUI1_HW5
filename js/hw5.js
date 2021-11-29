$(document).ready(function(){
    $("#testTile1").draggable();
    $("#testTile2").draggable();
    $("#testTile3").draggable();
    $("#tilerack").droppable({
        drop: function(event,ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
        }
    });
});