var item;
 $(document).ready(function(){    
  $('[item]').click(function(){
    //get the value of the item attribute when users click on the map  
     item=$(this).attr('item');
     if(item!="Maryland"){
       var display =  $("#"+item).css("display");
         if(display ="none")
              {
                $("#"+item).attr("style", "display:block");
              }
         }  
         else { document.getElementById("Maryland").style.display = "block";
                  $('map').imageMapResize();
              }
    });
});
    
 $(document).ready(function(){
    $('map').imageMapResize();
});

