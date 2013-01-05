"use strict";

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register arcade.
        define('Entity', ['./Catalyst/Catalyst'], factory);
    } else {
        // Browser globals
        root.Entity = factory(root.Catalyst);
    }
}(window,
/**
 * Entity
 * The Entity module.
 * @author 
 */
function(Catalyst) {
  var Entity = function(){
  	this.type = 'entity';
  }

  Entity.prototype.move = function() {
  	console.log("needs to be overwritten");
  };
  

  return Entity;
});