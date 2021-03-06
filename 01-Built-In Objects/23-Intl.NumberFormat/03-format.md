##### 12/02/2019
# `Intl.NumberFormat.prototype.format()`

```js
const amount = 654321.987
const options1 = { style: 'currency', currency: 'RUB' }
const options2 = { style: 'currency', currency: 'USD' }
const numberFormat1 = new Intl.NumberFormat('ru-RU', options1)
const numberFormat2 = new Intl.NumberFormat('en-US', options2)

console.log(numberFormat1.format(amount)) // 654 321,99 ₽
console.log(numberFormat2.format(amount)) // $654,321.99
```

---

## Syntax:
`numberFormat.format(number)`

* **number**: `number` (or BigInt) to format

---

## Description:
The `Intl.NumberFormat.prototype.format()` method formats a number according to the locale and formatting options of this `NumberFormat` `object`.

the `format()` getter `function` formats a `number` into a `string` according to the locale and formatting options of this `NumberFormat` `object`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 1.0 (`ECMA-402`) | 2012 | Standard | Initial definition |
| ECMAScript Internationalization API 2.0 (`ECMA-402`) | 2015 | Standard |  |
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft |  |

---

## Browser Compatibility:
| `` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**24**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**29**</span> | **Firefox** || 
| <span style="color: lightgreen">**11**</span> | **IE** || 
| <span style="color: lightgreen">**15**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**26**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**56**</span> | **Firefox for Android** || 
| <span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.5**</span> | **Samsung Internet** || 
| <span style="color: grey">**?**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/format)