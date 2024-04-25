// Define helloSpeaker object
var helloSpeaker = {};

// Define speak method for helloSpeaker
helloSpeaker.speak = function(name) {
  console.log("Hello " + name);
};

// Define byeSpeaker object
var byeSpeaker = {};

// Define speak method for byeSpeaker
byeSpeaker.speak = function(name) {
  console.log("Good Bye " + name);
};

// Wrap the entire contents of script.js inside of an IIFE
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Loop over the names array and say either 'Hello' or "Good Bye"
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
