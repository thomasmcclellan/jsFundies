##### 5/15/2020
# `Object.fromEntries()`

```js
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]),
      obj = Object.fromEntries(entries);

console.log(obj); // { foo: 'bar', baz: 42 }
```

---

## Syntax:
`Object.fromEntries(iterable)`

* **iterable**: An iterable such as `Array` or `Map`, or other `objects` implementing the [iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)

## Return value:
A new `object` whose properties are given by the entries of the iterable.

---

## Description:
The `Object.fromEntries()` method transforms a list of key-value pairs into an `object`.

The `Object.fromEntries()` method takes a list of key-value pairs and returns a new `object` whose properties are given by those entries. The iterable argument is expected to be an `object` that implements an `@@iterator` method, that returns an iterator `object`, that produces a two element `array`-like `object`, whose first element is a value that will be used as a property key, and whose second element is the value to associate with that property key.

`Object.fromEntries()` performs the reverse of `Object.entries()`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `fromEntries()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**73**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**79**</span> | **Edge** || 
| <span style="color: lightgreen">**63**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**60**</span> | **Opera** || 
| <span style="color: lightgreen">**12.1**</span> | **Safari** || 
| <span style="color: lightgreen">**73**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**73**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**63**</span> | **Firefox for Android** || 
| <span style="color: red">**X**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**12.2**</span> | **Safari on iOS** || 
| <span style="color: red">**X**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**12.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)