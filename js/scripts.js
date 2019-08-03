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
function resetNewInputFields(){
  $("input#newFirstName").val("");
  $("input#newLastName").val("");
  $("input#newPhone").val("");
  $("input#newEmail").val("");
  $("input#newAddress").val("");
  $("input#newCity").val("");
  $("select#newState").val("");
  $("input#newZip").val("");
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

    $("ul.newContact").append('<li><h4>' + inputFirstName + '&nbsp;' + inputLastName + '<h4></li>');

    $("ul.newContactFull").append('<li>' + inputFirstName + '&nbsp;' + inputLastName + '</li>' + '<li>' + inputPhone + '</li>' + '<li>' + inputEmail + '</li>' + '<li>' + inputAddress + '</li>' + '<li>' + inputCity + ',&nbsp;' + inputState + '&nbsp;' + inputZip + '</li>');

    resetInputFields();

    $("form#addContact").hide();

    });

  $("button#addAnother").click(function(){
    $("ul.newContactFull").append('<li><span class="newFirstName"></span>&nbsp;<span class="newLastName"></li>' + '<li class="newPhone"></li>' + '<li class="newEmail"></li>' + '<li class="newAddress"></li>' + '<li><span class="newCity"></span>,&nbsp;<span class="newState"></span>&nbsp;<span class"newZip"></span></li>');
    $("form#addAnotherContact").show();

    $("form#addAnotherContact").submit(function(event){
      event.preventDefault();
      var inputNewFirstName = $("input#newFirstName").val();
      var inputNewLastName = $("input#newLastName").val();
      var inputNewPhone = $("input#newPhone").val();
      var inputNewEmail = $("input#newEmail").val();
      var inputNewAddress = $("input#newAddress").val();
      var inputNewCity = $("input#newCity").val();
      var inputNewState = $("select#newState").val();
      var inputNewZip = $("input#newZip").val();

      $("ul.newContact").append('<li><h4>' + inputNewFirstName + '&nbsp;' + inputNewLastName + '<h4></li>');

      $("span.newFirstName").text(inputNewFirstName);
      $("span.newLastName").text(inputNewLastName);
      $("li.newPhone").text(inputNewPhone);
      $("li.newEmail").text(inputNewEmail);
      $("li.newAddress").text(inputNewAddress);
      $("span.newCity").text(inputNewCity);
      $("span.newState").text(inputNewState);
      $("span.newZip").text(inputNewZip);

      resetNewInputFields();

      });

    });
    $("ul.newContact").click(function(){
      $("ul.newContactFull").toggle();
    });

});
