"use strict";


(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();
/**
 * canvas
 * The canvas module.
 * @author 
 */
define([], function() {
	var ctx = function(opts){
	  //should set up a context here import by name using require
	  var canvas = document.createElement('canvas');
	  
	  opts.container?opts.container.appendChild(canvas):document.body.appendChild(canvas);
		  //unique id?
		document.body.addEventListener('keyup', function(e){
	  	if(e.keyCode == 70){
	  		if (window.screenfull && screenfull.enabled) {
	        // We can use `this` since we want the clicked element
	        screenfull.toggle(canvas);
		    }
	  	}
	  }, false);

	  //set up full screen
	  function size(){
	    if ( opts.fullscreen ) {

	      canvas.height = window.innerHeight;
	      canvas.width = window.innerWidth;

	    } else {

	      canvas.height = opts.height;
	      canvas.width = opts.width;
	    }
	  };
	  size();
	  //set up context
	  var ctx = canvas.getContext('2d');
	  document.body.addEventListener('touchmove', function(event) {
		  event.preventDefault();
		}, false); 
		document.body.addEventListener('touch', function(event) {
		  event.preventDefault();
		}, false); 
	  //set up touch and click events
	  ctx.onclick = function(fun){
	  	canvas.addEventListener('click', fun, false);
	  };
	  ctx.ontap = function(fun){
	    ctx.click(fun);
	    //touchdown
	    //touchup nomove
	  }
	  ctx.ontouchstart = function(fun){
	  	/*canvas.addEventListener('touch', function(event){
	  		for(var i in event.targetTouches){
		  		var touch = event.targetTouches[i];
		  		event.x = touch.pageX;
		  		event.y = touch.pageY;
		  		fun(event);
	  		}
	  	}, false);*/
			canvas.addEventListener('touchstart', fun, false);
	  }
	  ctx.onmousedown = function(fun){
	  	canvas.addEventListener('mousedown', fun, false);
	  }
	  ctx.ontouchmove = function(fun){
	  	/*canvas.addEventListener('touchmove', function(event){
	  		//hmm how do i specifiy touch specific or just acting the same on all touches?
	  		for(var i in event.changedTouches){
		  		var touch = event.changedTouches[i];
		  		event.x = touch.pageX;
		  		event.y = touch.pageY;
		  		fun(event);
	  		}
	  	}, false);*/
			canvas.addEventListener('touchmove', fun, false);
	  }
	  ctx.onmousemove = function(fun){
	  	canvas.addEventListener('mousemove', fun, false);
	  }
	  ctx.ontouchend = function(fun){
	  	canvas.addEventListener('touchend', fun, false);
	  }
	  ctx.onmouseup = function(fun){
	  	canvas.addEventListener('mouseup', fun, false);
	  }
	  ctx.ondrag = function(fun){
	  	var dragging = false;
	  	canvas.addEventListener('mousedown', function(e){
	  		dragging = true;
	  		//fun(e);
	  	}, false);
	  	canvas.addEventListener('mousemove', function(e){
	  		if(dragging){
	  			fun(e);
	  		}
	  	}, false);
	  	canvas.addEventListener('mouseup', function(e){
	  		dragging = false;
	  	}, false);
	  }
	  //set up rotation events
	  window.addEventListener('resize', size, false);
	  window.onorientationchange = function(){
	  	console.log('rotate');
	  	size();
	  }
	  return ctx;
  }
  return ctx;
});