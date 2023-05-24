$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 10) {
          $(".container1").css("background" , "black");
        }
  
        else{
            $(".container").css("background" , "black");  	
        }
    })
  })