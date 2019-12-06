##### 12/04/2019
# `Intl.NumberFormat.prototype.resolvedOptions()`

```js
const numberFormat1 = new Intl.NumberFormat('de-DE');
const options1 = numberFormat1.resolvedOptions();

console.log(options1.locale) // de-DE
console.log(options1.numberingSystem) // latn
console.log(options1.style) // decimal
```

---

## Syntax:
`numberFormat.resolvedOptions()`

## Return value:
A new `object` with properties reflecting the locale and number formatting options computed during the initialization of the given `NumberFormat` `object`.

---

## Description:
The `Intl.NumberFormat.prototype.resolvedOptions()` method returns a new `object` with properties reflecting the locale and number formatting options computed during initialization of this `NumberFormat` `object`.

The resulting `object` has the following properties:

| Property | Description |
|---|---|
| `locale` | The `BCP 47` language tag for the locale actually used. If any `Unicode` extension values were requested in the input `BCP 47` language tag that led to this locale, the key-value pairs that were requested and are supported for this locale are included in `locale` |
| `numberingSystem` | The value provided for this properties in the `options` argument, if present, or the value requested using the `Unicode` extension key `'nu'` or filled in as a default |
| `notation` | The value provided for this property in the `options` argument, if present, or `standard` filled in as a default |
| `compactDisplay` | The value provided for this property in the `options` argument, or `'short'` filled in as a default * |
| `signDisplay` | The value provided for this property in the `options` argument, or `'auto'` filled in as a default |
| `useGrouping` | The values provided for these properties in the `options` argument or filled in as default |
| `currency`<br>`currencyDisplay` | The values provided for these properties in the `options` argument or filled in as default ** |
| `minimumIntegerDigits`<br>`minimumFractionDigits`<br>`maximumFractionDigits` | The values provided for these properties in the `options` argument or filled in as default. These properties are present only if neither `minimumSignificantDigits` nor `maximumSignificantDigits` was provided in the `options` argument. *** |
| `minimumSignificantDigits`<br>`maximumSignificantDigits` | The values provided for these properties in the `options` argument or filled in as default. These properties are present only if at least one of them was provided in the `options` argument *** |

  > *This property is only present if the `notation` is set to `'compact'`.

  > **These properties are only present if `style` is `'currency'`.

  > ***Only one of the following two groups of properties is included 

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 1.0 (`ECMA-402`) | 2012 | Standard | Initial definition |
| ECMAScript Internationalization API 2.0 (`ECMA-402`) | 2015 | Standard |  |
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft |  |

---

## Browser Compatibility:
| `resolvedOptions()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**24**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**29**</span> | **Firefox** || 
| <span style="color: lightgreen">**11**</span> | **IE** || 
| <span style="color: lightgreen">**15**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**26**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**56**</span> | **Firefox for Android** || 
| <span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.5**</span> | **Samsung Internet** || 
| <span style="color: grey">**?**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/resolvedOptions)