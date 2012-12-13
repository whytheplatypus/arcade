/*! license here */

/*
this needs to work for nodejs too
*/
/*
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register arcade.
        define('arcade', ['underscore'], factory);
    } else {
        // Browser globals
        root.arcade = factory(root._);
    }
}(window, function (_) {

    return arcade;
}));*/

(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

define(['./Game', './Guy', './Enemy', './Entity', './Catalyst/Catalyst'], function(Game, Guy, Enemy, Entity, Catalyst){
	var arcade = {
        Game: Game,
        Guy: Guy,
        Enemy: Enemy,
        Entity: Entity,
        Catalyst: Catalyst
    };

	return arcade;
});