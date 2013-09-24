var start = 0
var stop = 0
var official_time = 0

function moveRacer1() {
    $('#player1_strip .active').next().addClass("active").prev().removeClass("active"); 
    if ($('#player1_strip td').last().attr('class') === "active") {
        stop = new Date();
        alert("player1 won!");
        official_time = (stop - start - 3000)
        resetBoard();
    }
}

function moveRacer2() {
    $('#player2_strip .active').next().addClass("active").prev().removeClass("active"); 
    if ($('#player2_strip td').last().attr('class') === "active") {
        stop = new Date();
        alert("player2 won!");
        official_time = (stop - start - 3000)
        resetBoard();
    }
}

function resetBoard() {
    $('td.active').removeClass('active');
    $('#player1_strip td').first().addClass('active');
    $('#player2_strip td').first().addClass('active');
}

function playerAction() {
    $(document).on('keyup', function(event) {
  
        if(event.keyCode === 81) {
            moveRacer1();
        }
        if(event.keyCode === 80) {
            moveRacer2();
        }
    });
}

function countDown1() {
    setTimeout("$('.start_light').css('background-color', '#f00')", 1000);
}

function countDown2() {
    setTimeout("$('.start_light').css('background-color', '#f90')", 2000);
}

function countDown3() {
    setTimeout("$('.start_light').css('background-color', '#0f0')", 3000);
    
}

function launch() {
    setTimeout("playerAction()", 3000);
    start = new Date();
}

$(document).ready(function() {
    $('.start_light').click(function() {
          countDown1();
          countDown2();
          countDown3();
          launch();    
    });

});
