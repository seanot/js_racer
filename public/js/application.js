function moveRacer() {
  $('#player1_strip .active').next().addClass("active").prev().removeClass("active"); 
}

function moveRacer2() {
  $('#player2_strip .active').next().addClass("active").prev().removeClass("active"); 
}

$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $(document).on('keydown', function(event) {
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how

    if(event.keyCode == 77) {
      moveRacer();
    }

    if(event.keyCode == 65) {
      moveRacer2();
    }

    // console.log(event);
    // moveRacer();
  });
});
