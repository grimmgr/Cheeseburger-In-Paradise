$(function() {

  $('.create-form').on('submit', event => {
    event.preventDefault();
    const newBurger = {
      description: $('#burger').val().trim()
    };

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(() => {
        location.reload();
      }
    );
  });

  $('.eat-burger').on('click', function(event) {
    const id = $(this).data('id');

    const updatedBurger = {
      eaten: true
    };

    $('.eat-burger').css('display', 'none');
    $('.delete-burger').css('display', 'block');

    $.ajax(`/api/burgers/${id}`, {
      type: 'PUT',
      data: updatedBurger
    }).then(() => {
      location.reload();
      }
    );
  });

  $('.delete-burger').on('click', function(event) {
    const id = $(this).data('id');
    console.log(id);

    $.ajax(`/api/burgers/${id}`, {
      type: 'DELETE'
    }).then(() => {
      location.reload();
    })
  })

})