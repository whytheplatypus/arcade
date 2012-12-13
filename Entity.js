"use strict";

/**
 * Entity
 * The Entity module.
 * @author 
 */
define(['./Catalyst/Catalyst'], function(Catalyst) {
  var Entity = function(){
  	this.type = 'entity';
  }

  Entity.prototype.move = function() {
  	console.log("needs to be overwritten");
  };
  

  return Entity;
});