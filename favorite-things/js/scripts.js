var favThings = [];

$("document").ready(function() {
  $(".favorite-things").submit(function(event){
    event.preventDefault();


    favThings.push($("#bird").val());
    favThings.push($("#car").val());
    favThings.push($("#food").val());
    favThings.push($("#city").val());
    favThings.push($("#activity").val());
    console.log(favThings);

    $("#listFav").append("<li>"+favThings[0]+"</li>")
    $("#listFav").append("<li>"+favThings[1]+"</li>")
    $("#listFav").append("<li>"+favThings[2]+"</li>")
    $("#listFav").append("<li>"+favThings[3]+"</li>")
    $("#listFav").append("<li>"+favThings[4]+"</li>")
  });

})
