/*tooltip */
$('[data-toggle="tooltip"]').tooltip({

    delay:{
        show:800,
        hide:0
    }
});


var click_hamburger = document.getElementById('icon-hamburger');

 function select_side_menu (){

    document.getElementById("side-menu").style.display = "grid"

 }


 click_hamburger.addEventListener("click",select_side_menu);


 /*close side-menu*/

 var click_close_sign = document.getElementById('close');

 function change_close (){

    document.getElementById("side-menu").style.display = "none";
 }

 click_close_sign.addEventListener("click", change_close);


/*check here */
/* idea here is to detect click events on the page, and set the container,s to
display to none only when the target of the click isnt one of the div descendants
*/
 document.addEventListener('mouseup', function(event) {
    var div = document.getElementById('side-menu');
    if (!div.contains(event.target)) {  /* result of event.target is true or false */
      div.style.display = 'none';
    }
  });