$(document).ready(function(){
  //when the document is ready, do a bunch of stuff

  console.log("oh glorious master, your document is read!");

  var fromleft = 0;

  $(window).scroll(function(){
     // when you are scrolling do a buch of stuff



fromLeft = $(window).scrollLeft();
   //update the variable fromTop to the current pixels count
   // fromLeft = $(window).scrollLeft();

   console.log("oh glorious master, you are " + fromLeft + " times awesome!");
if(fromLeft >= 10 ){$(".text1").css({
   "display":"block"
 });}
   if(fromLeft >= 1450 ){
     console.log("oh, you have scrolled so far, you must be tired!");
     $("#three").css({
        "display":"none"
      });$("#one").css({
         "display":"none"
       });
       $("#two").css({
          "display":"block"
        });
        $("#six").css({
           "display":"block"
         });
         $("#mubei").css({
            "display":"block"
          });
   }
   else {

     console.log("going backwards, are we?");

     $("#three").css({"left" : 100 + fromLeft * 1.5 + "px",
});
$("#six").css({"display":"none"});
$("#seven").css({"display":"none"
 });

   }


   if(fromLeft >= 2850 ){
     console.log("oh, you have scrolled so far, you must be tired!");
     $("#five").css({
         "display":"none"
       });
       $("#four").css({
          "display":"block"
        });
        $("#six").css({
           "display":"none"
         });
         $("#seven").css({
            "display":"block"
          });
   }else {

     console.log("going backwards, are we?");

     $("#six").css({"left" : 100 + fromLeft * 1.5 + "px"

});
  }
  if(fromLeft >= 4800){
    console.log("oh, you have scrolled so far, you must be tired!");
    $("#five").css({
        "display":"none"
      });
      $("#four").css({
         "display":"block"
       });
       $("#seven").css({
          "display":"none"
        });
        $("#gezi").css({
           "display":"block"
         });
  }else {

    console.log("going backwards, are we?");

    $("#seven").css({"left" : 700 + fromLeft * 1.3 + "px"
});
 }


       })//close .scroll
   });//close .ready
