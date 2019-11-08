##### 11/05/2019
# `Intl.Collator`

```js
function letterSort(lang, letters) {
  letters.sort(new Intl.Collator(lang).compare)
  return letters
}

console.log(letterSort('de', ['a', 'z', 'ä'])) // ['a', 'ä', 'z']
console.log(letterSort('sv', ['a', 'z', 'ä'])) // ['a', 'z', 'ä']
```

---

## Syntax:
`new Intl.Collator([locales [, options]])`  
`Intl.Collator.call(this [, locales [, options]])`

* **locales** (Optional): `string` with a `BCP 47` language tag, or an `array` of such `strings`.  for the general form and interpretation of the `locales` argument, see the [Intl page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).  The following `Unicode` extension keys are allowed:
  * **co**: variant collations for certain locales.  Possible values include: `"big5han"`, `"dict"`, `"direct"`, `"ducet"`, `"gb2312"`, `"phonebk"`, `"phonetic"`, `"pinyin"`, `"reformed"`, `"searchjl"`, `"stroke"`, `"trad"`, `"unihan"`. The `"standard"` and `"search"` values are ignored; they are replaced by the `options` property usage (see below)
  * **kn**: whether numeric collation should be used, such that `"1" < "2" < "10"`. Possible values are `"true"` and `"false"`. This option can be set through an `options` property or through a `Unicode` extension key; if both are provided, the `options` property takes precedence
  * **kf**: whether upper case or lower case should sort first. Possible values are `"upper"`, `"lower"`, or `"false"` (use the locale's default). This option can be set through an `options` property or through a `Unicode` extension key; if both are provided, the `options` property takes precedence.
* **options** (Optional): `object` with some or all of the following properties:
  * **localeMatcher**: locale matching algorithm to use. Possible values are `"lookup"` and `"best fit"`; the default is `"best fit"`. 
  * **usage**: whether the comparison is for sorting or for searching for matching `strings`. Possible values are `"sort"` and `"search"`; the default is `"sort"`
  * **sensitivity**: which differences in the `strings` should lead to non-zero result values. *
  * **ignorePunctuation**: whether punctuation should be ignored. Possible values are `true` and `false`; the default is `false`
  * **numeric**: whether numeric collation should be used, such that `"1" < "2" < "10"`. Possible values are `true` and `false`; the default is `false`. This option can be set through an `options` property or through a `Unicode` extension key; if both are provided, the `options` property takes precedence. Implementations are not required to support this property
  * **caseFirst**: whether upper case or lower case should sort first. Possible values are `"upper"`, `"lower"`, or `"false"`; the default is `"false"`. This option can be set through an `options` property or through a `Unicode` extension key; if both are provided, the `options` property takes precedence. Implementations are not required to support this property.

  > *Possible values are:
  > | Value | Base Letters<br>(`a : b`) | Accents and Other Diacritic Marks<br>(`a : á`) | Case<br>(`a : A`) |
  > |---|---|---|---|
  > | 'base' | `false` | `true` | `true` |
  > | 'accent' | `false` | `false` | `true` |
  > | 'case' | `false` | `true` | `false` |
  > | 'variant' | `false` | `false` | `false` |
  >
  > The default is `'variant'` for usage `'sort'`; it's locale dependent for usage `'search'`.

---

## Description:
The `Intl.Collator` object is a constructor for collators, `objects` that enable language sensitive `string` comparison.

The `Intl.Collator` object has the following properties and methods:

### Properties:
`Intl.Collator.prototype`
  > Allows the addition of the properties to all `objects`.

### Methods:
`Intl.Collator.supportedLocalesOf()`
  > Returns an `array` containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

---

## `Collator` Instances:
### Properties:
`Collator` instances inherit from the following properties from their prototype:

`Intl.Collator.prototype.constructor`
  > A reference to `Intl.Collator`.

### Methods:
`Collator` instances inherit the following methods from their prototype.

`Intl.Collator.prototype.compare`
  > Getter `function` that compares two `strings` according to the sort order of this `Intl.Collator` object.

`Intl.Collator.prototype.resolvedOptions()`
  > Returns a new `object` with properties reflecting the locale and collation options computed during initialization of the `object`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 1.0 (`ECMA-402`) | 2012 | Standard | Initial definition |
| ECMAScript Internationalization API 2.0 (`ECMA-402`) | 2015 | Standard |  |
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft |  |

---

## Browser Compatibility:
| `Collator` | `caseFirst` Option | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**24**</span> |<span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> |<span style="color: grey">**?**</span> | **Edge** || 
| <span style="color: lightgreen">**29**</span> |<span style="color: lightgreen">**55**</span> | **Firefox** || 
| <span style="color: lightgreen">**11**</span> |<span style="color: grey">**?**</span> | **IE** || 
| <span style="color: lightgreen">**15**</span> |<span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> |<span style="color: lightgreen">**11**</span> | **Safari** || 
| <span style="color: red">**X**</span> |<span style="color: red">**X**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**26**</span> |<span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**56**</span> |<span style="color: lightgreen">**56**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> |<span style="color: lightgreen">**11**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator)