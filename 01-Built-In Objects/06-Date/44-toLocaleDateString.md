##### 9/17/2019
# `Date.prototype.toLocaleDateString()`

```js
const event = new Date(Date.UTC(2019, 8, 17, 9, 0, 0))
const options = {
  weekday: 'long', 
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

console.log(event.toLocaleDateString('de-DE', options))
console.log(event.toLocaleDateString('ar-EG', options))
console.log(event.toLocaleDateString('ko-KR', options))
```

---

## Syntax:
`dateObj.toLocaleDateString([locales[, options]])`
  > Check the _Browser compatibility_ section to see which browsers support the `locales` and `options` arguments.

* **locales** (Optional): `string` with a `BCP 47` language tag, or an array of such `strings`. The following Unicode extensions are as follows: *

| Value | Description |
|---|---|
| nu | Numbering system.  Possible values include: ``` ['arab', 'arabext', 'bali', 'beng', 'deva', 'fullwide', 'gujr', 'guru', 'hanidec', 'khmr', 'knda', 'laoo', 'latn', 'limb', 'mlym', 'mong', 'mymr', 'orya', 'tamldec', 'telu', 'thai', 'tibt'] ```  |
| ca | Possible values include: ``` ['buddhist', 'chinese', 'coptic', 'ethiopia', 'ethiopic', 'gregory', 'hebrew', 'indian', 'islamic', 'iso8601', 'japanese', 'persian', 'roc'] ``` |
| hc | Hour cycle. Possible values include: ``` ['h11', 'h12', 'h23', 'h24'] ``` |

* **options** (Optional): `object` with some or all of the following properties:

