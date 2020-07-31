##### 7/27/2020
# `handler.set()`

```js
function Monster() {
  this.eyeCount = 4;
}

const handler1 = {
  set(obj, prop, value) {
    if ((prop === 'eyeCount') && ((value % 2) !== 0)) {
      console.log('Monsters must have an even number of eyes');
    } else {
      return Reflect.set(...arguments);
    }
  }
};

const monster1 = new Monster();
const proxy1 = new Proxy(monster1, handler1);
proxy1.eyeCount = 1; // "Monsters must have an even number of eyes"

console.log(proxy1.eyeCount); // 4
```

---

## Syntax:
`const p = new Proxy(target, {
  set: function(target, property, value, receiver) {
  }
});`

  > The following parameters are passed to the `defineProperty()` method.  `this` is bound to the handler.

* **target**: The target `object`.
* **property**: The name or `Symbol` of the property to set. 
* **value**: The new value of the property to set.
* **receiver**: The `object` to which the assignment was originally directed. This is usually the proxy itself. But a `set()` handler can also be called indirectly, via the prototype chain or various other ways.

## Return value:
The `set()`  method should return a `boolean` value.
  * Return `true` to indicate that assignment succeeded.
  * If the `set()` method returns `false`, and the assignment happened in _strict-mode_ code, a `TypeError` will be thrown.

---

## Description:
The `handler.set()` method is a trap for setting a property value.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `set()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)