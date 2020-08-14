##### 8/05/2020
# `Reflect.defineProperty()`

```js
const object1 = {};

if (Reflect.defineProperty(object1, 'property1', { value: 42 })) {
  console.log('property1 created!'); // property1 created!
} else {
  console.log('problem creating property1');
}

console.log(object1.property1); // 42
```

---

## Syntax:
`Reflect.defineProperty(target, propertyKey, attributes)`

* **target**: The target `function` to call.
* **propertyKey**: The name of the property to be defined or modified.
* **attributes**: The attributes for the property being defined or modified.

## Return value:
A `boolean` indicating whether or not the property was successfully defined.

## Errors Thrown:
<span style="color: red">**TypeError**</span>: if the `target` is not an `object`. 

---

## Description:
The static `Reflect.defineProperty()` method is like `Object.defineProperty()` but returns a `boolean`.

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty)