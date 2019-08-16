##### 7/03/2019
# `DataView.prototype.buffer`

```js
const buffer = new ArrayBuffer(123)
const view = new DataView(buffer)

console.log(view.buffer.byteLength) // 123
```

---

## Syntax:
`dataview.buffer`

---

## Description:
The `buffer` accessor property represents the `ArrayBuffer` or `SharedArrayBuffer` referenced by the `DataView` at construction time.

The `buffer` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property.  The value is established when the `DataView` is constructed and cannot be changed.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `buffer` | `SharedArrayBuffer` accepted as `buffer` | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**9**</span> | <span style="color: lightgreen">**60**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | <span style="color: red">**X**</span> | **Edge** || 
| <span style="color: lightgreen">**15**</span> | <span style="color: lightgreen">**55**</span> | **Firefox** || 
| <span style="color: lightgreen">**10**</span> | <span style="color: grey">**?**</span> | **IE** || 
| <span style="color: lightgreen">**12.1**</span> | <span style="color: lightgreen">**47**</span> | **Opera** || 
| <span style="color: lightgreen">**5.1**</span> | <span style="color: grey">**?**</span> | **Safari** || 
| <span style="color: lightgreen">**4**</span> | <span style="color: lightgreen">**60**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**60**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**15**</span> | <span style="color: lightgreen">**55**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**12.1**</span> | <span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**4.2**</span> | <span style="color: grey">**?**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: grey">**?**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span> 

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/buffer)