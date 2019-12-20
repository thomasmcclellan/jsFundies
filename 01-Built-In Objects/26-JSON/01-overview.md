##### 12/20/2019
# `JSON` Overview
## Description:
The `JSON` `object` contains methods for parsing [`JavaScript` `Object` Notation (JSON)](https://www.json.org/json-en.html) and converting values to `JSON`. It can't be called for constructed, and aside from its two method properties, it has no interesting functionality of its own.

---

## `JS` and `JSON` Differences:
`JSON` is a syntax for serializing `objects`, `arrays`, `numbers`, `strings`, `booleans`, and `null`.  It is based upon `JS` syntax but is distinct from it:  some `JS` is _not_ `JSON`.

**`Objects` and `Arrays`**: property names must be _doubled-quoted_ (`"`) `strings`; [trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) are forbidden.

**`Numbers`**: leading zeroes are prohibited; a decimal point must be followed by at least one digit.  **NaN** and **Infinity** are unsupported.

**Any `JSON` test is a valid `JS` expression**--but only in `JS` engines that have implemented the [proposal to make all `JSON` text values `ECMA-262`](https://github.com/tc39/proposal-json-superset).  In engines that haven't implemented the proposal, `U+2028 LINE SEPARATOR` and `U+2029 PARAGRAPH SEPARATOR` are allowed in `string` literals and property keys in `JSON`; but their use in these features in `JS` `string` literals is a <span style="color: red">**SyntaxError**</span>.

Consider this example where `JSON.parse()` parses the `string` as `JSON` and [`eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) executes the `string` as `JS`:

```js
const code = '"\u2028\u2029"'

JSON.parse(code) // evaluates to "\u2028\u2029" in all engines
eval(code) // throws a SyntaxError in old engines
```

Other differences include allowing only _double-quoted_ `strings` and having no provisions for `undefined` or comments.  For those who wish to use a more human-friendly configuration format based on `JSON`, there is [`JSON5`](https://json5.org/), used by the Babel compiler, and the more commonly [`YAML`](https://en.wikipedia.org/wiki/YAML).

---

## Full `JSON` Syntax:
The full `JSON` syntax is as follows:

```json
JSON = null
    or true or false
    or JSONNumber
    or JSONString
    or JSONObject
    or JSONArray

JSONNumber = - PositiveNumber
          or PositiveNumber
PositiveNumber = DecimalNumber
              or DecimalNumber . Digits
              or DecimalNumber . Digits ExponentPart
              or DecimalNumber ExponentPart
DecimalNumber = 0
             or OneToNine Digits
ExponentPart = e Exponent
            or E Exponent
Exponent = Digits
        or + Digits
        or - Digits
Digits = Digit
      or Digits Digit
Digit = 0 through 9
OneToNine = 1 through 9

JSONString = ""
          or " StringCharacters "
StringCharacters = StringCharacter
                or StringCharacters StringCharacter
StringCharacter = any character
                  except " or \ or U+0000 through U+001F
               or EscapeSequence
EscapeSequence = \" or \/ or \\ or \b or \f or \n or \r or \t
              or \u HexDigit HexDigit HexDigit HexDigit
HexDigit = 0 through 9
        or A through F
        or a through f

JSONObject = { }
          or { Members }
Members = JSONString : JSON
       or Members , JSONString : JSON

JSONArray = [ ]
         or [ ArrayElements ]
ArrayElements = JSON
             or ArrayElements , JSON
```

Insignificant whitespace may be present anywhere except within a `JSONNumber` (`numbers` must contain **no** whitespace) or `JSONString` (where it is interpreted as the corresponding character in the `string` or would cause an error).  The tab character ([`U+0009`](https://unicode-table.com/en/0009/)), carriage return ([`U+000D`](https://unicode-table.com/en/000D/)), line feed ([`U+000A`](https://unicode-table.com/en/000A/)), and space ([`U+0020`](https://unicode-table.com/en/0020/)) characters are the only valid whitespace characters.

---

## Methods: 
**`JSON.parse()`**
  > Parse a `string` as `JSON`, optionally transform the produced value and its properties, and return the value.  Any violations of the `JSON` syntax, including those pertaining to the differences between `JS` and `JSON`, cause a <span style="color: red">**SyntaxError**</span> to be thrown.  The `reviver` option allows for interpreting what the `replacer` has used to stand in for the other data types.

**`JSON.stringify()`**
  > Return a `JSON` `string` corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner.  By default, all instances of `undefined` is replaced with `null`, and other unsupported native data types are censored.  The `replacer` option allows for specifying other behavior.

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
| `JSON` | `JS` as a superset of `JSON` | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**3**</span> | <span style="color: lightgreen">**66**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | <span style="color: red">**X**</span> | **Edge** || 
| <span style="color: lightgreen">**3.5**</span> | <span style="color: lightgreen">**62**</span> | **Firefox** || 
| <span style="color: lightgreen">**8**</span> | <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**10.5**</span> | <span style="color: lightgreen">**53**</span> | **Opera** || 
| <span style="color: lightgreen">**4**</span> | <span style="color: lightgreen">**Yes**</span> | **Safari** || 
| <span style="color: lightgreen">**≤ 37**</span> | <span style="color: lightgreen">**66**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | <span style="color: lightgreen">**66**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | <span style="color: lightgreen">**62**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**11**</span> | <span style="color: lightgreen">**47**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | <span style="color: lightgreen">**9.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**10.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)