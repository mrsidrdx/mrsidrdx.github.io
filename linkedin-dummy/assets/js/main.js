function showMore() {
  var more = document.getElementById("more");
  var more_button = document.getElementById("show-more");
  var less_button = document.getElementById("show-less");
  more.style.display = "block";
  more_button.style.display = "none";
  less_button.style.display = "block";
}

function showLess() {
  var more = document.getElementById("more");
  var more_button = document.getElementById("show-more");
  var less_button = document.getElementById("show-less");
  more.style.display = "none";
  more_button.style.display = "block";
  less_button.style.display = "none";
}

var input = document.getElementById('file-upload');
var infoArea = document.getElementById('file-upload-filename');
input.addEventListener( 'change', showFileName );
function showFileName( event ) {
  var input = event.srcElement;
  var fileName = input.files[0].name;
  infoArea.textContent = ' ' + fileName;
}
