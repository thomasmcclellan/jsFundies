##### 10/11/2019
# `Function.prototype.call()`

```js
function Product(name, price) {
  this.name = name
  this.price = price
}

function Food(name, price) {
  Product.call(this, name, price)
  this.category = 'food'
}

console.log(new Food('cheese', 5).name) // cheese
```

---

## Syntax:
`function.call([thisArg [, arg1 [, arg2 [, ...argN]]]])`

* **thisArg** (Optional): value of `this` provided for the call to a `function`. * 
* **arg1, arg2, ...argN** (Optional): 

  > ***NOTE**: this may not be the actual value seen by the method: if the method is a `function` in non-strict mode, `null` and `undefined` will be replaced with the global `object` and primitive values will be converted to `objects`.

## Return value:
The result of calling the `function` with the specified `this` value and arguments.

---

## Description:
The `call()` method calls a `function` with a given `this` value and arguments provided individually.

  > **NOTE**: While the syntax of this `function` is almost identical to that of `apply()`, the fundamental difference is that `call()` accepts an _argument list_, while `apply()` accepts a _single array of arguments_.

The `call()` allows for a `function`/method belonging to one `object` to be assigned and called for a different `object`.

`call()` provides a new value of `this` to the `function`/method. With `call()`, you can write a method once and then inherit it in another `object`, without having to rewrite the method for the new `object`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition. Implemented in `JS 1.3` |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `call()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)