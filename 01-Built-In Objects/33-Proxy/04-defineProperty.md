##### 7/09/2020
# `handler.defineProperty()`

```js
const handler1 = {
  defineProperty(target, key, descriptor) {
    invariant(key, 'define');
    return true;
  }
};

function invariant(key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}

const monster1 = {};
const proxy1 = new Proxy(monster1, handler1);

console.log(proxy1._secret = 'easily scared');
// expected output: Error: Invalid attempt to define private "_secret" property
```

---

## Syntax:
```js
const p = new Proxy(target, {
  defineProperty: function(target, property, descriptor) {
  }
});
```

  > The following parameters are passed to the `defineProperty()` method.  `this` is bound to the handler.

* **target**: The target `object`.
* **property**: The name or `Symbol` of the property whose description is to be retrieved.
* **descriptor**: The descriptor for the property being defined or modified.

## Return value:
The `defineProperty()` method must return a `boolean` indicating whether or not the property has been successfully defined.

---

## Description:
The `handler.defineProperty()` method is a trap for `Object.defineProperty()`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `defineProperty()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**49**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**18**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**36**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: lightgreen">**49**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**49**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**18**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**36**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**5.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**6.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineproperty)