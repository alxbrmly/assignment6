/* A javascript library is made of code.
When you include the library in your code, you get access to to the functions contained in the library. It is
easier to use a javascript library because other people have solved web problems for you already. Another 
advantage to using the aforementioned is that you can have a smaller code-base, which means less code problems.
Some examples of javascript libraries are Jquery, Prototype, and MooTools. */


/* How to include a javascript library:
You can create a javascript file with all the functions you want to use and link it in the html file using the <script> tag. 
Or you could use an existig library like jQuery and link it your html file in a script tag.
A javascript library is not a javascript framework, the former is a tool, and the latter is a structure. A library is used to solve 
a problem within an application and a framework is structure around which a application is built. */

/* The SINGLE RESPONSIBILITY PRINCIPLE prescribes that code be divided into modules and each module has one, singular 
responsibility. Each module should be independent of the other module. */


/* jQuery is a Javascript Library that contains a collection of functions used to work with the DOM.
There are 2 ways to include the jQuery library:
1. Get a link to the latest version on the Google Developer CDN index (https://developers.google.com/speed/libraries/),
include the url of latest version that google provides between script tags 
2. Or you can download the library and include a link to the library in a script tag in your html file. */

/* DOM stands for document object model, when a page is loaded in a web browser such as Chrome or FireFox,
the browser creates a documet object model of the page which is a dislay or interpretation of of current
state of a page. */


/* jQuery allows you to select css elements in an html file and modify them, for example:
$ ('body')
In the above, the body element of a html file has been selected. The same can be done for other elements
including classes and IDs, for example $('.wrapper') or $('#container').

In jQuery the '$' function allows you to take a string that represents a css selector and return an array of 
elements that match that selector, for example:
function $(p) {
 var result;
 return result;
} 
In the above example, the function will search the page for the element 'p' and return results that match 'p'.

JQuery has many built-in ways to manipulate the elements of a page, for example:

Show $('body').show(); - will show a 
Hide $('body').hide(); - will hide a the element selected, in this case 'body'
Fadeout $('h1').fadeOut(); - will change the opacity of an element until it no longer appears, in this case 'h1'
Fadein $('h1').fadeIn(); - will change the opacity of an element to make it appear
Slideup $('h1').slideUp(); - will make the selected element slide into view
Slidedown $('h1').slideDown(); - will make the selectd element slide out of view
Animate $('.my-element').animate( { opacity: 0.25, width: "70%"} , 2000 ); - will make selected element chane opacity
by a percent during a period of 2 seconds */

/* EVENT LISTENING is a way to monitor the DOM for browser events. An example of this would be a function that is triggered by 
a click:

$('.my-element').click(function() {
 console.log('Mouse click detected.');
}); */

/* A NAMED FUNCTION is a function that has a name that you can use to call the function.
function shoutHello(shoutString) {
	 alert('Hello there ' + shoutString + '!');
}

If you input shoutHello ('class') you would get a  return of 'Hello there class!' */

/* ANONYMOUS FUNCTIONS have no name. Like below:
function(shoutString) {
	alert('Hello there ' + shoutString + '!');
}

To call your anonymous function you need to assign the function to a variable like below:
var shoutHello = function(shoutString) {
	alert('Hello there ' + shoutString + '!');
}
Then you can call it by using shoutHello('class').

OR

You can pass your anonymous function as an argument to another function, also known as a callback. 
A callback is a function that is called within another function.
It is called when the parent function finishes executing. The parent calls back with the child function.

This is a little confusing, it sounds like nesting functions.
I am still unsure as to why wouldn't someone just name a function to begin with or why would they
go through the trouble of creating a callback if they could assign the function to a variable.*/


/* API Docs
API stands for application programming interface, API docs for a javascript library is like a catalog of functions
with explanations of the functions of the functions that are included in a javascript library. */
