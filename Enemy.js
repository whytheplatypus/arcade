"use strict";


(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register arcade.
        define('Enemy', ['./Entity'], factory);
    } else {
        // Browser globals
        root.Enemy = factory(root.Entity);
    }
}(window,
/**
 * Enemy
 * The Enemy module.
 * @author whytheplatypus
 */
function(Entity) {
  var Enemy = function(){
  	this.type = 'enemy';
  };

  Enemy.prototype = new Entity();

  return Enemy;
});