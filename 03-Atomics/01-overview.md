##### 6/19/2019
# Atomics Overview

## Description
The `Atomics` object provides atomic operations as static methods.  They are used with `SharedArrayBuffer` objects.

The `Atomic` operations are installed on an `Atomics` module.  Unlike the other global objects, `Atomics` is not a constructor.  You cannot use it with a `new` operator or invoke the `Atomics` object as a function.  All properties and methods of `Atomics` are static (as in the case with the `Math` object, for example).

---

## Properties:
`Atomics[Symbol.toStringTag]`  

## Methods:
### Atomic Operations:
**When memory is shared, multiple threads can read and write the same data in memory.  Atomic oeprations make sure that predictable values are written adn read, that operations are finished before the next operation starts and that operations are not interrupted.**  
`Atomics.add()`  
`Atomics.and()`  
`Atomics.compareExchange()`  
`Atomics.exchange()`  
`Atomics.load()`  
`Atomics.or()`  
`Atomics.store()`  
`Atomics.sub()`  
`Atomics.xor()`

### Wait and Notify:
**The `wait()` and `notify()` methods are modeled on Linux futexes ('fast user-space mutex') and provide ways for waiting until a certain condition becomes true and are typically used as blocking constructs.**

`Atomics.wait()`  
`Atomics.notify()`
`Atomics.isLockFree(size)`

### Methods:
`ArrayBuffer.prototype.slice()`

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition in ES2017 |

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**:  
  &nbsp; &nbsp; &nbsp; Chrome  
  &nbsp; &nbsp; &nbsp; Firefox  
  &nbsp; &nbsp; &nbsp; Firefox for Android  
  &nbsp; &nbsp; &nbsp; Node.js  
</span>
**Compatibility Unknown**: NA  
<span style="color: red">**No Support**: All others</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics)