var favThings = [];

$("document").ready(function() {
  $(".favorite-things").submit(function(event){
    event.preventDefault();
    var favorites = ["bird", "food", "car", "city", "activity"]

    favorites.forEach(function(favorite) {
      var favVal = $("#"+favorite).val();

      $("#listFav").append("<li>"+favVal+"</li>");
    })

  });

})
