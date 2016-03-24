// JavaScript source code
var request = require( 'superagent' );

request
.get( 'https://api.guildwars2.com/v2/worlds' )
.end( function ( err, res )
{
	console.log( res.body );
} );