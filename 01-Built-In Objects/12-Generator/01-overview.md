##### 10/15/2019
# `Generator` Overview

## Syntax:
```js
function* gen() {
  yield 1
  yield 2
  yield 3
}

const g = gen() // "Generator { }"
```

---

## Description:
The `Generator` object is returned by a [generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) and it conforms to both the [iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) and the [iterator protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol).

---

## Methods: 
**`Generator.prototype.next()`**
  > Returns a value yielded by the `yield` expression.

**`Generator.prototype.return()`**
  > Returns the given value and finishes the generator.

**`Generator.prototype.throw()`**
  > Throws an error to a generator (also finishes the generator, unless caught from within that generator).

---

## Example:

```js
function* idMaker() {
  let index = 0
  
  while (true)
    yield index++
}

const gen = idMaker() // "Generator { }"

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
```

---

## Legacy Generator Objects:
Firefox also implemented an earlier version of generators in `JS 1.7`, where the asterisk (`*`) in the `function` declaration was not necessary (you just use the `yield` keyword in the `function` body).  However, legacy generators support has been removed since Firefox 58 (released on January 28, 2018).

### Legacy Generator Methods:
**`Generator.prototype.next()`**
  > Returns a value yielded by the `yield` expression.  This corresponds to `next()` in the `ES2015` generator `object`.

**`Generator.prototype.close()`**
  > Closes the generator, so that when calling `next()` a [`StopIteration` error](https://developer.mozilla.org/en-US/docs/Archive/Web/StopIteration) will be thrown.  This corresponds to the `return()` method in the `ES2015` generator `object`.

**`Generator.prototype.send()`**
  > Used to send a value to a generator.  The value is returned from the `yield` expression, and returns a value yielded by the next `yield` expression.  `send(x)` corresponds to the `next(x)` in the `ES2015` generator `object`.

**`Generator.prototype.throw()`**
  > Throws an error to a generator.  This corresponds to the `throw()` method in the `ES2015` generator `object`.

## Legacy Generator Example:
```js
function* fibonacci() {
  var a = yield 1;
  yield a * 2;
}

var it = fibonacci();

console.log(it); // "Generator { }"
console.log(it.next()); // 1
console.log(it.send(10)); // 20
console.log(it.close()); // undefined
console.log(it.next()); // throws StopIteration (as the generator is now closed)
```

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `Generator` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**39**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**13**</span> | **Edge** || 
| <span style="color: lightgreen">**26**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**26**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**4.0.0***</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

  > *From version `0.12`: this feature is behind the `--harmony` runtime flag.

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)