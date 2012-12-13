"use strict";

/**
 * Enemy
 * The Enemy module.
 * @author whytheplatypus
 */
define(['./Entity'], function(Entity) {
  var Enemy = function(){
  	this.type = 'enemy';
  };

  Enemy.prototype = new Entity();

  return Enemy;
});