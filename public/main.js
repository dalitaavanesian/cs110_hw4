$(function() {
  var flag = false;
  $(".fa fa-circle-o").click(function() {
    if( flag == false) {
      $("this").hide('1000');
      flag = true;
    }
    else {
      $(".fa fa-check-circle-o hidden").show('1000');
    }
  });
});
