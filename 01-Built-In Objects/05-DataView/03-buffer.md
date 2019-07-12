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
### `buffer`:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

### `SharedArrayBuffer` accepted as `buffer`:
<span style="color: lightgreen">**Full Support**: All others</span>  
<span style="color: lightblue">**Compatibility Unknown**:  
  &nbsp; &nbsp; &nbsp; IE  
  &nbsp; &nbsp; &nbsp; Safari  
  &nbsp; &nbsp; &nbsp; Edge Mobile  
  &nbsp; &nbsp; &nbsp; Opera for Android  
  &nbsp; &nbsp; &nbsp; Safari on iOS  
  &nbsp; &nbsp; &nbsp; Node.js  
</span>
<span style="color: red">**No Support**: Edge</span>  

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/buffer)