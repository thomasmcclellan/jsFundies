##### 10/14/2019
# `Function.prototype.toString()`

```js
function sum(a, b) {
  return a + b
}

console.log(sum.toString()) // "function sum(a, b) { return a + b }"
console.log(Math.abs.toString()) // "function abs() { [native code] }"
```

---

## Syntax:
`function.toString()`

## Return value:
A `string` representing the source code of the `function`.

---

## Description:
The `toString()` method returns a `string` representing the source code of the `function`.

The `function` object overrides the `toString()` method inherited from `Object`; it does not inherit `Object.prototype.toString()`.  For user-defined `Function` objects, the `toString()` method returns a `string` containing the source text segment which was used to define the `function`.

  > `JS` calls `toString()` automatically when a `Function` is to be represented as a text value; e.g. when a `function` is concatenated with a `string`.

  > The `toString()` method will throw a `TypeError` exception (`"Function.prototype.toString called on incompatible object"`), if its `this` value object is not a `Function` object.

---

## Examples:

| `Function` | `Function.prototype.toString()` result |
|---|---|
| `function f() {}` | `"function f() {}"` |
| `class A { a() {} }` | `"class A { a() {} }"` |
| `function* g() {}` | `"function* g() {}"` |
| `a => a` | `"a => a"` |
| `({ a() {} }.a)` | `"a() {}"` |
| `({ *a() {} }.a)` | `"*a() {}"` |
| `({ [0]() {} }[0])` | `"[0]() {}"` |
| `Object.getOwnPropertyDescriptor({ get a() {} }, 'a').get` | `"get a() {}"` |
| `Object.getOwnPropertyDescriptor({ set a(x) {} }, 'a').get` | `"set a(x) {}"` |
| `Function.prototype.toString` | `"function toString() { [native code] }"` |
| `(function f() {}.bind(0))` | `"function () { [native code] }"` |
| `Function('a', 'b')` | `"function anonymous(a\n) { \nb\n }"` |

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition. Implemented in `JS 1.1` |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Added more specific requirements for the `string` representation |
| ECMAScript 2016 | 2016 | Standard |  |
| `Function.prototype.toString()` revisions proposal | 2018 | Draft | Standardizes native function `string`, line endings |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `toString()` | Support of [`toString()` revision](http://tc39.es/Function-prototype-toString-revision/) | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**Yes**</span> |<span style="color: red">**X**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> |<span style="color: red">**X**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> |<span style="color: lightgreen">**54**</span> | **Firefox** || 
| <span style="color: lightgreen">**5**</span> |<span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: red">**X**</span> | **Opera** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: red">**X**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: red">**X**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: red">**X**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> |<span style="color: lightgreen">**54**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: red">**X**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: red">**X**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: red">**X**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: red">**X**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)