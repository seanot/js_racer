var start = 0
var stop = 0
var winning_time = 0
var player = null

function Racer(name) {
  this.name = name
}



function moveRacer1() {
    $('#player1_strip .active').next().addClass("active").prev().removeClass("active"); 
    if ($('#player1_strip td').last().attr('class') === "active") {
        detectWinner(player_1);
    }
}

function moveRacer2() {
    $('#player2_strip .active').next().addClass("active").prev().removeClass("active"); 
    if ($('#player2_strip td').last().attr('class') === "active") {
        detectWinner(player_2);
    }
}

function detectWinner(player) {
    stop = new Date();
    console.log(player);
    winning_time = (stop - start - 3000);
    sendWinner(player, winning_time);
    alert(player);
    resetBoard();
}

function sendWinner(player, winning_time) {
    var url = '/result' 
    
    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: { player_id: player, winning_time: winning_time }
    })
    .done(function(response) {
      console.log("success");
      console.log(response.player_id);
      console.log(response.winning_time);
      $('.results').show();
      $('#player').append(response.player_id);
      $('#score').append(response.winning_time);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
    
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
    })
}

function countDown3() {
    setTimeout("$('.start_light').css('background-color', '#f00')", 1000);
}

function countDown2() {
    setTimeout("$('.start_light').css('background-color', '#f90')", 2000);
}

function countDown1() {
    setTimeout("$('.start_light').css('background-color', '#0f0')", 3000);
    
}

function launch() {
    setTimeout("playerAction()", 3000);
    start = new Date();
}

$(document).ready(function() {
    $('.results').hide();
    player_1 = $('#player1_strip').data('player1_id');
    player_2 = $('#player2_strip').data('player2_id');
    countDown3();
    countDown2();
    countDown1();
    launch();    
});
