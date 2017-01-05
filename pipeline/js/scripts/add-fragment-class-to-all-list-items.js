(function() {
  var allListItems = document.querySelectorAll('ul > li');
  var allOrderedItems = document.querySelectorAll('ol:not(.home) > li');
  for (var i = 0; i < allListItems.length; i++) {
    allListItems[i].classList.add('fragment');
  }
  for (var j = 0; j < allOrderedItems.length; j++) {
    if (allOrderedItems[j].classList.contains('home')) {
      return;
    } else {
      allOrderedItems[j].classList.add('fragment');
    }
  }
})();
