///////////////////MENU//////////////////////////
$(function(){
   $("#btnAboutme").click(function(){
       $("#aboutme").fadeIn();
       $("#etudesDiplomes").hide();
       $("#experiences").hide();
       $("#centreDinteret").hide();
       $("#contact").hide();
       $("#btnAboutme").css("background-color","white");
       $("#btnEtudes").css("background-color","bisque");
       $("#btnExperiences").css("background-color","bisque");
       $("#btnCentreDinteret").css("background-color","bisque");
       $("#btnContact").css("background-color","bisque");
    });
 });

$(function(){
    $("#btnEtudes").click(function(){
       $("#etudesDiplomes").fadeIn(); 
       $("#aboutme").hide();
       $("#experiences").hide();
       $("#centreDinteret").hide();
       $("#contact").hide();
       $("#btnEtudes").css("background-color","white");
       $("#btnAboutme").css("background-color","bisque");
       $("#btnExperiences").css("background-color","bisque");
       $("#btnCentreDinteret").css("background-color","bisque");
       $("#btnContact").css("background-color","bisque");
    });
});

$(function(){
    $("#btnExperiences").click(function(){
       $("#experiences").fadeIn(); 
       $("#aboutme").hide();
       $("#etudesDiplomes").hide();
       $("#centreDinteret").hide();
       $("#contact").hide();
       $("#btnExperiences").css("background-color","white");
       $("#btnAboutme").css("background-color","bisque");
       $("#btnEtudes").css("background-color","bisque");
       $("#btnCentreDinteret").css("background-color","bisque");
       $("#btnContact").css("background-color","bisque");
    });
});

$(function(){
    $("#btnCentreDinteret").click(function(){
       $("#centreDinteret").fadeIn(); 
       $("#aboutme").hide();
       $("#etudesDiplomes").hide();
       $("#experiences").hide();
       $("#contact").hide();
       $("#btnCentreDinteret").css("background-color","white");
       $("#btnAboutme").css("background-color","bisque");
       $("#btnEtudes").css("background-color","bisque");
       $("#btnExperiences").css("background-color","bisque");
       $("#btnContact").css("background-color","bisque");
    });
});

$(function(){
  $("#btnContact").click(function(){
     $("#contact").fadeIn(); 
     $("#centreDinteret").hide();
     $("#aboutme").hide();
     $("#etudesDiplomes").hide();
     $("#experiences").hide();
     $("#btnContact").css("background-color","white");
     $("#btnAboutme").css("background-color","bisque");
     $("#btnEtudes").css("background-color","bisque");
     $("#btnExperiences").css("background-color","bisque");
     $("#btnCentreDinteret").css("background-color","bisque");
  });
});
////////////////////////// BOUTON PLUS /////////////////////
$(function(){
        $(".btnPlus").hover(function(){
          $(this).css("background-color", "white");
          }, function(){
          $(this).css("background-color", "bisque");
        });
});

$(function(){
    $("#btnPlus1").click(function(){
      $("#p1").toggle();
    });
});

$(function(){
    $("#btnPlus2").click(function(){
      $("#p2").toggle();
    });
});

$(function(){
    $("#btnPlus3").click(function(){
      $("#p3").toggle();
    });
});

$(function(){
    $("#btnPlus4").click(function(){
      $("#p4").toggle();
    });
});

$(function(){
    $("#btnPlus5").click(function(){
      $("#p5").toggle();
    });
});
