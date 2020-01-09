##### 12/26/2019
# `JSON.parse()`

```js
const json = '{"result": true, "count": 42}'
const obj = JSON.parse(json)

console.log(obj.result) // true
console.log(obj.count) // 42
```

---

## Syntax:
`JSON.parse(text [, reviver])`

* **text**: `string` to parse as `JSON`
* **reviver** (Optional): if a `function`, this prescribes how the value originally produced by parsing is transformed, before being returned

## Return value:
The `object` corresponding to the given `JSON` text.

## Errors Thrown:
<span style="color: red">**SyntaxError**</span>: throws if the `string` to parse is not valid `JSON`.

---

## Description:
The `JSON.parse()` method parses a `JSON` `string`, constructing the `JS` value or `object` described by the `string`.  An optional **reviver** `function` can be provided to perform a transformation on the resulting `object` before it is returned.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 5.1 | 2011 | Standard | Initial definition |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `parse()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**3**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**3.5**</span> | **Firefox** || 
| <span style="color: lightgreen">**8**</span> | **IE** || 
| <span style="color: lightgreen">**10.5**</span> | **Opera** || 
| <span style="color: lightgreen">**4**</span> | **Safari** || 
| <span style="color: lightgreen">**≤ 37**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**11**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)