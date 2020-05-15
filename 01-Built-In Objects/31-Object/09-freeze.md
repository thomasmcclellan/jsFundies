##### 5/14/2020
# `Object.freeze()`

```js
const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33; // throws an error in strict mode

console.log(obj.prop); // 42
```

---

## Syntax:
`Object.freeze(obj)`

* **obj**: the `object` to freeze

## Return value:
The `object` that was passed to the `function`.

---

## Description:
The `Object.freeze()` method **freezes** an `object`.  A frozen `object` can no longer be changed; freezing an `object` prevent new properties from being added to it, existing properties from being removed, prevents changed the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.  In addition, freezing an `object` also prevents in prototype from being changed.  `freeze()` returns the same `object` that was passed in.

Nothing can be added to or removed from the properties set of a frozen `object`. Any attempt to do so will fail, either silently or by throwing a `TypeError` exception (most commonly, but not exclusively, when in strict mode).

For data properties of a frozen `object`, values cannot be changed, the writable and configurable attributes are set to `false`. Accessor properties (getters and setters) work the same (and still give the illusion that you are changing the value). Note that values that are `objects` can still be modified, unless they are also frozen. As an `object`, an `array` can be frozen; after doing so, its elements cannot be altered and no elements can be added to or removed from the `array`.

`freeze()` returns the same `object` that was passed into the `function`. It does not create a frozen copy.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `freeze()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**6**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**4**</span> | **Firefox** || 
| <span style="color: lightgreen">**9**</span> | **IE** || 
| <span style="color: lightgreen">**12**</span> | **Opera** || 
| <span style="color: lightgreen">**5.1**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**12**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**6**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)