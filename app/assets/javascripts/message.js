$(function(){
  // function buildHTML(mesage){
  //   if (Mmessage.image) {
  //     var html = 
      
  //     ` <div class="upper-message">
  //       <div class="upper-message__user-name">
  //       ${message.user_name}
  //       </div>
  //       <div class="upper-message__date">
  //       ${message.time}
  //       </div>
  //     </div>
      

  //   }
  // }
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
      var html
    }
});
});