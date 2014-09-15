/*
 * Stack
 * 
 * 
 *
 */


var Stack = function() {
  this.results = [];
};

Stack.prototype.push = function(string) {
  this.results.push(string);
};

Stack.prototype.pop = function() {
  return this.results.pop();
};

Stack.prototype.size = function() {
  return this.results.length;
};
