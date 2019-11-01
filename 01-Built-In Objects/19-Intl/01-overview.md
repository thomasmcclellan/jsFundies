##### 11/01/2019
# `Intl` Overview
## Description:
the `Intl` object is the namespace for the `ECMAScript` Internationalization API, which provides language sensitive `string` comparison, `number` formatting, and date/time formatting.  The `INTL` object provides access to several constructors as well as functionality common to the internationalization constructors and other language sensitive `functions`.

---

## Properties:
**`Intl.Collator`**
  > Constructor for collators, which are `objects` that enable language-sensitive `string` comparison.

**`Intl.DateTimeFormat`**
  > Constructor for `objects` that enable language-sensitive date and time formatting.

**`Intl.ListFormat`**
  > Constructor for `objects` that enable language-sensitive list formatting.

**`Intl.NumberFormat`**
  > Constructor for `objects` that enable language-sensitive `number` formatting.

**`Intl.PluralRules`**
  > Constructor for `objects` that enable plural-sensitive formatting and language-specific rules for plurals.

**`Intl.RelativeTimeFormat`**
  > Constructor for `objects` that enable language-sensitive relative time formatting.

## Methods: 
**`Intl.getCanonicalLocales()`**
  > Returns canonical locale names.

---

## Locale Identification and Negotiation:
The internationalization constructors as well as several language sensitive methods of other constructors, use a common pattern for identifying locales and determining the one they will actually use:  they all accept `locales` and `options` arguments, and negotiate the requested locale(s) against the locales they support using an algorithm specified in the `options.localeMatcher` property.

### Locales Argument:
The `locales` argument must be either a `string` holding a [BCP 47 language tag](https://tools.ietf.org/html/rfc5646), or an `array` of such language tags.  If the `locales` argument is not provided or is `undefined`, the runtime's default locale is used.

A `BCP 47` language tag defines a language and minimally contains a primary language code.  In its most common form, it can contain, in order (all separated by hyphens):
  1. a language code
  2. a script code
  3. a country or region code

  > While the tag is not case sensitive, it is recommended to use title case for script code, upper case for country and region codes, and lower case for everything else

Examples: 
  * `'hi'`: Hindi (primary language)
  * `'de-AT'`: German as used in Austria (primary language with country code)
  * `'zh-Hans-CN'`: Chinese written in simplified characters as used in China (primary language with script and country code)

The subtags identifying languages, scripts, countries (regions), and (rarely  used) variants in `BCP 47` language tags can be found in the [IANA Language Subtag Registry](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).

`BCP 47` also allows for extensions.  `JS` internationalization `functions` use the `'u'` (Unicode) extension, which can be used to request additional customization of `Collator`, `NumberFormat`, and `DateTimeFormat` `objects`.

Examples:
  * `'de-DE-u-co-phonebk'`: Use the phonebook variant of the German sort order, which expands umlauted vowels to character pairs: ä → ae, ö → oe, ü → ue
  * `'th-TH-u-nu-thai'`: Use Thai digits (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) in number formatting
  * `'js-JP-u-ca-japanese'`: Use the Japanese calendar in date adn time formatting, so that 2013 is expressed as the year 25 of the Heisei period, or 平成25.
  * `'en-GB-u-ca-islamic'`: Use British English with the Islamic (Hijri) calendar, where the Gregorian date 14 October, 2017 is the Hijri date 24 Muharram, 1439

### Locale Negotiation:
The `locales` argument, after stripping off all Unicode extensions, is interpolated as a prioritized request from the application.  The runtime compares it against the locales it has available and picks the best one available.  Two matching algorithms exist: 
  * the 'lookup' matcher follows the Lookup algorithm specified in `BCP 47` 
  * the 'best fit' matcher lets the runtime provide a locale that's at least, but possibly more, suited for the request than the result of the Lookup algorithm  

If the application doesn't provide a `locales` argument, or the runtime doesn't have a locale that matches the request, then the runtime's default locale is used.  The matcher can be selected using a property of the `options` argument.

If the selected language tag had a Unicode extension substring, that extension is now used to customize the constructed `object` or the behavior of the `function`.  Each constructor or `function` supports only a subset of the keys defines for the Unicode extension, and the supported values often depend on the language tag.  For example, the `'co'` key (collation) is only supported by `Collator`, and its `'phonebk'` value is only supported for German.

### Options Argument:
The `options` argument must be an `object` with properties that vary between constructors and `functions`.  If the `options` argument is not provided or is `undefined`, default values are used for all properties.

One property is supported by all language sensitive constructors and `functions`:  the `localeMatcher` property, whose value must be a `string` `'lookup'` or `'best fit'` and which selects one of the locale matching algorithms described above.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 1.0 (`ECMA-402`) | 2012 | Standard | Initial definition |
| ECMAScript Internationalization API 2.0 (`ECMA-402`) | 2015 | Standard |  |
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft | Added `Intl.getCanonicalLocales` in the 4th edition |

---

## Browser Compatibility:
| `Intl` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**24**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**29**</span> | **Firefox** || 
| <span style="color: lightgreen">**11**</span> | **IE** || 
| <span style="color: lightgreen">**15**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: lightgreen">**4.4**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**26**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**56**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)