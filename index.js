// add solution here

var musicians = ["john Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  
  
theBeatlesPlay(musicians, instruments);

function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (var i = 0; i < musicians.lenght; i++) {
    result.push(musicians[i] + " plays" + instruments[i]);
    }
}