$(function(){
  function buildHTML(message){
      var content = message.content != null ? `${ message.content }` : "";
      var img = message.image != null ? `<img src= ${ message.image }>` : "";
      
      var html = 
      `<div class="message" data-id="${message.id}"> 
        <div class="upper-message">
          <div class="upper-message__user-name">
          ${message.user_name}
          </div>
          <div class="upper-message__date">
          ${message.date}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
          ${content}
          </p>
          ${img}
        </div>
      </div>`
      return html;
  }

  $("#new_message").on('submit', function(e){
    
    e.preventDefault();
    
    var formData = new FormData(this);
    var url = $(this).attr('action')

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');   
      $('form')[0].reset();
      $('.form__submit').prop( 'disabled', false )
    })
    
    .fail(function(){
      alert('error');
    })
    .always(function(data){
      $('.form__submit').prop('disabled', false);
    })
  })

    var reloadMessages = function() {
      last_message_id = $('.message:last-child').data('id')
      $.ajax({
        url: 'api/messages',
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        messages.forEach(function(message) {
          var html = buildHTML(message);
          $('.messages').append(html);
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');  
        })
      })
      .fail(function() {
        alert('error');
      });
      
    };
    setInterval(reloadMessages, 5000);
    
  });