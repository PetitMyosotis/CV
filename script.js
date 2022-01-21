$(function(){
       $("#etudesDiplomes").hide();
       $("#experiences").hide();
       $("#centreDinteret").hide();
       $("#img").hide();
       $("#img").fadeIn(4000);
});

$(function(){
    $("#btnAboutme").click(function(){
       $("#aboutme").show();
       $("#etudesDiplomes").hide();
       $("#experiences").hide();
       $("#centreDinteret").hide();
    });
});

$(function(){
    $("#btnEtudes").click(function(){
       $("#etudesDiplomes").show(); 
       $("#aboutme").hide();
       $("#experiences").hide();
       $("#centreDinteret").hide();
    });
});

$(function(){
    $("#btnExperiences").click(function(){
       $("#experiences").show(); 
       $("#aboutme").hide();
       $("#etudesDiplomes").hide();
       $("#centreDinteret").hide();
    });
});

$(function(){
    $("#btnCentreDinteret").click(function(){
       $("#centreDinteret").show(); 
       $("#aboutme").hide();
       $("#etudesDiplomes").hide();
       $("#experiences").hide();
    });
});

