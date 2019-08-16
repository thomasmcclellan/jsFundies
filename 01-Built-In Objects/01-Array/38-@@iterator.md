##### 6/10/2019
# `Array.prototype[@@iterator]()`

## Syntax:
`arr[Symbol.iterator]()`

## Return value:
The initial value given by the `values` iterator.  By default, using `arr[Symbol.iterator]` will return the `values` function.

---

```js
const arr = ['a', 'b', 'c', 'd', 'e']
const eArr = arr[Symbol.iterator]()

for (let letter of eArr) console.log(letter) // a b c d e
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
| `@@iterator` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**38**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**36***</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**25**</span> | **Opera** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**36***</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

  > *<span style="color: lightgreen">**36**</span>: Full support.
  >
  > <span style="color: red">**27-36**</span>: A placeholder property named `@@iterator` is used.
  > 
  > Uses the non-standard name: `@@iterator`.
  > 
  >
  > <span style="color: red">**17-27**</span>: A placeholder property named `iterator` is used.
  > 
  > Uses the non-standard name: `iterator`.

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)