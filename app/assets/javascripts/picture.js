// Add your JavaScript here


$(function(){
  addFormEventHandler();
});


function addFormEventHandler() {
$('.ajax').on('ajax:complete', function(e, request, status){
  var class1 = request.responseJSON.class
  var id = request.responseJSON.id
  var message = request.responseJSON.content
$(`#photo${id}`).attr( "class", `${class1}`)
$(`div#photo${id}`).html(` ${message}`)
})
}
