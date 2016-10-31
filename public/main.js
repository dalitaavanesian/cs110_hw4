$(function($) {

  $('#add-todo').click(function() {
    var todoText = $('#todo-text').val();
    $.post('/addtodo', todoText, function(todo) {
      appendTodo(todo);
      $('#todo-text').val('');
      addCheckClickAction();
      addDeleteAction();
    });
  });

  $.get('/gettodos', function(result) {
    for(var i = 0; i < result.length; i++) {
      var todo = result[i];
      appendTodo(todo);
    }
    addCheckClickAction();
    addDeleteAction();
  });

  function appendTodo(todo) {
    $('#todo-list ul').append('<li><i class="check-button fa fa-check-circle-o ' + (todo.checked ? '' : 'hidden') + '"></i><i class="check-button fa fa-circle-o ' + (todo.checked ? 'hidden' : '') + '"></i><i id="' + todo.id + '" class="delete-button fa fa-trash-o"></i><span>' + todo.title + '</span></li>');
  }

  function addCheckClickAction() {
    $('.check-button').click(function() {
      $(this).toggleClass('hidden');
      $(this).siblings('.check-button').toggleClass('hidden');
    });
  }

  function addDeleteAction() {
    $('.delete-button').click(function() {
      var id = $(this).attr('id');
      $.ajax({
        url: '/deletetodo',
        type: 'DELETE',
        data: id,
        success: function() {
          $('#' + id).parent().remove();
        }
      });
    });
  }
});
