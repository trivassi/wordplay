$(document).ready(function() {
  $("form#button").submit(function(event) {

    var sentence = $("input#sentence").val();

    var words = sentence.split([" "]);

    //
    // sentence.map(function(sentence) {
    //   return sentence.split(" ");

    alert(words);

    event.preventDefault();

    });
});
