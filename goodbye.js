// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
(function (window){
var goodbye = {};
var speakWord = "Good Bye";

byeSpeaker.speak = function (names) {
  console.log(speakWord + " " + names);
}
 
 window.goodbye = goodbye;
})(window);