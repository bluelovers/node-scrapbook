// JavaScript source code

//var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

require("jsdom").env("", function (err, window) {
	if (err) {
		console.error(err);
		return;
	}

	

	global.window = window;
	global.document = window.document;

	global.jQuery = require("jquery");

	//cross domain
	global.jQuery.support.cors = true;

	//global.jQuery.ajaxSettings.xhr = function () {
	//	return new XMLHttpRequest();
	//};

	//jQuery(window);

	require("./app.js");
});
