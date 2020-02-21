##### 1/22/2020
# `Map.prototype[@@iterator]()`

```js
const map1 = new Map(),
      iterator1 = map1[Symbol.iterator]()
map1.set('0', 'foo')
map1.set('1', 'bar')

for (let item of iterator1) {
  console.log(item) // ['0', 'foo'] ['1', 'bar']
}
```

---

## Syntax:
`myMap[Symbol.iterator]()`

## Return value:
The map `iterator` function, which is the `entries()` `function` by default.

---

## Description:
The initial value of the `Map.prototype[@@iterator]()` property is the same `function` object as the initial value of the `entries` method.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `values()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**43**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**36**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**30**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: lightgreen">**43**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**43**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**36**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**30**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**4.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values)