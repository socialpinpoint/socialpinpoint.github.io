

$(document).ready(function(){

  $(".dropdown-wrapper").click(function(){
  $(this).toggleClass("active");
  });
  

 
});


$(document).ready(function(){

  $("#filter-toggle").click(function(){
  $(".search-area-wrapper").toggleClass("filter-active");
  });
  
});


$(document).ready(function(){
  
  $(".toggle-btn-wrapper .btn").click(function(){
  $(".toggle-btn-wrapper .btn").removeClass("btn-white");
  $(".toggle-btn-wrapper .btn").addClass("btn-clear");
  $(this).removeClass("btn-clear");
  $(this).addClass("btn-white");
  });
 
});



$(document).ready(function(){

  $(".record-tabs-wrapper button").click(function(){
  $(".record-tabs-wrapper button").removeClass("btn-white");
  $(".record-tabs-wrapper button").addClass("btn-ghost");
  $(this).removeClass("btn-ghost");
  $(this).addClass("btn-white");
  });

  $(".record-tabs-wrapper button .cmico-cross").click(function() {
  $(this).parent(".record-tabs-wrapper button").hide().fade();
  });

});

$(document).ready(function(){

  $(".input-wrapper").click(function(){
  $(this).toggleClass("active");
  $(this).find('input, textarea').toggleClass("active");
  $(this).find('label').toggleClass("active");
  });
  
});


$(document).ready(function(){
  
    $('input, textarea').blur(function(){
        if(!$(this).val()) { 
          $(this).removeClass("has-value").parent(".input-wrapper").removeClass("has-value");; } 
      else{ 
        $(this).addClass("has-value").parent(".input-wrapper").addClass("has-value"); }
    });
  
});


$(document).ready(function(){
  
  $("#tag-btn, #done-btn").click(function(){
  $(".input-options-wrapper").slideToggle(400);
  $(".options-wrapper").slideToggle(400);
  });
  
  $(".project-list .list-item").prepend("<input type='checkbox'>");
  
  $(".checked input").attr( 'checked', true );
 
});


$(document).ready(function(){

$('#col-toggle-btn').on('click',function() {     
  if ($(".page-content-wrapper").hasClass('layout-collapse'))
  {
    $(".page-content-wrapper").removeClass('layout-collapse');
    $(".page-content-wrapper").addClass('layout-sidebar'); 
  }

  else if ($(".page-content-wrapper").hasClass('layout-sidebar'))
  {
    $(".page-content-wrapper").removeClass('layout-sidebar');
    $(".page-content-wrapper").addClass('layout-equal');
  }

  else if ($(".page-content-wrapper").hasClass('layout-equal'))
  {
    $(".page-content-wrapper").removeClass('layout-equal');
    $(".page-content-wrapper").addClass('layout-collapse'); 
  }  
});
});
  


