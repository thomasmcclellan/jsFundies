##### 1/03/2020
# `Map.prototype[@@toStringTag]`

```js
const map1 = Object.prototype.toString.call(new Map())

console.log(map1) // [object Map]
```

---

## Syntax:
`Map[symbol.toStringTag]`

---

## Description:
The `Map.prototype[@@toStringTag]` property has an initial value of `Map`.

| Property attributes of `Map.prototype[@@toStringTag]` ||
|---|---|
| Writable | no |
| Enumerable | no |
| Configurable | no |

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `@@toStringTag` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**44**</span> | **Chrome** | Desktop | 
| <span style="color: red">**X**</span> | **Edge** || 
| <span style="color: lightgreen">**51**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: red">**X**</span> | **Opera** || 
| <span style="color: red">**X**</span> | **Safari** || 
| <span style="color: lightgreen">**44**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**44**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**51**</span> | **Firefox for Android** || 
| <span style="color: red">**X**</span> | **Opera for Android** || 
| <span style="color: red">**X**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**4.0**</span> | **Samsung Internet** || 
| <span style="color: red">**X**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@toStringTag)