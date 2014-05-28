/**
 * This is a proof-of-api :D
 *
 */

/**
 * Module dependencies
 */

var util = require( 'util' );
var Leap = require( 'leapjs' );
var LeapSimpleGestures = require( 'LeapSimpleGestures' );
var ModalityDriverChannel = require( '../gyes/' ).ModalityDriver;

/**
 * Module exports
 */

module.exports = LeapModalityDriver;

/**
 * Module local variables
 */

function LeapModalityDriver( gestures ){
  if ( 'undefined' === typeof gestures ){
    gestures = [ 'swipe' ];
  }

  this.controllerOptions = {enableGestures: true};

  this.id = 'LEAPGESTURES';

  try{
    this.scanner = new LeapSimpleGestures( gestures );
  }catch(e){
    throw new Error( e );
  }


}

util.inherits( LeapModalityDriver, ModalityDriverChannel );

LeapModalityDriver.prototype.start = function( controllerOptions ){

  if ( 'undefined' === typeof controllerOptions ){
    controllerOptions = this.controllerOptions;
  }

  var self = this;

  Leap.loop(controllerOptions, function( frame ){

    self.scanner.recognize(frame, function(){
      // if using modalityDriver with a signal based api.
      //self.recognized.dispatch( {'gesture':'swipe'} );
      self.fire( 'recognized', {'gesture':'swipe'} );
      console.log( 'SWIPE!!!!' );
    });

    // if this modalityDriver want it to handle output...aka synthetizer
    // modalityDriver.synthetized.add( myCallbackFn );

  });
};
