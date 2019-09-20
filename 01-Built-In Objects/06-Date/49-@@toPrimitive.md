##### 9/20/2019
# `Date.prototype[@@toPrimitive]()`
## Syntax:
`Date()[Symbol.toPrimitive](hint)`

## Return value:
the primitive value of the given `Date` object.  Depending on the argument, the method can return either a `string` or a `number`.

---

## Description:
The `[@@toPrimitive]()` method converts a `Date` object to a primitive value.

  > If `hint` is a `string` or default, `[@@toPrimitive]()` tries to call the `toString()` method.  If the `toString()` property does not exist, it tries to call the `valueOf()` method, and if the `valueOf()` does not exist either, `[@@toPrimitive]()` throws a `TypeError`.

  > If `hint` is a `number`, `[@@toPrimitive]()` first ties to call `valueOf()`, and if that fails, it calls `toString()`.

`JS` calls the `[@@toPrimitive]()` method to convert an object to a primitive value.  You rarely need to invoke the `[@@toPrimitive]()` method yourself; `JS` automatically invokes it when encountering an object where a primitive value is expected.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `[@@toPrimitive]()` | Browser | Platform |
|---|---|---|
| <span style="color: grey">**?**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**15**</span> | **Edge** || 
| <span style="color: lightgreen">**44**</span> | **Firefox** || 
| <span style="color: grey">**?**</span> | **IE** || 
| <span style="color: grey">**?**</span> | **Opera** || 
| <span style="color: grey">**?**</span> | **Safari** || 
| <span style="color: grey">**?**</span> | **Android Webview** | Mobile | 
| <span style="color: grey">**?**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**44**</span> | **Firefox for Android** || 
| <span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: grey">**?**</span> | **Safari on iOS** || 
| <span style="color: grey">**?**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**6.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive)