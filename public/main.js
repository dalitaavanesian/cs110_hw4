$(function($) {


  $.get('/gettodos', function(result) {
    for(var i = 0; i < result.length; i++) {
      var todo = result[i];
      $('#todo-list ul').append('<li><i class="check-button fa fa-check-circle-o ' + (todo.checked ? '' : 'hidden') + '"></i><i class="check-button fa fa-circle-o ' + (todo.checked ? 'hidden' : '') + '"></i><i class="fa fa-trash-o"></i><span>' + todo.title + '</span></li>');
    }
    addCheckClickAction();
  });

  function addCheckClickAction() {
    $('.check-button').click(function() {
      $(this).toggleClass('hidden');
      $(this).siblings('.check-button').toggleClass('hidden');
    });
  }
});
