##### 10/10/2019
# `Function.prototype.bind()`

```js
const module1 = {
  x: 42,
  getX: () => this.x
}
const unboundGetX = module1.getX
const boundGetX = unboundGetX.bind(module1)

console.log(unboundGetX()) // undefined: The function gets invoked at the global scope
console.log(boundGetX()) // 42
```

---

## Syntax:
`function.bind(thisArg [, arg1 [, arg2 [, ...argN]]])`

* **thisArg**: value to be passed as the `this` parameter to the target `function` when the bound `function` is called. The value is ignored if the bound `function` is constructed using the `new` operator. When using bind to create a `function` (supplied as a callback) inside a `setTimeout`, any primitive value passed as `thisArg` is converted to `object`. If no arguments are provided to `bind()`, the `this` of the executing scope is treated as the `thisArg` for the new `function`.
* **arg1, arg2, ...argN** (Optional): arguments to prepend to arguments provided to the bound `function` when invoking the target `function`.

## Return value:
A copy of the given `function` with the specified `this` value and initial argument.

---

## Description:
The `bind()` method create a new `function` that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new `function` is called.

The `bind()` `function` creates a new bound `function`, which is an exotic `function` object (a term from `ECMAScript 2015`) that wraps the original function `object`. Calling the bound `function` generally results in the execution of its wrapped `function`.

A bound `function` has the following internal properties:
  * **[[BoundTargetFunction]]** - the wrapped function `object`;
  * **[[BoundThis]]** - the value that is always passed as this value when calling the wrapped `function`.
  * **[[BoundArguments]]** - a list of values whose elements are used as the first arguments to any call to the wrapped `function`.
  * **[[Call]]** - executes code associated with this `object`. Invoked via a `function` call expression. The arguments to the internal method are a `this` value and a list containing the arguments passed to the `function` by a call expression.

When a bound `function` is called, it calls internal method [[Call]] on [[BoundTargetFunction]], with following arguments `Call(boundThis, args)`. Where, `boundThis` is [[BoundThis]], `args` is [[BoundArguments]] followed by the arguments passed by the `function` call.

A bound `function` may also be constructed using the `new` operator: doing so acts as though the target `function` had instead been constructed. The provided this value is ignored, while prepended arguments are provided to the emulated `function`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 5.1 | 2011 | Standard | Initial definition. Implemented in `JS 1.8.5` |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `bind()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**7**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**9**</span> | **IE** || 
| <span style="color: lightgreen">**11.6**</span> | **Opera** || 
| <span style="color: lightgreen">**5.1**</span> | **Safari** || 
| <span style="color: lightgreen">**4**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**12**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**6**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)