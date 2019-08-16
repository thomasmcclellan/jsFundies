##### 6/18/2019
# `ArrayBuffer.isView()`

```js
const buffer = new ArrayBuffer(16)

console.log(ArrayBuffer.isView(new Int32Array())) // true
```

---

## Syntax:
`ArrayBuffer.isView(arg)`

* **arg**: argument to be checked 

## Return value:
`true` if the given argument is one of the `ArrayBuffer` views; otherwise, `false`.

---

```js
console.log(ArrayBuffer.isView()) // false
console.log(ArrayBuffer.isView([])) // false
console.log(ArrayBuffer.isView({})) // false
console.log(ArrayBuffer.isView(null)) // false
console.log(ArrayBuffer.isView(undefined)) // false
console.log(ArrayBuffer.isView(new ArrayBuffer(10))) // false
console.log(ArrayBuffer.isView(new Uint8Array())) // true
console.log(ArrayBuffer.isView(new Float32Array())) // true
console.log(ArrayBuffer.isView(new Int8Array(10).subarray(0, 3))) // true

const arrBuff = new ArrayBuffer(2)
const dv = new DataView(arrBuff)
console.log(ArrayBuffer.isView(dv)) // true
```

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition in an ECMA standard |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `isView()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**29**</span> | **Firefox** || 
| <span style="color: lightgreen">**11**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**29**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView)