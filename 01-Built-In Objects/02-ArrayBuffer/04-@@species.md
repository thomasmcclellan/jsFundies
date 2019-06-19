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
<span style="color: lightgreen">**Full Support**:  
  &nbsp; &nbsp; &nbsp; Edge  
  &nbsp; &nbsp; &nbsp; Firefox  
  &nbsp; &nbsp; &nbsp; Firefox for Android  
  &nbsp; &nbsp; &nbsp; Node.js  
</span>
<span style="color: lightblue">**Compatibility Unknown**: All others</span>  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species)