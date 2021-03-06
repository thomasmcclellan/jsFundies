##### 6/08/2020
# `Object.prototype.toLocaleString()`

```js
const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0 , 0)),
      number1 = 123456.789;

console.log(date1.toLocaleString('ar-EG')); // ٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص
console.log(number1.toLocaleString('de-DE')); // 123.456,789
```

---

## Syntax:
`obj.toLocaleString()`

## Return value:
A `string` representing the `object`.

---

## Description:
The `Object.prototype.toLocaleString()` method returns a `string` representing the `object`. This method is meant to be overridden by derived `objects` for locale-specific purposes.

`Object`'s `toLocaleString` returns the result of calling `toString()`.

This `function` is provided to give `objects` a generic `toLocaleString` method, even though not all may use it.  

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `toLocaleString()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**1**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**5.5**</span> | **IE** || 
| <span style="color: lightgreen">**4**</span> | **Opera** || 
| <span style="color: lightgreen">**1**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**10.1**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**1**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString)