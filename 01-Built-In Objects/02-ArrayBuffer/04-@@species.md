##### 6/17/2019
# `get ArrayBuffer[@@species]`

## Syntax:
`ArrayBuffer[Symbol.species]`

---

## Description:
The `species` accessor property returns the default constructor for `ArrayBuffer` objects.  Subclass constructors may over-ride it to change the constructor assignment.

---

  >The `species` property returns the default constructor function, which is the `ArrayBuffer` constructor for `ArrayBuffer` objects:

```js
ArrayBuffer[Symbol.species] // ArrayBuffer()
```

  >In a derived collection object (e.g. your custom array buffer `MyArrayBuffer`), the `MyArrayBuffer` species is the `MyArrayBuffer` constructor.  However, you might want to overwrite this, in order to return parent `ArrayBuffer` objects in your derived class methods:

```js
class MyArrayBuffer extends ArrayBuffer {
  // Overwrite MyArrayBuffer species to the parent ArrayBuffer constructor
  static get [Symbol.species]() { return ArrayBuffer }
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
| <span style="color: lightgreen">**13**</span> | **Edge** || 
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
| <span style="color: lightgreen">**6.5.0***</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

  > *From version 6.0.0: this feature is behind the `--harmony` runtime flag.

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species)