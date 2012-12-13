"use strict";

/**
 * game
 * The Game module.
 * @author whytheplatypus
 *
 * I'll have this be the engine..ticks and such..eventually want it modular enough to move to a worker
 */
define(['./Catalyst/Catalyst'], function(Catalyst) {
  var Game = function(opts, start){
    var self = this;

  	this.entities = {};

  	this.score = 0;
    //this.credits = 0;
    //
    var self = this;
    require([opts.ctx], function(setup){
      self.ctx = setup(opts);
      start();
    });

    Catalyst(this);


    this.add = function(ent){
      self.entities[ent.uid] = ent;
      ent.on('die', function(event){
        self.remove(event);
      });
    }

    this.remove = function(ent){
      //var entity = this.entities[ent.uid];
      delete this.entities[ent.uid];
      //entity = null;
    }
  };

  Game.prototype.tick = function() {
  	for(var key in this.entities){
      //try{
      this.entities[key].move(this.entities);//i doubt eveyone has to check against everyone
        //can we paralize collision by having each entity have a worker checking if it's colliding with anyone
      /*} catch(e){
        console.log("chouldn't move entity");
        console.log(e);
        console.log(ents[i].children);
        console.log(ents);
      }*/
    }
  };

  //touch and mouse events

  /**
   * Start the game
   * @param  {Function} runFirst An optional function to run each frame
   */
  Game.prototype.run = function(runFirst) {
    var self = this;
    var frame = function(){
      runFirst();
      self.tick();
      requestAnimationFrame(frame);
    }
    frame();
   };

  return Game;
});