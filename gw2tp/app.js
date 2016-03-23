console.log('Hello world');

module.exports = function (window, $) 
{ 

}

var $ = jQuery;

console.log(jQuery.fn.jquery);

console.log($.fn.jquery);


$("body").append('<div class="testing">Hello World, It works</div>');



console.log($(".testing").text());


$.get("https://api.jquery.com/jQuery.get/", function (data) {
    $(".testing").html(data);
    console.log($(".testing").text());
});