| Value | Description |
|---|---|
| dateStyle | The date formatting style to use when calling `format()`.  Possible values include: ```js ['full', 'long', 'medium', 'short'] ``` |
| timeStyle | The time formatting style to use when calling `format()`.  Possible values include: ```js ['full', 'long', 'medium', 'short'] ``` |
| localeMatcher | The locale matching algorithm to use.  Possible values are `lookup` and `best fit`; the default is the latter |
| timeZone | The time zone to use.  The only value implementations must recognize is 'UTC'; the default is the runtime's default time zone.  Implementations may also recognize the time zone names of the [IANA time zone database](https://www.iana.org/time-zones), such as 'Asia/Shanghai', 'Asia/Kolkata', 'America/New_York'.
| hour12 | Whether to use 12-hour time (as opposed to 24-hour time).  Possible values are `true` and `false`; the default is locale-dependent.  This option overrides the `hc` language tag and/or the `hourCycle` option in case both are present. |
| hourCycle | The hour cycle to use.  Possible values are: ``` ['h11', 'h12', 'h23', 'h24'] ```.  This option overrides the `hc` language tag, if both are present, and the `hour12` option takes precedence in case both options have been specified. |
| formatMatcher | The format matching algorithm to use.  Possible values are `basic` and `best fit`; the default is the latter. ** |
| weekday | The representation of the weekday.  Possible values are: `long` (e.g. `Thursday`), `short` (e.g. `Thu`), and `narrow` (e.g. `T`).  Two weekdays may have the same `narrow` style for some locales (e.g. Tues and Thu are both `T`). |
| era | The representation of the era.  Possible values are: `long` (e.g. `Anno Domini`), `short` (e.g. `AD`), and `narrow` (e.g. `A`). |
| year | The representation of the year.  Possible values are: `numeric` (e.g. `2019`) and `2-digit` (e.g. `19`). |
| month | The representation of the month.  Possible values are: `numeric` (e.g. `3`), `2-digit` (e.g. `03`), `long` (e.g. `March`), `short` (e.g. `Mar`), and `narrow` (e.g. `M`).  Two months may have the same `narrow` style for soem locales (e.g. March and May are both `M`). |
| day | The representation of the day.  Possible values are: `numeric` (e.g. `1`) and `2-digit` (e.g. `01`). |
| hour | The representation of the hour.  Possible values are: `numeric` (e.g. `1`) and `2-digit` (e.g. `01`). |
| minute | The representation of the minute.  Possible values are: `numeric` (e.g. `1`) and `2-digit` (e.g. `01`). |
| second | The representation of the second.  Possible values are: `numeric` (e.g. `1`) and `2-digit` (e.g. `01`). |
| timeZoneName | The representation of the time zone name.  Possible values are: `long` (e.g. `British Summer Time`), and `short` (e.g. `GMT+1`). |

  > The default value for ech date-time component property is `undefined`, but if the `weekday`, `year`, `month`, `day`, `hour`, `minute`, and `second` properties are all `undefined`, then `year`, `month`, `day`, `hour`, `minute`, and `second` are assumed to be 'numeric'.

  > *To use the browser's default locale, omit this argument or pass `undefined`.  Unicode extensions are supported (i.e. 'en-US-u-ca-buddhist').  For general form and interpretation of the `locales` argument, see the [Intl page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).  

  > **The following properties describe the date-time components to use in formatted output, and their desired representations.  Implementations are required to support at least the following subsets:
    * weekday, year, month, day, hour, minute, second
    * weekday, year, month, day
    * year, month, day
    * year, month
    * hour, minute, second
    * hour, minute
  Implementations may support other subsets, and requests will be negotiated against all available subset-representation combinations to find the best match.  Two algorithms are available for this negotiation adn selected by the `formatMatcher` property: a [fully specified 'basic' algorithm](http://www.ecma-international.org/ecma-402/1.0/#BasicFormatMatcher) and an implementation-dependent 'best fit' algorithm.

## Return value:
A `string` representing the date portion of the given `Date` instance according to language-specific conventions.

---

## Description:
The `toLocaleDateString()` method returns a `string` with a language sensitive representation of the date portion of this date.  The new `locales` and `options` arguments let applications specify the language whose formatting conventions should be used and allow to customize the behavior of the function.  In older implementations should be used and allow to customize the behavior of the function.  In older implementations, which ignore the `locales` and `options` arguments, the locale used and the form of the `string` returned are entirely implementation dependent.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition. Implemented in JS 1.0 |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |
| ECMAScript Internationalization API 1.0 (ECMA-402) | 2019 | Standard | Defined `locales` adn `options` arguments |
| ECMAScript Internationalization API 2.0 (ECMA-402) | 2019 | Standard |  |
| ECMAScript Internationalization API 4.0 (ECMA-402) | 2019 | Draft |  |

---

## Browser Compatibility:
| `toLocaleDateString()` | `IANA` time zone names in `timeZone` option | `locales` | `options` | Browser | Platform |
|---|---|---|---|---|---|
| <span style="color: lightgreen">**Yes**</span> |<span style="color: lightgreen">**24**</span> |<span style="color: lightgreen">**24**</span> |<span style="color: lightgreen">**24**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> |<span style="color: lightgreen">**14**</span> |<span style="color: lightgreen">**12**</span> |<span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> |<span style="color: lightgreen">**52**</span> |<span style="color: lightgreen">**29**</span> |<span style="color: lightgreen">**29**</span> | **Firefox** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: red">**X**</span> |<span style="color: lightgreen">**11**</span> |<span style="color: lightgreen">**11**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: lightgreen">**15**</span> |<span style="color: lightgreen">**15**</span> |<span style="color: lightgreen">**15**</span> | **Opera** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: lightgreen">**10**</span> |<span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: lightgreen">**37**</span> |<span style="color: red">**X**</span> |<span style="color: red">**X**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: lightgreen">**25**</span> |<span style="color: lightgreen">**26**</span> |<span style="color: lightgreen">**26**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> |<span style="color: red">**X**</span> |<span style="color: lightgreen">**56**</span> |<span style="color: lightgreen">**56**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: red">**X**</span> |<span style="color: red">**X**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: lightgreen">**10**</span> |<span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: lightgreen">**Yes**</span> |<span style="color: lightgreen">**Yes**</span> |<span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)