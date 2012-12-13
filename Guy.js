"use strict";

/**
 * Guy
 * The Guy module.
 * @author whytheplatypus
 */
define(['./Entity'], function(Entity) {
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