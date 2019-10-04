##### 10/03/2019
# Function Overview

```js
const sum = new Function('a', 'b', 'return a + b')

console.log(sum(2, 6)) // 8
```

  > Every `JS` `function` is actually a `Function` object.  This can be seen with the code ``` (function() { }).constructor === Function ``` which returns `true`.

---

## Syntax:
`new Function([arg1 [, arg2 [, ...argN]],] functionBody)`

* **arg1, arg2, ...argN**: names to be used by the `function` as formal argument names.  Each must be a `string` that corresponds to a valid `JS` identifier or a list of such `string` separated with a comma; for example `'x'`, `'theValue'`, or `'a,b'`. 
* **functionBody**: `string` containing the `JS` statements comprising the `function` definition.

---

## Description:
The `Function` **constructor** creates a new `Function` **object**.  Calling the constructor directly can create `functions` dynamically, but suffers from security and similar (but far less significant) performance issues to [eval](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval).  However, unlike eval, the `Function` constructor creates `functions` which execute in the **global scope** only.

`Function` objects created with the `Function` constructor are parsed when the unction is created.  This is less efficient than declaring a `function` with a _function expression_ or _function statement_ and calling it within your code because such functions are parsed with the rest of the code.

All arguments passed to the `function` are treated as the names of the identifiers of the parameters in the `function` to be created, in the order in which they are passed.  Omitting an argument will result in the value of that parameter being `undefined`.

  > Invoking the `Function` constructor as a function (without using the `new` operator) has the same effect as invoking it as a constructor.

---

## Properties and Methods of `Function`:
The global `Function` object has no methods or properties of its own.  However, since it is a `function` itself, it does inherit some methods and properties through the `prototype` chain from `Function.prototype`.

## Function Prototype Object:
### Properties:
**`Function.prototype.length`**
  > Specifies the number of arguments expected by the `function`.

**`Function.prototype.name`**
  > The name of the `function`.

**`Function.prototype.constructor`**
  > Specifies the `function` that creates an object's prototype.

### Methods: 
**`Function.prototype.apply()`**
  > Calls a `function` and sets its `this` to the provided value, arguments can be passed as an `Array` object.

**`Function.prototype.bind()`**
  > Creates a new `function` which, when called, has its `this` set to the provided value, with a given sequence of arguments preceding any provided when the new `function` was called.

**`Function.prototype.call()`**
  > Calls (executes) a `function` and sets it `this` to the provided value, arguments can be passed as they are.

---

## Function Instances:
`Function` instances inherit methods and properties from `Function.prototype`.  As with all constructors, you can change the constructor's prototype object to make changes to all `Function` instances.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition. Implemented in `JS 1.0` |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `Function` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**Yes**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)