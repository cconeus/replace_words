var replaceWord = function(sentence) {
  var output = [];

  return output;
};

$(document).ready(function() {
  $("form#replaceWord").submit(function(event){
    var sentence = $("input#sentence").val();
    var searchWord = $("input#searchWord").val();
    var replacementWord = $("input#replacementWord").val();
    var result = replaceWord(sentence);

    $(".output").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
