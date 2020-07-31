##### 7/31/2020
# `Reflect` Overview
`Reflect` is a built-in `object` that provides methods for interceptable `JS` operations.  The methods are the ame as those of `proxy` handlers.  `Reflect` is not a `function` object, so it's not constructible.

---

## Description:
Unlike most global `objects`, `Reflect` is not a constructor. You cannot use it with a `new` operator or invoke the `Reflect` object as a `function`. All properties and methods of `Reflect` are static (just like the `Math` object).

The `Reflect` object provides the following static `functions` which have the same names as the proxy handler methods.

Some of these methods are also the same as corresponding methods on `Object`, although they do have some subtle differences between them.

---

## Static Methods: 
**`Reflect.apply()`**
  > Calls a target `function` with arguments as specified by the `argumentsList` parameter. See also `Function.prototype.apply()`.

**`Reflect.construct()`**
  > The `new` operator as a `function`. Equivalent to calling `new target()`. Also provides the option to specify a different prototype.

**`Reflect.defineProperty()`**
  > Similar to `Object.defineProperty()`. Returns a `Boolean` that is `true` if the property was successfully defined.

**`Reflect.deleteProperty()`**
  > The `delete` operator as a `function`. Equivalent to calling `delete target[propertyKey]`.

**`Reflect.get()`**
  > Returns the value of the property. Works like getting a property from an `object` (`target[propertyKey]`) as a `function`.

**`Reflect.getOwnPropertyDescriptor()`**
  > Similar to `Object.getOwnPropertyDescriptor()`. Returns a property descriptor of the given property if it exists on the `object`,  `undefined` otherwise.

**`Reflect.getPrototypeOf()`**
  > Same as `Object.getPrototypeOf()`.

**`Reflect.has()`**
  > Returns a `Boolean` indicating whether the target has the property. Either as own or inherited. Works like the in operator as a `function`.

**`Reflect.isExtensible()`**
  > Same as `Object.isExtensible()`. Returns a `Boolean` that is `true` if the target is extensible.

**`Reflect.ownKeys()`**
  > Returns an `array` of the target `object`'s own (not inherited) property keys.

**`Reflect.preventExtensions()`**
  > Similar to `Object.preventExtensions()`. Returns a `Boolean` that is `true` if the update was successful.

**`Reflect.set()`**
  > A `function` that assigns values to properties. Returns a `Boolean` that is `true` if the update was successful.

**`Reflect.setPrototypeOf()`**
  > A `function` that sets the prototype of an `object`. Returns a `Boolean` that is `true` if the update was successful.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `Reflect` | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**49**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**42**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**36**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: lightgreen">**49**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**49**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**42**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**36**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**5.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**6.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)