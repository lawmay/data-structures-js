/*
 * Stack
 * 
 * 
 *
 */


var Stack = function() {
  this.storage = [];
};

Stack.prototype.push = function(string) {
  this.storage.push(string);
};

Stack.prototype.pop = function() {
  return this.storage.pop();
};

Stack.prototype.size = function() {
  return this.storage.length;
};
