##### 12/31/2019
# `Map.prototype`
## Description:
The `Map.prototype` property represents the prototype for the `Map` constructor.

| Property attributes of `Map.prototype` ||
|---|---|
| Writable | no |
| Enumerable | no |
| Configurable | no |

`Map` instances inherit from `Map.prototype`.  You can use the constructor's prototype `object` to add properties or methods to all `Map` instances.

---

## Properties:
**`Map.prototype.constructor`**
  > Returns the `function` that created an instance's prototype.  This is the `Map` `function` by default.

**`Map.prototype.size`**
  > Returns the number of key/value pairs in the `Map` `object`.

## Methods: 
**`Map.prototype.clear()`**
  > Removes all key/value pairs from the `Map` `object`.

**`Map.prototype.delete()`**
  > Returns `true` if an element in the `Map` `object` existed and has been removed, or `false` if the element does not exist.  `Map.prototype.has()` will return `false` afterwards.

**`Map.prototype.entries()`**
  > Returns a new `Iterator` `object` that contains **an `array` of `[key, value]`** for each element in the `Map` `object` in insertion order.

**`Map.prototype.forEach()`**
  > Calls `callbackFn` once for each key-value pair present in the `Map` object, in insertion order.  If a `thisArg` parameter is provided to `forEach()`, it will be used as the `this` value for each callback. 

**`Map.prototype.get()`**
  > Returns the value associated to the `key`, or `undefined` if there is none.

**`Map.prototype.has()`**
  > Returns a `boolean` asserting whether a value has been associated to the `key` in the `Map` object or not.

**`Map.prototype.keys()`**
  > Returns a new `Iterator` object that contains the **keys** for each element int he `Map` object in insertion order.

**`Map.prototype.set()`**
  > Sets the value for the `key` in the `Map` object.  Returns the `Map` object.

**`Map.prototype.values()`**
  > REturns a new `Iterator` object that contains the **values** for each element in the `Map` object in insertion order.

**`Map.prototype[@@iterator]()`**
  > Returns a new `Iterator` object that contains **an `array` of `[key, value]`** for each element in the `Map` object` in insertion order.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `prototype` | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**38**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**13**</span> | **Firefox** || 
| <span style="color: lightgreen">**11**</span> | **IE** || 
| <span style="color: lightgreen">**25**</span> | **Opera** || 
| <span style="color: lightgreen">**8**</span> | **Safari** || 
| <span style="color: lightgreen">**38**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**38**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**14**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**25**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**8**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**3.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/prototype)