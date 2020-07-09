##### 6/09/2020
# `Object.prototype.toString()`

```js
function Dog(name) {
  this.name = name;
}

const dog1 = new Dog('Aspen');

Dog.prototype.toString = function dogToString() {
  return `${this.name}`
};

console.log(dog1.toString()); // Aspen
```

---

## Syntax:
`obj.toString()`

## Return value:
A `string` representing the `object`.

## Errors Thrown:
<span style="color: red">**RangeError**</span>: 

---

## Description:
The `Object.prototype.toString()` method returns a `string` representing the `object`.

Every `object` has a `toString()` method that is automatically called when the `object` is to be represented as a text value or when an `object` is referred to in a manner in which a `string` is expected. By default, the `toString()` method is inherited by every `object` descended from `Object`. If this method is not overridden in a custom `object`, `toString()` returns `"[object type]"`, where type is the `object` type. The following code illustrates this:

```js
const o = new Object();
o.toString(); // [object Object]
```

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `toString()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**1**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**3**</span> | **IE** || 
| <span style="color: lightgreen">**3**</span> | **Opera** || 
| <span style="color: lightgreen">**1**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**10.1**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**1**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)