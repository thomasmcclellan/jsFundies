##### 7/13/2020
# `handler.deleteProperty()`

```js
const monster1 = {
  texture: 'scaly'
};
const handler1 = {
  deleteProperty(target, prop) {
    if (prop in target) {
      delete target[prop];
      console.log(`property removed: ${prop}`); // property removed: texture
    }
  }
};

console.log(monster1.texture);

const proxy1 = new Proxy(monster1, handler1);
delete proxy1.texture;

console.log(monster1.texture); // undefined
```

---

## Syntax:
`const p = new Proxy(target, {
  deleteProperty: function(target, property) { }
});`

  > The following parameters are passed to the `defineProperty()` method.  `this` is bound to the handler.

* **target**: The target `object`.
* **property**: The name or `Symbol` of the property to delete. 

## Return value:
The `deleteProperty()` method must return a `boolean` indicating whether or not the property has been successfully deleted.

---

## Description:
The `handler.deleteProperty()` method is a trap for the `delete` operator.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `deleteProperty` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)