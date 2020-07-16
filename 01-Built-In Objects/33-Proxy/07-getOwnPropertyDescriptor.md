##### 7/15/2020
# `handler.getOwnPropertyDescriptor()`

```js
const monster1 = {
  eyeCount: 4
};

const handler1 = {
  getOwnPropertyDescriptor(target, prop) {
    console.log(`called: ${prop}`); // "called: eyeCount"

    return { configurable: true, enumerable: true, value: 5 };
  }
};

const proxy1 = new Proxy(monster1, handler1);

console.log(Object.getOwnPropertyDescriptor(proxy1, 'eyeCount').value); // 5
```

---

## Syntax:
`const p = new Proxy(target, {
  getOwnPropertyDescriptor: function(target, prop) { }
});`

  > The following parameters are passed to the `defineProperty()` method.  `this` is bound to the handler.

* **target**: The target `object`.
* **prop**: The name of the property whose description should be retrieved. 

## Return value:
The `getOwnPropertyDescriptor()` method must return an `object` or `undefined`.

---

## Description:
The `handler.getOwnPropertyDescriptor()` method is a trap for getting a property value.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `getOwnPropertyDescriptor` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor)