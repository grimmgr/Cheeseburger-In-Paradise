$(function() {

  $('.create-form').on('submit', event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    const newBurger = {
      description: $('#burger').val().trim()
    };

    // Send the POST request.
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(() => {
        console.log('created new burger');
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $('.eat-burger').on('click', function(event) {
    const id = $(this).data('id');
    console.log(id);

    $.ajax(`/api/burgers/${id}`, {
      type: 'PUT',
      data: { eaten: true }
    }).then(() => {
        // Reload the page to get the updated list
        // location.reload();
      }
    );
  })

})