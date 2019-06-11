var favThings = [];

$("document").ready(function() {
  $(".favorite-things").submit(function(event){
    event.preventDefault();
    var favorites = ["bird", "food", "car", "city", "activity"]

    // favorites.forEach(function(favorite) {
    //   var favVal = $("#"+favorite).val();

    for (i=0;i<favorites.length;i++){
      var value = $("#"+favorites[i]).val();
      $("#listFav").append("<li>"+value+"</li>");

    }

  });

})
