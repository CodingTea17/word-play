$(document).ready(function() {
  $("form#user-sentence").submit(function(event){
    event.preventDefault();

    var sentence = $("#sentence").val();

    // An array of words
    var splitSentence = sentence.split(" ");

    // FILTER
    var mappedSentence = splitSentence.filter(function(purpleSpaceMonkey) {
      return purpleSpaceMonkey.length >= 3;
    });

    mappedSentence.reverse();

    alert(mappedSentence.join(' '));

  });
});
