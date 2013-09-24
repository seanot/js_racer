

function moveRacer1() {
    $('#player1_strip .active').next().addClass("active").prev().removeClass("active"); 
    if ($('#player1_strip td').last().attr('class') === "active") {

        alert("player1 won!");
        resetBoard();
    }
}

function moveRacer2() {
    $('#player2_strip .active').next().addClass("active").prev().removeClass("active"); 
    if ($('#player2_strip td').last().attr('class') === "active") {
        alert("player2 won!");
        resetBoard();
    }
}

function resetBoard() {
    $('td.active').removeClass('active');
    $('#player1_strip td').first().addClass('active');
    $('#player2_strip td').first().addClass('active');
}

function timeout_init() {
  setTimeout("$('.start_light').css('background-color', '#f90')", 2000);
}

$(document).ready(function() {
    $('.start_light').click(timeout_init);
    $(document).on('keyup', function(event) {
  
        if(event.keyCode === 81) {
            moveRacer1();

        }
        if(event.keyCode === 80) {
            moveRacer2();

        }
    });
});
