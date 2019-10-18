##### 10/18/2019
# `Generator.prototype.throw()`

## Syntax:
`gen.throw(exception)`

* **exception**: exception to throw.  For debugging purposes, it is useful to make it an `instanceof` Error.

## Return value:
An `object` ith two parameters:
  * `done` (`boolean`):
    * Has the value `true` if the iterator is past the end of the iterated sequence.  In this case, `value` optionally specifies the _return value_ of the iterator.
    * Has the value `false` if the iterator was able tot produce the next value in the sequence.  This is equivalent of not specifying the `done` property altogether.
  * `value` - any `JS` value returned by the iterator.  can be omitted when `done` is `true`.

---

## Description:
The `throw()` method resumes the execution of a generator by throwing an error into it and returns an `object` with two properties: `done` and `value`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `throw()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**39**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**13**</span> | **Edge** || 
| <span style="color: lightgreen">**26**</span> | **Firefox** || 
| <span style="color: lightgreen">**X**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**26**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**4.0.0***</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

  > *From version `0.12`: this feature is behind the `--harmony` runtime flag.

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint8)