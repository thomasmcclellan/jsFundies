##### 6/19/2019
# `Atomics` Overview

## Description
The `Atomics` object provides atomic operations as static methods.  They are used with `SharedArrayBuffer` objects.

The `Atomic` operations are installed on an `Atomics` module.  Unlike the other global objects, `Atomics` is not a constructor.  You cannot use it with a `new` operator or invoke the `Atomics` object as a function.  All properties and methods of `Atomics` are static (as in the case with the `Math` object, for example).

---

## Properties:
**`Atomics[Symbol.toStringTag]`**
  > The value of this property is `Atomics`.

## Methods:
### Atomic Operations:
When memory is shared, multiple threads can read and write the same data in memory.  Atomic oeprations make sure that predictable values are written adn read, that operations are finished before the next operation starts and that operations are not interrupted. 

**`Atomics.add()`**  
  > Adds the provided value to the existing value at the specified index of the array.  Returns the old value in that index.

**`Atomics.and()`** 
  > Computes a bitwise **AND** on the value at the specified index of the array with the provided value.  Returns the old value in that index.

**`Atomics.compareExchange()`**  
  > Stores a vlaue at the specified index of the array, if it equals a value.  Returns the old value.

**`Atomics.exchange()`**  
  > Stores a value at the specified index of the array.  Returns the old value.

**`Atomics.load()`**  
  > Returns the value at the specified index of the array.

**`Atomics.or()`**  
  > Computes a bitwise **OR** on the value at the specified index of the array with the provided value.  Returns the old value of that index.

**`Atomics.store()`**  
  > Stores a value at the specified index of the array.  Returns the value.

**`Atomics.sub()`**  
  > Subtracts a vlaue at the specified index of the array.  Returns the old value at that index.

**`Atomics.xor()`**
  > Computes a bitwise **XOR** on the value at the specified index of the array with the provided value.  Returns the old value at that index.

### Wait and Notify:
The `wait()` and `notify()` methods are modeled on Linux futexes ('fast user-space mutex') and provide ways for waiting until a certain condition becomes true and are typically used as blocking constructs.

**`Atomics.wait()`** 
  > Verifies that the specified index of the array still contains a value and sleeps awaiting or times out. Returns either 'ok', 'not-equal', or 'timed-out'. If waiting is not allowed in the calling agent then it throws an <span style="color: red">Error</span> exception (most browsers will not allow wait() on the browser's main thread).

**`Atomics.notify()`**
  > Notifies agents that are waiting on the specified index of the array. Returns the number of agents that were notified.

**`Atomics.isLockFree(size)`**
  > An optimization primitive that can be used to determine whether to use locks or atomic operations. Returns true, if an atomic operation on arrays of the given element size will be implemented using a hardware atomic operation (as opposed to a lock). Experts only.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition in ES2017 |

---

## Browser Compatibility:
| `Atomics` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**68**</span> | **Chrome** | Desktop | 
| <span style="color: red">**16-17***</span> | **Edge** || 
| <span style="color: lightgreen">**57^**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: red">**X**</span> | **Opera** || 
| <span style="color: red">**10.1 - ?**</span> | **Safari** || 
| <span style="color: red">**60-63``**</span> | **Android Webview** | Mobile | 
| <span style="color: red">**60-63``**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**57^**</span> | **Firefox for Android** || 
| <span style="color: red">**X**</span> | **Opera for Android** || 
| <span style="color: red">**X**</span> | **Safari on iOS** || 
| <span style="color: red">**X**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**8.10.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

  > *Support was removed to mitigate [speculative execution side-channel attacks](https://blogs.windows.com/msedgedev/2018/01/03/speculative-execution-mitigations-microsoft-edge-internet-explorer/).
 
  > ^ From version 57: this feature is behind the `javascript.options.shared_memory` preference (needs to be set to `true`).  To change preferences in Firefox, visit about:config.  
  > 
  > From version 46 - 55 (exclusive): this feature is behind the `javascript.options.shared_memory` prefernce (needs to be set to `true`).

  > `` Chrome disabled `SharedArrayBuffer` on January 5, 2018 to help reduce efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca).  This is intended as a temporary measure until other mitigations are in place.

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics)