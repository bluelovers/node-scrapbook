// JavaScript source code
var jsdom = require("jsdom");

jsdom.env("", function (err, window)
{
	if (err)
	{
		console.error(err);
		return;
	}

	var document = window.document;

	jsdom.jQueryify(window, require.resolve("jquery"), function ()
	{
		global.window = window;
		global.document = window.document;

		global.jQuery = window.$;
		global.jQuery.support.cors = true;

		require("./app.js");
	});
});
