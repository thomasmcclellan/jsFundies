##### 4/23/2019
# `Array.isArray()`

```js
console.log(Array.isArray([1, 2, 3])) // true
console.log(Array.isArray({ foo: 123 })) // false
console.log(Array.isArray('foobar')) // false
console.log(Array.isArray(undefined)) //false
```

---

## Syntax:
`Array.isArray(value)`

* **value**: the value to be checked

## Return value:
`true` is the value is an Array; otherwise `false`.

---

## `instanceof` vs `isArray`
When checking for Array instance, `Array.isArray()` is preferred over `instanceof` because it works through `iframes`.

---

```js
let iframe = document.createElement('iframe')
document.body.appendChild(iframe)
xArray = window.frames[window.frames.length - 1].Array

let arr = new xArray(1,2,3) 
console.log(arr) // [1, 2, 3]

//* Correctly checking for Array
console.log(Array.isArray(arr)) // true

//* Considered harmful, because doesn't work through iframes
console.log(arr instanceof Array) // false
```

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)