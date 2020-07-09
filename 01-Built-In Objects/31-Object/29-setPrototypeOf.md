##### 6/12/2020
# `Object.setPrototypeOf()`

```js

```

---

## Syntax:
`Object.setPrototypeOf(obj, prototype)`

* **obj**: The `object` which is to have its prototype set.
* **prototype**: The `object`'s new prototype (an `object` or `null`).

## Return value:
The specified `object`.

---

## Description:
The `Object.setPrototypeOf()` method sets teh prototype (i.e., the internal `[[Prototype]]` property) of a specified `object` to another `object` or `null`.

  > **WARNING**: Changing the `[[Prototype]]` of an `object` is, by the nature of how modern `JS` engine optimize property accesses, currently a very slow operation in every browser and `JS` engine.  In addition, the effects of altering inheritance are subtle and far-flung, and are not limited to simply the time spent in the `Object.setPrototypeOf()` statement, but may extend to **_any_** code that has access to any `object` whose `[[Prototype]]` has been altered.
  >
  > Because this feature is a part of the language, it is still the burden on engine developers to implement that feature performantly (ideally).  Until engine developers address this issue, if you are concerned about performance, you should avoid setting the `[[Prototype]]` of an `object`.  Instead, create a new `object` with the desired `[[Prototype]]` using `Object.create()`.

Throws a `TypeError` exception if the `object` whose `[[Prototype]]` is to be modified is non-extensible according to `Object.isExtensible()`. Does nothing if the prototype parameter isn't an `object` or `null` (i.e., `number`, `string`, `boolean`, or `undefined`). Otherwise, this method changes the `[[Prototype]]` of `obj` to the new value.

`Object.setPrototypeOf()` is in the `ECMAScript 2015` specification. It is generally considered the proper way to set the prototype of an `object`, vs. the more controversial `Object.prototype.__proto__` property.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `setPrototypeOf()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**34**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**31**</span> | **Firefox** || 
| <span style="color: lightgreen">**11**</span> | **IE** || 
| <span style="color: lightgreen">**21**</span> | **Opera** || 
| <span style="color: lightgreen">**9**</span> | **Safari** || 
| <span style="color: lightgreen">**37**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**34**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**31**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**21**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**9**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**2.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)