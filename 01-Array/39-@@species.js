//* 6/11/2019

/*
Syntax:
Array[Symbol.species]

Return value:
The Array constructor
*/

//* The --species-- accessor property returns the default constructor for Array objects.  Subclass constructors may override it to change the constructor assignment.

Array[Symbol.species]

class MyArray extends Array {
  static get [Symbol.species]() { return Array }
}

/*
Browser Compatibility:
*Full Support: 
*  Firefox
*  Firefox for Android
*  Node.js
?Compatibility Unknown: All others
!No Support: Edge
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species