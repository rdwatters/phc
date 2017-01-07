(function() {
  let allImgs = document.querySelectorAll('img'),
    classTest = new RegExp('class=');
  for (var i = 0; i < allImgs.length; i++) {
    var img = allImgs[i],
      alt = img.getAttribute('alt');
    if (classTest.test(alt)) {
      var cn = alt.split('class=')[1];
      img.className += cn;
    }
  }
})();
