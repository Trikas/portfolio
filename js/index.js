$(document).ready(function(){
    $("#comp-repair").mouseover(function(){
     $("#comp-content").removeClass("hide_div");
     
    })
   
     $("#comp-repair").mouseleave(function(){
     $("#comp-content").addClass("hide_div");
     
    })
// **************
     $("#teacher_item").mouseover(function(){
     $("#teacher_content").removeClass("hide_div");
     
    })
   
     $("#teacher_item").mouseleave(function(){
     $("#teacher_content").addClass("hide_div");
     
    })
// **************
     $("#personal_item").mouseover(function(){
     $("#personal_content").removeClass("hide_div");
     
    })
   
     $("#personal_item").mouseleave(function(){
     $("#personal_content").addClass("hide_div");
     
    })
   // **************
     $("#coming_item").mouseover(function(){
     $("#coming_content").removeClass("hide_div");
     
    })
   
     $("#coming_item").mouseleave(function(){
     $("#coming_content").addClass("hide_div");
     
    })


    setTimeout(function(){ 
    	
    	$(".code0").removeClass("hide_div");
      $(".code0").addClass("typewriter"); 
      
     }, 1000);
     setTimeout(function(){ 
    	$(".code1").removeClass("hide_div");
      $(".code1").addClass("typewriter"); 
      
     }, 2000);
     setTimeout(function(){ 
    	$(".code2").removeClass("hide_div");
      $(".code2").addClass("typewriter"); 
      
     }, 3000);
    setTimeout(function(){ 
    	$(".code3").removeClass("hide_div");
      $(".code3").addClass("typewriter"); 
      
     }, 4000);
     
    setTimeout(function(){ 

      $(".mb-1").removeClass("hide_div");
      $(".mb-5").removeClass("hide_div");
      $(".code0").addClass("hide_div");
      $(".code1").addClass("hide_div");
      $(".code2").addClass("hide_div");
      $(".code3").addClass("hide_div"); }, 5000);
 })


   
   
