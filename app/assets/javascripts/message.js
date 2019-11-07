$(function(){

  function buildHTML(message){

    image = (message.image) ? `<img class="message__image" src="${ message.image }">`: "";

    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${ message.name }
                    </div>
                    <div class="upper-message__date">
                      ${ message.created_at }
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${ message.content }
                    </p>
                    ${image}
                  </div>
                </div>`;
    return html;
  }

  $('#new_message').on('submit',function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    
    .done(function(deta){
      var html = buildHTML(deta);
      $('.form__submit').prop('disabled', false);
      $('.messages').append(html).animate({scrollTop: $('.messages')[0].scrollHeight});
      $('#new_message')[0].reset();
    })
    .fail(function(){
      alert('error');
    });
  })
});