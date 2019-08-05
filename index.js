var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


theBeatlesPlay(musicians, instruments); 

function theBeatlesPlay(musicians, instruments) {
  var result = [];                                              //return index from musicians and instruments...
  for(var i =0; i < musicians.length; i++) {
    result.push(musicians[i] + " plays " + instruments[i]);
  }
  return result;
}

