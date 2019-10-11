##### 10/07/2019
# `Function.name`

```js
const func1 = function() { }
const object = { func2: function() { } }

console.log(func1.name) // func1
console.log(object.func2.name) // func2
```

---

## Description:
A `Function` object's read-only `name` property indicates the `function`'s name as specified when it was created, or 'anonymous' for `functions` create anonymously.

| Property Attributes of `Function.name` ||
|---|---|
| Writable | no |
| Enumerable | no |
| Configurable | yes * |

  > ***NOTE**: in non-standard, pre-`ES2015` implementations, the `configurable` attribute was also `false`.

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
| `name` | `Configurable` Attribute: `true` | Inferred Names on Anonymous `Functions` | Browser | Platform |
|---|---|---|---|---|
| <span style="color: lightgreen">**15**</span> |<span style="color: lightgreen">**43**</span> |<span style="color: lightgreen">**51**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**14**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> |<span style="color: lightgreen">**38**</span> |<span style="color: lightgreen">**53**</span> | **Firefox** || 
| <span style="color: red">**X**</span> |<span style="color: red">**X**</span> |<span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: lightgreen">**30**</span> |<span style="color: lightgreen">**38**</span> | **Opera** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: lightgreen">**43**</span> |<span style="color: lightgreen">**51**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: lightgreen">**43**</span> |<span style="color: lightgreen">**51**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> |<span style="color: lightgreen">**38**</span> |<span style="color: lightgreen">**53**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: lightgreen">**4.0**</span> |<span style="color: lightgreen">**5.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name)