/*
    * Built with help from: LOVELY THINGS
    */

var options = {
  valueNames: [ 'artistname','songname', 'description', 'category' ]
};

var featureList = new List('lovely-things-list', options);

$('#filter-classics').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Classics") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-current').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Current") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});




$('#filter-90s00s').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "90s 00s") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});


$('#filter-ballads').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Ballads") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});



$('#filter-none').click(function() {
  featureList.filter();
  return false;
});