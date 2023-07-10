/*
The new keyword is used with a function constructor to
generate an instance of a pseudo-class using the constructor
*/
function Device(kind) {
  this.kind = kind;
}
var product = new Device("music player");
var product = Device("music player");
var product = Device.call("music player");
