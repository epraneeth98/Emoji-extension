document.addEventListener('DOMContentLoaded', function() {
  var data = [
    {type : "laugh", emoji : String.fromCodePoint(0x1F600)},
    {type : "cry", emoji : String.fromCodePoint(0x1F62D)},
    {type : "angry", emoji : String.fromCodePoint(0x1F620)},
    {type : "confuse", emoji : String.fromCodePoint(0x1F615)},
    {type : "party", emoji : String.fromCodePoint(0x1F973)},
    {type : "sleep", emoji : String.fromCodePoint(0x1F634)},
  ]
  var checkPageButton = document.getElementById('button');
  checkPageButton.addEventListener('click', function() {
    var text = "";
    var copytext= document.querySelector("#input");
    for (var i = 0; i < data.length; i++) {
      if(String(data[i].type) == String(copytext.value)){
        text = data[i].emoji;
        break;
      }
    }
    navigator.clipboard.writeText(text);
    document.getElementById("aftertext").innerHTML = "Emoji copied to clipboard !";
  }, false);
}, false);