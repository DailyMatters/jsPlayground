/* CLOSURES */

/* Based on http://web.archive.org/web/20080209105120/http://blog.morrisjohns.com/javascript_closures_for_dummies */

/*
 * A closure is the local variables for a function - kept alive after the function has returned, or
 * a closure is a stack-frame which is not deallocated when the function returns. 
 * (as if a 'stack-frame' were malloc'ed instead of being on the stack!)
 */
 
/* Example of a closure 
 * The following code returns a reference to a function:
 */
 
function sayHello2(name) {
  var text = 'Hello ' + name; // local variable
  var sayAlert = function() { alert(text); }
  return sayAlert;
}

/*
 * var sayHello = sayHello2("Jane");
 * sayHello(); 
 */
 
 /*
  * The above code has a closure because the anonymous function function() { alert(text); } is declared inside another function, sayHello2() in this example. 
  * In JavaScript, if you use the function keyword inside another function, you are creating a closure.
  *
  * In JavaScript, if you declare a function within another function, then the local variables can remain accessible after returning from the function you     * called. 
  */
  
/*
 * Another example
 */
 
function say667() {
  // Local variable that ends up within closure
  var num = 666;
  var sayAlert = function() { alert(num); }
  num++;
  return sayAlert;
}

/*
 * var sayNumber = say667();
 * sayNumber();
 * alert( sayNumber.toString() );  //This will show you the code stored in the variable
 */
 
/*
 * Yet Another example
 */ 
 
function setupSomeGlobals() {
  // Local variable that ends up within closure
  var num = 666;
  // Store some references to functions as global variables
  gAlertNumber = function() { alert(num); }
  gIncreaseNumber = function() { num++; }
  gSetNumber = function(x) { num = x; }
}

/* setupSomeGlobals(); */

/*
 * The three functions have shared access to the same closure - the local variables of setupSomeGlobals() when the three functions were defined.
 *
 * Note that in the above example, if you click setupSomeGlobals() again, then a new closure (stack-frame!) is created. The old gAlertNumber, 
 * gIncreaseNumber, gSetNumber variables are overwritten with new functions that have the new closure. (In JavaScript, whenever you declare a function inside * another function, the inside function(s) is/are recreated again each time the outside function is called.)
 */