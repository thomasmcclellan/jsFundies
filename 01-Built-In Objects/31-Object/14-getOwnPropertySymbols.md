##### 5/21/2020
# `Object.getOwnPropertySymbols()`

```js
const object1 = {},
      a = Symbol('a'),
      b = Symbol.for('b');

object1[a] = 'localSymbol';
object1[b] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object1);

console.log(objectSymbols.length); // 2
```

---

## Syntax:
`Object.getOwnPropertySymbols(obj)`

* **obj**: The `object` whose `symbol` properties are to be returned 

## Return value:
An `array` of all symbol properties found directly upon the given `object`.

---

## Description:
The `Object.getOwnPropertySymbols()` method returns an `array` of all `symbol` properties found directly upon a given `object`.

Similar to `Object.getOwnPropertyNames()`, you can get all symbol properties of a given `object` as an `array` of `symbols`. Note that `Object.getOwnPropertyNames()` itself does not contain the `symbol` properties of an `object` and only the `string` properties.

As all `objects` have no own `symbol` properties initially, `Object.getOwnPropertySymbols()` returns an empty `array` unless you have set `symbol` properties on your `object`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `getOwnPropertySymbols()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**38**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**36**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**25**</span> | **Opera** || 
| <span style="color: lightgreen">**9**</span> | **Safari** || 
| <span style="color: lightgreen">**38**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**38**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**36**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**25**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**9**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**3.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)