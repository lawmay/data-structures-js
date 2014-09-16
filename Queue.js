/*
 * Queue
 * 
 * 
 *
 */


var Queue = function() {
  this.storage = [];
};

Queue.prototype.enqueue = function(string) {
  this.storage.push(string);
};

Queue.prototype.dequeue = function() {
  return this.storage.unshift();
};

Queue.prototype.size = function() {
  return this.storage.size();
};

