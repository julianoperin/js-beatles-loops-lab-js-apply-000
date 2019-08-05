// add solution here

var musicians = ["john Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  
  
theBeatlesPlay(musicians, instruments);

function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (var i = 0; i < musicians.lenght; i++) {
    result.push(musicians[i] + " plays" + instruments[i]);
    }
    return result;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

console.log("result");