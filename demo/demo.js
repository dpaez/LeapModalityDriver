/**
 * Modality Driver Demo App
 * This demoes a particular modality driver running connected to the platform
 */

var gyes = require( '../../gyes' );
var LeapDriver = require( '../' );

/**
 * demo locals
 *
 */
var Modality = gyes.Modality;
var socketURI = 'ws://0.0.0.0:26060';
var options ={
  'force new connection': true,
  'forceNew': true
};
var app_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJpYXQiOjEzOTc0MjAzMDJ9.YPN191cpYko9Q_-9AtrOCwGBT6FQU---EduJTJki4zM';
var client = new gyes( app_key, socketURI, options );
var modality = new Modality( 'leap', 'input', {} );
var leapDriver = new LeapDriver();

client.authenticate( app_key );
modality.use( leapDriver );
client.addModality( app_key, modality );
