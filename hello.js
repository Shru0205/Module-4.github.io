// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
(function (window) {  
var hello = {};
var speakWord = "Hello";

helloSpeaker.speak = function (names) {
  console.log(speakWord + " " + names);
}
	window.hello = hello;
})(window);
