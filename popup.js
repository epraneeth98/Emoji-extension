document.addEventListener('DOMContentLoaded', function() {
  var data = [
    {type = "laugh", emoji= String.fromCodePoint(0x1F600)},
    {type = "cry", emoji= String.fromCodePoint(0x1F62D)},
    {type = "angry", emoji= String.fromCodePoint(0x1F620)}
  ]
  var checkPageButton = document.getElementById('button');
  checkPageButton.addEventListener('click', function() {
    var text = "";
    var copytext= document.querySelector("#input");
    for (var i = 0; i < data.length; i++) {
      if(data[i].type==copytext){
        text += data[i].emoji;
        break;
      }
    }
    navigator.clipboard.writeText(text);
  }, false);
}, false);