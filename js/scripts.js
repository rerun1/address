// business logic

function resetInputFields(){
  $("input#contactFirstName").val("");
  $("input#contactLastName").val("");
  $("input#contactPhone").val("");
  $("input#contactEmail").val("");
  $("input#contactAddress").val("");
  $("input#contactCity").val("");
  $("select#contactState").val("");
  $("input#contactZip").val("");
};
// end business logic

$(document).ready(function(){
  $("form#addContact").submit(function(event){
    event.preventDefault();
    var inputFirstName = $("input#contactFirstName").val();
    var inputLastName = $("input#contactLastName").val();
    var inputPhone = $("input#contactPhone").val();
    var inputEmail = $("input#contactEmail").val();
    var inputAddress = $("input#contactAddress").val();
    var inputCity = $("input#contactCity").val();
    var inputState = $("select#contactState").val();
    var inputZip = $("input#contactZip").val();

    $("ul#newContact").append('<li><h4 class="showAddress">' + inputFirstName + '&nbsp;' + inputLastName + '<h4></li>');
    $("ul#newContact").append('<li>' + inputPhone + '<br>' + inputEmail + '<br>' + inputAddress + '<br>' + inputCity + ',&nbsp;' + inputState + '&nbsp;' + inputZip + '</li>');

    resetInputFields();

  });

});
