##### 6/11/2019
# `get Array[@@species]`

## Syntax:
`Array[Symbol.species]`

## Return value:
The Array constructor

---

  >The `species` accessor property returns the default constructor for Array objects.  Subclass constructors may override it to change the constructor assignment.

---

```js
Array[Symbol.species]

class MyArray extends Array {
  static get [Symbol.species]() { return Array }
}
```

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `@@species` | Browser | Platform |
|---|---|---|
| <span style="color: grey">**?**</span> | **Chrome** | Desktop | 
| <span style="color: red">**X**</span> | **Edge** || 
| <span style="color: lightgreen">**48**</span> | **Firefox** || 
| <span style="color: grey">**?**</span> | **IE** || 
| <span style="color: grey">**?**</span> | **Opera** || 
| <span style="color: grey">**?**</span> | **Safari** || 
| <span style="color: grey">**?**</span> | **Android Webview** | Mobile | 
| <span style="color: grey">**?**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**48**</span> | **Firefox for Android** || 
| <span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: grey">**?**</span> | **Safari on iOS** || 
| <span style="color: grey">**?**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**6.5.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species)