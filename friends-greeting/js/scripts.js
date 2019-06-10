$("document").ready(function(){
  $(".friends").submit(function(event) {
    event.preventDefault();
    var friends = ["fOne", "fTwo", "fThree", "fFour", "fFive"]


    $("p").append("Hello,")
     friends.forEach(function(friend) {

       if(friend === "fFive")
        $("p").append(" and ");
      var val = $("#" + friend).val()

      if(val === "")
        val = "blank"
       $("p").append(" " + val);
     })



  });
})
