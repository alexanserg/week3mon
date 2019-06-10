var cards = []
var suits =["clubs", "diamonds", "spades", "hearts"]
var faces =["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]

$("document").ready(function() {

  $("#submit").click(function() {
    console.log("here");
    suits.forEach(function(suit){
      faces.forEach(function(face) {
        cards.push(face + " of " + suit)
      });
    });

    cards.forEach(function(card){
      if(card.includes("spades"))
        $(".spades").append("<li> " + card + "</li>");
      else if(card.includes("hearts"))
        $(".hearts").append("<li> " + card + "</li>");
      else if(card.includes("clubs"))
        $(".clubs").append("<li> " + card + "</li>");
      else
        $(".diamonds").append("<li> " + card + "</li>");

    })
  });
});
