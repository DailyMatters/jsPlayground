/* Object Oriented Javascript */

// Based on http://code.tutsplus.com/tutorials/the-basics-of-object-oriented-javascript--net-7670

/* Constructor version */

function Person(){
    this.name = 'Alberto';
    this.sayName = function(){
        alert('I am ' + this.iAm);
    };
};

/* Literal version */

var Person = {
    name : 'Alberto',
    sayName : function(){
        alert('I am ' + this.iAm);
    }
}

/* Objects defined with a constructor lets you have multiple instances of that object. Object literals are basically singletons with variables/methods that are 
all public. Let's focus on the constructor version. */

/* Just like any JavaScript function, we can use arguments with our constructor function. */

function Person(identification){
    this.name = identification;
    this.sayNameLanguage = function(language){
        alert('I am ' + this.name + ' of the ' + language + ' language.');
    };
};