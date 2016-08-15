$(document).ready(function() {
  $("form#button").submit(function(event) {

    var sentence = $("input#sentence").val();

    var words = sentence.split([" "]);

    var bigWords = [];

    words.forEach(function(word) {
      if (word.length >= 3) {
        bigWords.push(word);
      }
    });

    bigWords = bigWords.reverse();
    bigWords = bigWords.join(" ");

    alert(bigWords);

    event.preventDefault();

    });
});
