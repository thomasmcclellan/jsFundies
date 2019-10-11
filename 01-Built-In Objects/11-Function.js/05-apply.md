##### 10/09/2019
# `Function.prototype.apply()`

```js
const numbers = [5, 6, 2, 3, 7]
const max = Math.max.apply(null, numbers)
const min = Math.min.apply(null, numbers)

console.log(max) // 7
console.log(min) // 2
```

---

## Syntax:
`function.apply(thisArg, [argsArray])`

* **thisArg**: The value of `this` provided for the call to `func`. *
* **argsArray** (Optional): An array-like `object`, specifying the argument with which `func` should be called, or `null` or `undefined` if no arguments should be provided to the `function`.  Starting with `ES5`, these arguments can be a generic array-like `object` instead of an `array`.

  > ***NOTE**: `this` may not be the actual value seen by the method:  if the method is a `function` in [non-strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) code, `null` and `undefined` will be replaced with the global `object`, and primitive values will be boxed.  this argument is not optional.

## Return value:
The result of calling the `function` with the specified `this` value and arguments.

---

## Description:
The `apply()` method calls a `function` with a given `this` value, and `arguments` provided as an `array` (or an array-like `object`).

  > **NOTE**: While the syntax of this `function` is almost identical of that of `call()`, the fundamental difference is that `call()` accepts an **argument list**, while `apply()` accepts a **single `array` of arguments**.

  > **NOTE**: When the first argument is `undefined` or `null`, a similar outcome can be achieved using the `array` [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

You can assign a different `this` `object` when calling an existing `function`. `this` refers to the current `object`, the calling `object`. With `apply()`, you can write a method once and then inherit it in another `object`, without having to rewrite the method for the new `object`.

`apply()` is very similar to `call()`, except for the type of arguments it supports. You use an arguments `array` instead of a list of arguments (parameters). With `apply()`, you can also use an `array` literal, for example, `func.apply(this, ['eat', 'bananas'])`, or an Array `object`, for example, `func.apply(this, new Array('eat', 'bananas'))`.

You can also use arguments for the `argsArray` parameter. `arguments` is a local variable of a `function`. It can be used for all unspecified arguments of the called `object`. Thus, you do not have to know the arguments of the called `object` when you use the apply method. You can use arguments to pass all the arguments to the called `object`. The called `object` is then responsible for handling the arguments.

Since `ES5` you can also use any kind of `object` which is array-like, so in practice, this means it's going to have a property length and integer properties in the range (`0..length-1`). As an example you can now use a `NodeList` or a custom `object` like `{ 'length': 2, '0': 'eat', '1': 'bananas' }`.

  > **NOTE**: most browsers, including Chrome 14 and IE 9, still do not accept array-like `object`s and will throw an exception.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 3rd Edition | 1999 | Standard | Initial definition. Implemented in `JS 1.3` |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `apply()` | `ES 5.1`: generic array-like `object` as `arguments` | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | <span style="color: lightgreen">**4**</span> | **Firefox** || 
| <span style="color: lightgreen">**5.5**</span> | <span style="color: lightgreen">**9**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: grey">**?**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: grey">**?**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: grey">**?**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)