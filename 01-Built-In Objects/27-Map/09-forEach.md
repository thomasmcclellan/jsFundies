##### 1/10/2020
# `Map.prototype.forEach()`

```js
function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`)
}

new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logMapElements)
// m[foo] = 3
// m[bar] = [object Object]
// m[baz] = undefined
```

---

## Syntax:
`myMap.forEach(callback [, thisArg])`

* **callback**: `function` to execute for each element 
* **thisArg** (Optional): value to use as `this` when executing `callback`

---

## Description:
The `Map.prototype.forEach()` method executes a provided `function` once per each key/value pair in the `Map` object, in insertion order.

The `forEach()` method executes the provided `callback` once for each key of the map which actually exist. It is not invoked for keys which have been deleted. However, it is executed for values which are present but have the value `undefined`.

`callback` is invoked with three arguments:
  * the element's value
  * the element key
  * the `Map` object being traversed

If a `thisArg` parameter is provided to `forEach()`, it will be passed to `callback` when invoked, for use as its `this` value.  Otherwise, the value `undefined` will be passed for use as its this value.  The `this` value ultimately observable by `callback` is determined according to the usual rules for determining the this seen by a `function`.

Each value is visited once, except in the case when it was deleted and re-added before `forEach()` has finished. `callback` is not invoked for values deleted before being visited. New values added before `forEach()` has finished will be visited.

`forEach()` executes the `callback` `function` once for each element in the `Map` object. It does not return a value.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `forEach()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**38**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**25**</span> | **Firefox** || 
| <span style="color: lightgreen">**11**</span> | **IE** || 
| <span style="color: lightgreen">**25**</span> | **Opera** || 
| <span style="color: lightgreen">**8**</span> | **Safari** || 
| <span style="color: lightgreen">**38**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**38**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**25**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**25**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**8**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**3.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)