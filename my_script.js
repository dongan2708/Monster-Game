$(document).ready(function () {
var headclix = 0,eyeclix = 0,noseclix = 0,mouthclix = 0;
lightening_one();
lightening_two();
lightening_three();
    $("#head").click(function () {
       if (headclix < 9){
         $("#head").animate({left:"-=367px"},500);
         headclix+=1;
       }
       else {
         $("#head").animate({left:"0px"},500);
         headclix = 0;
       }
    });
    $("#eyes").click(function () {
      if (eyeclix <9){
         $("#eyes").animate({left:"-=367px"},500);
         eyeclix+=1;
       }
      else {
            $("#eyes").animate({left:"0px"},500);
         eyeclix = 0;
      }
    });

    $("#nose").click(function(){
        if (noseclix < 9){
            $("#nose").animate({left:"-=367px"},500);
            noseclix+=1;
        }
        else{
            $("#nose").animate({left:"0px"},500);
            noseclix = 0;
        }
    });

    $("#mouth").click(function(){

        if (mouthclix < 9){
            $("#mouth").animate({left:"-=367px"},500);
            mouthclix+=1;
        }
        else{
            $("#mouth").animate({left:"0px"},500);
            mouthclix = 0;
        }

    });
});

function lightening_one(){
    $("#container #lightning1").fadeIn(250).fadeOut(250);
    setTimeout("lightning_one()",4000);
};

function lightening_two(){
    $("#container #lightning2").fadeIn("300").fadeOut("300");
    setTimeout("lightning_two()",5000);
};

function lightening_three() {
    $("#container #lightning3").fadeIn("450").fadeOut("450");
    setTimeout("lightning_three()", 6000);
};
