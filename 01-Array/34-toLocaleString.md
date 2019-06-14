##### 6/04/2019
# `Array.prototype.toLocaleString()`

```js
const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')]
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' })

console.log(localeString) // '1, a, 12/21/1997, 2:12:00 PM'
```

---

## Syntax:
`arr.toLocaleString([locales[, options]])`

* **locales (optional)**: string with a `BCP 47` language tag, or an array of such strings.  For the general form and interpretation of the `locales` argument
* **options (optional)**: object with configuration properties

## Return value:
A string representing the elements of the array

---

## Description:


---

## Browser Compatibility:
### Generally:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

### With `locales` Parameter:
<span style="color: lightgreen">**Full Support**: Firefox</span>  
<span style="color: lightblue">**Compatibility Unknown**: All others</span>  
<span style="color: red">**No Support**: Firefox for Android</span>

### With `options` Parameter:
<span style="color: lightgreen">**Full Support**: Firefox</span>  
<span style="color: lightblue">**Compatibility Unknown**: All others</span>  
<span style="color: red">**No Support**:  
  &nbsp; &nbsp; &nbsp; Android webview  
  &nbsp; &nbsp; &nbsp; Firefox for Android  
</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)