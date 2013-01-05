"use strict";

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register arcade.
        define('Guy', ['./Entity'], factory);
    } else {
        // Browser globals
        root.Guy = factory(root.Entity);
    }
}(window,
/**
 * Guy
 * The Guy module.
 * @author whytheplatypus
 */
function(Entity) {
	/**
	 * Guy
	 *
	 * @constructor
	 */
  var Guy = function(){
  	this.type = 'guy';
  };

  Guy.prototype = new Entity();

  return Guy;
});