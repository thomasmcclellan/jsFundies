##### 10/21/2019
# `GeneratorFunction` Overview
## Syntax:
`new GeneratorFunction ([arg1 [, arg2 [, ...argN]], ] functionBody)`

* **arg1, arg2, ...argN**: names to be used by the `function` as formal argument names.  Each must be a `string` that corresponds to a valid `JS` identifier or a list of such `strings` separated with a comma; i.e. `'x'`, `'theValue'`, or `'a, b'` 
* **functionBody**: `string` containing the `JS` statements comprising the `function` definition

---

## Description:
The `GeneratorFunction` constructor create a new `generator function` (`function*() { }`) object.  In `JS`, every generator `function` is actually a `GeneratorFunction` object.

  > **NOTE**: `GeneratorFunction` is not a global `object`.  It could be obtained by evaluating the following code:
  > ```js
  > Object.getPrototypeOf(function*() { }).constructor
  > ```

`generator function` objects created with the `GeneratorFunction` constructor are parsed when the `function` is created. This is less efficient than declaring a generator `function` with a `function*` expression and calling it within your code, because such `functions` are parsed with the rest of the code.

  > All arguments passed to the `function` are treated as the names of the identifiers of the parameters in the `function` to be created, in the order in which they are passed.

  > Invoking the `GeneratorFunction` constructor as a `function` (without using the `new` operator) has the same effect as invoking it as a constructor.

---

## Properties:
**`GeneratorFunction.length`**
  > The `GeneratorFunction` constructor's length property whose value is 1.

**`GeneratorFunction.prototype`**
  > Allows the addition of properties to all `generator function` objects.

## `GeneratorFunction` Prototype Object: 
### Properties:
**`GeneratorFunction.constructor`**
  > The initial value is `GeneratorFunction`.

**`GeneratorFunction.prototype.prototype`**
  > The value is `%GeneratorFunction%`.

---

## `GeneratorFunction` Instances:
`GeneratorFunction` instances inherit methods and properties from `GeneratorFunction.prototype`.  As with all constructors, you can change the constructor's prototype object to make changes to all `GeneratorFunction` instances.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `GeneratorFunction` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**Yes**</span> | **Edge** || 
| <span style="color: lightgreen">**26**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: grey">**?**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**26**</span> | **Firefox for Android** || 
| <span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: grey">**?**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: grey">**?**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction)