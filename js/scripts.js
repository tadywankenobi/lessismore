/*

One of the biggest overheads and error producers when using jQuery, 
is universally declaring functions which are only used on one template.
An example of this would be the accordian functions from the jQuery UI: 
http://jqueryui.com/accordion/

Generally, when the accordian is written, the code to implement the UI
component is written thus:

 $(function() {
    $( "#accordion" ).accordion();
  });

This is even described in the source code of the above example.

The *better* way to do this is the following:

 $(function() {
 	if ($( "#accordion" ).length){
    	$( "#accordion" ).accordion();
    }
  });

What the .length function does is creates an array of the items that
match the identifier (in this case, the id "accordian"). The if statement
checks if the length of the array is > 0, which will then continue inside
(i.e. if the accordian ID is found on the page, the plugin will be 
applied). If it is not found, nothing happens.

Using this method, you can greatly reduce the number of JS errors you will
encounter in your jQuery implementat and will improve the loading speed of 
your templates.

*/