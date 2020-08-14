##### 8/06/2020
# `Reflect.deleteProperty()`

```js
const object1 = {
  property1: 42
};

Reflect.deleteProperty(object1, 'property1');

console.log(object1.property1); // undefined

const array1 = [1, 2, 3, 4, 5];
Reflect.deleteProperty(array1, '3');

console.log(array1); // [1, 2, 3, undefined, 5]
```

---

## Syntax:
`Reflect.deleteProperty(target, propertyKey)`

* **target**: The target `function` to call.
* **propertyKey**: The name of the property to be defined or modified.

## Return value:
A `boolean` indicating whether or not the property was successfully deleted.

## Errors Thrown:
<span style="color: red">**TypeError**</span>: if the `target` is not an `object`. 

---

## Description:
The static `Reflect.deleteProperty()` method allows to delete properties. It is like the delete operator as a `function`.

The `Reflect.deleteProperty()` method allows you to delete a property on an `object`. It returns a `boolean` indicating whether or not the property was successfully deleted. It is almost identical to the non-strict delete operator.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `deleteProperty()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty)