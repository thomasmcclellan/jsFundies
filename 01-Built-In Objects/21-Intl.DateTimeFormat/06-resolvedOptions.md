##### 11/19/2019
# `Intl.DateTimeFormat.prototype.resolvedOptions()`

```js
const region1 = new Intl.DateTimeFormat('zh-CN', { timeZone: 'UTC' })
const options1 = region1.resolvedOptions()

console.log(options1.locale) // zh-CN
console.log(options1.calendar) // gregory
console.log(options1.numberingSystem) // latn
```

---

## Syntax:
`dateTimeFormat.resolvedOptions()`

## Return value:
A new `object` with properties reflecting the locale and date and time formatting options computed during the initialization of the given `DateTimeFormat` `object`.

---

## Description:
the `Intl.DateTimeFormat.prototype.resolvedOptions()` method returns a new `object` with properties reflecting the locale and date and time formatting options computing during initialization of this `DateTimeFormat` `object`.

The resulting `object` has the following properties:

| Type | Description |
|---|---|
| `locale` | The `BCP 47` language tag for the locale actually used.  If any `Unicode` extension values were requested in the input `BCP 47` language tag that led to this locale, the key-value pairs that were requested and are supported for this locale are included in `locale` |
| `calendar` | E.g. `'gregory'` |
| `numberingSystem` | The values requested using the `Unicode` extensions keys `'ca'` and `'nu'` or filled in as default values |
| `timeZone` | The value provided for this property in the `options` argument; `undefined` (representing the runtime's default time zone) if none is provided. * |
| `hour12` | The value provided for this property in the `options` argument or filled in as a default |
| `weekday` ||
| `era` ||
| `year` ||
| `month` ||
| `day` ||
| `hour` ||
| `minute` ||
| `second` ||
| `timeZoneName` | The values resulting from format matching between the corresponding properties in the `options` argument and the available combinations and representations for date-time formatting in the selected locale.  Some of these properties may not be present, indicating that the corresponding components will not be represented in formatted output |

  > ***Warning**: Applications should not rely on `undefined` being returned, as future versions may return a `string` value identifying the runtime's default time zone instead.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 1.0 (`ECMA-402`) | 2012 | Standard | Initial definition |
| ECMAScript Internationalization API 2.0 (`ECMA-402`) | 2015 | Standard |  |
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft |  |

---

## Browser Compatibility:
| `resolvedOptions()` | computed `timeZone` | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**24**</span> |<span style="color: lightgreen">**35**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> |<span style="color: lightgreen">**14**</span> | **Edge** || 
| <span style="color: lightgreen">**29**</span> |<span style="color: lightgreen">**53**</span> | **Firefox** || 
| <span style="color: lightgreen">**11**</span> |<span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**15**</span> |<span style="color: lightgreen">**30**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> |<span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: red">**X**</span> |<span style="color: red">**X**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**26**</span> |<span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**56**</span> |<span style="color: lightgreen">**56**</span> | **Firefox for Android** || 
| <span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> |<span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/resolvedOptions)