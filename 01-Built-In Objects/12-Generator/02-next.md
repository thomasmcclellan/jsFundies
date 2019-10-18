##### 10/16/2019
# `Generator.prototype.next()`

## Syntax:
`gen.next(value)`

* **value**: value to send to the generator.  The value will be assigned as a result of a `yield` expression; i.e. in `[variable] = yield [expression]`, the value passed to teh `.next()` method will be assigned to `[variable]`.

## Return value:
An `object` with two properties:
  * `done` (`boolean`):
    * Has the value `true` if the iterator is past the end of the iterated sequence.  In this case, `value` optionally specifies the _return value_ of the iterator.
    * Has the value `false` if the iterator was able to produce the next value in the sequence.  This is equivalent of not specifying the `done` property altogether.
  * `value` - any `JS` value returned by the iterator.  Can be omitted when `done` is `true`.

---

## Description:
The `next()` method returns an `object` with two properties: `done` and `value`.  You can also provide a parameter to the `next()` method to send a value to the generator.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `next()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**39**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**13**</span> | **Edge** || 
| <span style="color: lightgreen">**26**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**26**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next)