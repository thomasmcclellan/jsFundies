##### 6/07/2019
# `Array.prototype.values()`

```js
const array1 = ['a', 'b', 'c']
const iterator = array1.values()

for (const value of iterator) console.log(value) // a b c
```

---

## Syntax:
`arr.values()`

## Return value:
A new array iterator object

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `values()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**66**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**60**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**53**</span> | **Opera** || 
| <span style="color: lightgreen">**9**</span> | **Safari** || 
| <span style="color: lightgreen">**66**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**66**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**60**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**47**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**9**</span> | **Safari on iOS** || 
| <span style="color: red">**X**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**10.9.0***</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

  > *The `--harmony-array-prototype` flag is required; the `--harmony` flag is not sufficient in this case.
  >
  > From version 6.5.0: this feature is behind the `--harmony-array-prototype-values` runtime flag.

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values)