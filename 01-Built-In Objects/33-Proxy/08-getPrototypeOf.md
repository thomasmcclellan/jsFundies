##### 7/16/2020
# `handler.getPrototypeOf()`

```js
const monster1 = {
  eyeCount: 4
};

const monsterPrototype = {
  eyeCount: 2
};

const handler = {
  getPrototypeOf(target) {
    return monsterPrototype;
  }
};

const proxy1 = new Proxy(monster1, handler);

console.log(Object.getPrototypeOf(proxy1) === monsterPrototype); // true
console.log(Object.getPrototypeOf(proxy1).eyeCount); // 2
```

---

## Syntax:
`const p = new Proxy(obj, {
  getPrototypeOf(target) { }
});`

  > The following parameters are passed to the `defineProperty()` method.  `this` is bound to the handler.

* **target**: The target `object`.

## Return value:
The `getPrototypeOf()` method must return an `object` or `null`.

---

## Description:
The `handler.getPrototypeOf()` method is a trap for getting a property value.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `getPrototypeOf` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**49**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**79**</span> | **Edge** || 
| <span style="color: lightgreen">**49**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**36**</span> | **Opera** || 
| <span style="color: red">**X**</span> | **Safari** || 
| <span style="color: lightgreen">**49**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**49**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**49**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**36**</span> | **Opera for Android** || 
| <span style="color: red">**X**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**5.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**6.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf)