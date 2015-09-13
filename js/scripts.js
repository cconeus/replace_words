var replaceWord = function(sentence) {
  //debugger;
  var output = [];
  output.push(sentence);
  return output.toString();
};

$(document).ready(function() {
  $("form#replaceWord").submit(function(event){
    var sentence = $("input#sentence").val();
    var searchWord = $("input#searchWord").val();
    var replacementWord = $("input#replacementWord").val();
    var result = replaceWord(sentence);
    var result2 = sentence.replace(searchWord, replacementWord);

    $(".output").text(result);
    $(".output").text(result2);

    $("#result").show();
    //$("#result2").show();
    event.preventDefault();
  });
});
