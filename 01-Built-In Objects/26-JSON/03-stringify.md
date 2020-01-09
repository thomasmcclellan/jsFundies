##### 12/27/2019
# `JSON.stringify()`

```js
console.log(JSON.stringify({ x: 5, y: 6})) // '{ "x": 5, "y": 6 }'
console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)])); // '[3,"false",false]'
console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] })); // '{ "x":[10,null,null,null] }'
console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5))); // ''2006-01-02T15:04:05.000Z''
```

---

## Syntax:
`JSON.stringify(value [, replacer [, space]])`

* **value**: value to convert to a `JSON` `string`
* **replacer** (Optional): `function` that alters the behavior of the stringification process, or an `array` of `string` and `number` `objects` that serve as a whitelist for selecting/filtering the properties of the value `object` to be included in the `JSON` `string`.  If this value is `null` or not provided, all properties of the `object` are included in the resulting `JSON` `string` 
* **space** (Optional): `string` or `number` `object` that's used to insert white space into the output `JSON` `string` for readability purposes.  If this is a `number`, it indicates the number of space characters to use as whitespace; this number is capped at 10 (if it is greater, the value is just 10); values less than 1 indicate that no space should be used *

  > *If this is a `string`, the `string` (or the first 10 characters of the `string`, if it's longer than that) is used as white space.  If this parameter is not provided (or is `null`), no whitespace is used.

## Return value:
A `JSON` `string` representing the given value

## Errors Thrown:
<span style="color: red">**TypeError**</span>: ('cyclic object value') exception when a circular reference is found. 
<span style="color: red">**TypeError**</span>: ('BigInt value can't be serialized in JSON') when trying to stringify a _BigInt_ value. 

---

## Description:
The `JSON.stringify()` method converts a `JS` `object` or value to a `JSON` `string`, optionally replacing values if a replacer `function` is specified or optionally including only the specified properties if a replacer `array` is specified.

`JSON.stringify()` converts a value to `JSON` notation representing it:
  * If the value has a `toJSON()` method, it is responsible to define what data will be serialized
  * `boolean`, `number`, and `string` `objects` are converted to the corresponding primitive values during stringification, in accord with the traditional conversion semantics
  * All symbol-keyed properties will be completely ignored, even when using the _replacer_ `function`
  * The instances of Date implement the `toJSON()` `function` by returning a `string` (the same as `date.toISOString()`), thus, they are treated as `strings`
  * The numbers `Infinity` and `NaN`, as well as the value `null`, are all considered `null`
  * All the other `object` instances (including `Map`, `Set`, `WeakMap`, and `WeakSet`) will have only their enumerable properties serialized

### The _Replacer_ Parameter:
The _replacer_ parameter can be either a `function` or an `array`.

**As a `function`**, it takes two parameters: the _key_ and the _value_ being stringified.  The `object` in which they key was found is provided as the replacer's `this` parameter.

Initially, the _replacer_ `function` is called with an empty `string` as key representing the `object` being stringified.  It is then called for each property on the `object` or `array` being stringified.

It should return the value that should be added to the `JSON` `string`, as follows:
  * If you return a `number`, the `string` corresponding to that is used as the value for the property when added to the `JSON` `string`
  * If you return a `string`, it is used as the property's value when adding it to the `JSON` `string`
  * If you return a `boolean`, `'true'` or `'false'` is used as the property's value, as appropriate, when adding it to the `JSON` `string`
  * If you return `null`, `null` will be added to the `JSON` `string`
  * If you return any other `object`, it is recursively stringified into the `JSON` `string`, calling the _replacer_ `function` on each property, unless the `object` is a `function`, in which case nothing is added to the `JSON` `string`
  * If you return `undefined`, the property is not included (i.e. filtered out) in the output `JSON` `string`

  > **NOTE**: You cannot use the _replacer_ `function` to remove values from an `array`.  If you return `undefined` or a `function` then `null` is used instead.

  > **NOTE**: If you wish the _replacer_ to distinguish an initial `object` from a key with an empty `string` property (since both would given the empty `string` as key and potentially an `object` as value), you will have to keep track of the iteration count (if it is beyond the first iteration, it is a genuine empty `string` key).

#### Example _Replacer_, As a `Function`:
```js
function replacer(key, value) {
  // Filtering out properties
  if (typeof value === 'string')
    return undefined
  
  return value
}

const foo = {
  foundation: 'Mozilla',
  model: 'box', 
  week: 45, 
  transport: 'car', 
  month: 7
}

JSON.stringify(foo, replacer) // '{ "week": 45, "month": 7 }'
```

#### Example _Replacer_, As an `Array`:
If _replacer_ is an `array`, the `array`'s values indicate the names of the properties in the `object` that should be included in the resulting `JSON` `string`.

```js
JSON.stringify(foo, ['week', 'month']) // '{ "week": 45, "month": 7 }', only keep "week" and "month" properties
```

### The Space Argument:
The _space_ argument may be used to control spacing in the final `string`.
* **If it is a `number`**, successive levels in the stringification will each be indented by this many space characters (up to 10)
* **If it is a `string`**, successive levels will be indented by this `string` (or the first 10 characters of it)

```js
JSON.stringify({ a: 2 }, null, ' ')
/*
'{
 "a": 2
}'
*/
```

Using a tab character mimics standard pretty-print appearance:

```js
JSON.stringify({ uno: 1, dos: 2 }, null, '\t')
/*
'{
  "uno": 1,
  "dos": 2
}'
*/
```

### `toJSON()` Behavior:
If an `object` being stringified has a property named `toJSON` whose value is a `function`, then the `toJSON()` method customizes `JSON` stringification behavior:  instead of the `object` being serialized, the value returned by the `toJSON()` method when called will be serialized.  `JSON.stringify()` calls `toJSON` with one parameter:
  * If this `object` is a property value, the property name
  * If it is an `array`, the index in the `array`, as a `string`
  * An empty `string` if `JSON.stringify()` was directly called on this `object`

For example:
```js
const obj = {
  data: 'data',
  toJSON(key) {
    if (key)
      return `Now I am a nested object under key '${key}'`
    else
      return this
  }
}

JSON.stringify(obj) // '{ "data":"data" }'
JSON.stringify({ obj }) // '{ "obj":"Now I am a nested object under key 'obj'" }'
JSON.stringify([obj]) // '["Now I am a nested object under key '0'"]'
```

### Well-Formed `JSON.stringify()`:
Engines implementing the [well-formed `JSON.stringify()` specification](https://github.com/tc39/proposal-well-formed-stringify) will stringify lone surrogates--any code point from `U+D800` to `U+DFFF`--using `Unicode` escape sequences rather than literally.  Before this change `JSON.stringify()` would output lone surrogates if the input contained any lone surrogates; such `strings` could not be encoded in valid `UTF-8` or `UTF-16`:

```js
JSON.stringify('\uD800') // '"�"'
```

But with this change, `JSON.stringify()` represents lone surrogates using `JSON` escape sequences that _can_ be encoded in valid `UTF-8` or `UTF-16`:

```js
JSON.stringify('\uD800') // '"\\ud800"'
```

This change should be backwards-compatible as long as you pass the result of `JSON.stringify()` to APIs such as `JSON.parse()` that will accept any valid `JSON` text, because they will treat `Unicode` escapes of lone surrogates as identical to the lone surrogates themselves.  _Only_ if you are directly interpreting the result of `JSON.stringify()` do you need to carefully handle `JSON.stringify()`'s two possible encodings of these code points.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 5.1 | 2011 | Standard | Initial definition |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `stringify()` | Well-Formed `stringify()` | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**3**</span> | <span style="color: lightgreen">**72**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | <span style="color: red">**X**</span> | **Edge** || 
| <span style="color: lightgreen">**3.5**</span> | <span style="color: lightgreen">**64**</span> | **Firefox** || 
| <span style="color: lightgreen">**8**</span> | <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**10.5**</span> | <span style="color: lightgreen">**60**</span> | **Opera** || 
| <span style="color: lightgreen">**4**</span> | <span style="color: lightgreen">**12.1**</span> | **Safari** || 
| <span style="color: lightgreen">**≤ 37**</span> | <span style="color: lightgreen">**72**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | <span style="color: lightgreen">**72**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | <span style="color: lightgreen">**64**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**11**</span> | <span style="color: lightgreen">**50**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**12.2**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | <span style="color: red">**X**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: red">**X**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)