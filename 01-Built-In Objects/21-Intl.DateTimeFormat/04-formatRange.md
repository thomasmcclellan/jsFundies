##### 11/15/2019
# `Intl.DateTimeFormat.prototype.formatRange()`

```js
const options1 = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}
const options2 = {
  year: '2-digit',
  month: 'numeric',
  day: 'numeric'
}
const startDate = new Date(Date.UTC(2018, 10, 15, 9, 0, 0))
const endDate = new Date(Date.UTC(2019, 10, 15, 10, 0, 0))
const dateTimeFormat1 = new Intl.DateTimeFormat('en', options1)
const dateTimeFormat2 = new Intl.DateTimeFormat('en', options2)

console.log(dateTimeFormat1.formatRange(startDate, endDate)) // Thursday, November 15, 2018 - Friday, November 15, 2019
console.log(dateTimeFormat2.formatRange(startDate, endDate)) // 11/15/18 - 11/15/19
```

---

## Syntax:
`Intl.DateTimeFormat.prototype.formatRange(startDate, endDate)`

---

## Description:
The `Intl.DateTimeFormat.prototype.formatRange()` formats a date range in the most concise way based on the `locale` and `options` provided when instantiating `Intl.DateTimeFormat` `object`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft | Initial definition |

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatRange)