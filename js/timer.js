$(document).ready(function(){

  $('.banner').each(function(){
    var nowDate = new Date();
    var today = nowDate.getDate();
    var today = today.toString();
    var fifth = today.slice(-1);
    console.log(fifth);

    if(fifth == "5"){
      $(this).html(
        '<a href="https://google.co.jp" target="_blank"><img src="images/sale.png" alt="セール開催中" /></a>'
      );
    }
  });

});
