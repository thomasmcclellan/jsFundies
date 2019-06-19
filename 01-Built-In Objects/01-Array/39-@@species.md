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
<span style="color: lightgreen">**Full Support**:  
  &nbsp; &nbsp; &nbsp; Firefox  
  &nbsp; &nbsp; &nbsp; Firefox for Android  
  &nbsp; &nbsp; &nbsp; Node.js  
</span>
<span style="color: lightblue">**Compatibility Unknown**: All others</span>  
<span style="color: red">**No Support**: Edge</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species)