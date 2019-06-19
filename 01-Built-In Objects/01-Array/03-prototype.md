##### 4/19/2019
# `Array.prototype`

Array instances inherit from `Array.prototype`.  As with all constructors, you can change the constructor's prototype object to make to all Array instances.  For example, you can add new methods and properties to extend all `Array` objects.  This is used for polyfilling, for example.

However, adding non-standard methods to the array object can cause issues later, either with your own code, or when adding features to JS.

**Fun Fact**: `Array.prototype` itself is an Array.

```js
console.log(Array.isArray(Array.prototype)) // true
```

---

# `Array.prototype[@@unscopables]`

The `@@unscopable` symbol property contains property names that were not included in the ECMAScript standard prior to the ES2015 version.  These properties are excluded from `with` statement bindings.

The default array properties that are excluded from `with` bindings are:  
  &nbsp; &nbsp; &nbsp; `copywithin`  
  &nbsp; &nbsp; &nbsp; `entries`  
  &nbsp; &nbsp; &nbsp; `fill`  
  &nbsp; &nbsp; &nbsp; `find`  
  &nbsp; &nbsp; &nbsp; `findIndex`  
  &nbsp; &nbsp; &nbsp; `includes`  
  &nbsp; &nbsp; &nbsp; `keys`  
  &nbsp; &nbsp; &nbsp; `values`

The following code works fine in ES5 and below.  However, in ES6 and later, the `Array.prototype.keys()` method was introduced.  That means that inside `with` environments, 'keys' would now be the method and not the variable.  This is where now the built-in `@@unscopables` `Array.prototype[@@unscopables]` symbol property comes into play and prevents that some of the Array methods are being scoped into the `with` statement.

---

```js
const keys = []

with (Array.prototype) {
  keys.push('somthing')
}

console.log(Object.keys(Array.prototype[Symbol.unscopables])) // ["copyWithin", "entries", "fill", "find", "findIndex", "includes", "keys", "values"]
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
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@unscopables)