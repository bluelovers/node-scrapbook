// JavaScript source code
var gw2spidy = require( 'gw2spidy' );

gw2spidy.types.get( function ( err, response )
{
	if ( err )
	{
		console.log( 'error => ', err );
	} else
	{
		console.log( response.results );
	}
} );
