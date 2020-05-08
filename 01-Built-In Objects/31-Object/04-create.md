##### 5/08/2020
# `Object.create()`

```js
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}.`);
  }
},
      me = Object.create(person);

me.name = 'Tom'; 
me.isHuman = true;

me.printIntroduction(); // My name is Tom. Am I human? true.
```

---

## Syntax:
`Object.create(proto, [propertiesObject])`

* **proto**: the `object` which should be the prototype of the newly-created `object`
* **propertiesObject** (Optional): if specified and not `undefined`, an `object` whose enumerable own properties (that is, those properties defined upon itself and _not_ enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created `object`, with the corresponding property names. These properties correspond to the second argument of `Object.defineProperties()`. 

## Return value:
A new `object` with the specified prototype `object` and properties.

## Errors Thrown:
<span style="color: red">**TypeError**</span>: A `TypeError` exception if the `propertiesObject` parameter is `null` or a non-primitive-wrapper `object`.

---

## Description:
The `Object.create()` method creates a new `object`, using an existing `object` as the prototype of the newly created `object`.

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
| `create()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**5**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**4**</span> | **Firefox** || 
| <span style="color: lightgreen">**9**</span> | **IE** || 
| <span style="color: lightgreen">**11.6**</span> | **Opera** || 
| <span style="color: lightgreen">**5**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**12**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**5**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)