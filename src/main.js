import './styles.scss';
import { Game } from './ping-pong';
// import { pingPong } from './ping-pong';

function flash(color, delay) {
  setTimeout(function() {
    $('.colorSquare').css('background-color', color);
  }, delay);
}

function colorDisplay(arr) {
  let total = arr.length + 1;
  arr.forEach(function(color, i) {
    flash(color, 2000*(i+1));
  });
  flash('white', 2000*total);
}

$(document).ready(function() {
  let OurGame = new Game();

  $('#start-button').click(function() {
    $(".next-step-buttons").hide();
    $("#start-button").hide();
    OurGame.playerSeq = [];
    OurGame.gameSeq = [];
    OurGame.addToSeq();
    console.log(OurGame.gameSeq);
    colorDisplay(OurGame.gameSeq);
  });


  $('#enter-sequence-form').submit(function(event) {
    event.preventDefault();
    OurGame.playerSeq = [];
    let test = true;
    let player = ($('#sequence-entry').val()).toLowerCase().split(', ');
    player.forEach(function(color) {
      console.log(color);
      if (color !== "red" || color !== "green" || color !== "yellow" || color !== "blue") {
        alert("Hey bozo, that's not red, blue, green or yellow, try again.");
        test = false;
      }
      OurGame.playerSeq.push(color);
    });
    OurGame.playerSeq.forEach(function(color) {
      if (test == false) {
        OurGame.playerSeq = [];
        $(".next-step-buttons").show();
        $("#continue-button").hide();
        $("#start-over-button").show();
      } else {
        console.log(OurGame.playerSeq);
        $('#sequence-entry').val('');
        $(".next-step-buttons").show();
        $("#start-over-button").hide();
        $("#continue-button").show();
      }
    });
    let outcome = OurGame.checkSequences();
    if (outcome == true) {
      $(".outcome").text('You got it, nice job.');
    } else {
      $(".outcome").text("Uh oh, I don't think that's right. Thanks for playing, buddy!");
    }
  });

  $('#continue-button').click(function() {
    OurGame.addToSeq();
    colorDisplay(OurGame.gameSeq);
  });


  $('#start-over-button').click(function() {
    $("#start-button").show();
  });
});
