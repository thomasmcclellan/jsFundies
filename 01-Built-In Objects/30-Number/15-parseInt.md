##### 4/24/2020
# `Number.parseInt()`

```js
function roughScale(x, base) {
  const parsed = Number.parseInt(x, base);

  if (Number.isNaN(parsed)) return 0;

  return parsed * 100;
}

console.log(roughScale(' 0xF', 16)); // 1500
console.log(roughScale('321', 2)); // 0
```

---

## Syntax:
`Number.parseInt(string, [radix])`

* **string**: the value to parse.  If this argument is not a `string`, then it is converted to one using the `ToString` abstract operation.  Leading whitespace in this argument is ignored
* **radix** (Optional):  an integer between 2 and 36 that represents the _radix_ (the base in mathematical numeral systems) of the `string`.  Be careful--this does **_not_** default to 10! 

## Return value:
An integer parsed from the given `string`.

If the _radix_ is smaller than 2 or bigger than 36, and the first non-whitespace character cannot be converted to a `number`, `NaN` is returned.

---

## Description:
The `Number.parseInt()` method parses a `string` argument adn returns an integer of the specified radix or base.

This method has the same functionality as the global `parseInt()` method:

```js
Number.parseInt === parseInt; // true
```

and is part of `ES2015` (its purpose is modularization of globals).

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `parseInt()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**34**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**25**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**21**</span> | **Opera** || 
| <span style="color: lightgreen">**9**</span> | **Safari** || 
| <span style="color: lightgreen">**≤37**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**34**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**25**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**21**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**9**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**2.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)