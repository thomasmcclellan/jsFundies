##### 6/20/2018
# `Atomics.notify()`

## Syntax:
`Atomics.notify(typedArray, index, count)`

* **typedArray**: shared `Int32Array`
* **index**: position in the `typedArray` to wake up on
* **count**: number of sleeping agents to notify.  Defaults to `+Infinity`  

## Return value:
A number of woken up agents

## Exceptions:
* Throws a <span style="color: red">TypeError</span>, if `typedArray` is not a shared `Int32Array`
* Throws a <span style="color: red">RangeError</span>, in `index` is out of bounds in the `typedArray`

---

## Description:
The static `Atomics.notify()` method notifies up some agents that are sleeping in the wait queue.

  >**NOTE**: This operation works only with a shared `Int32Array`

---

  > Given a shared Int32Array:

```js
const sab = new SharedArrayBuffer(1024)
const int32 = new Int32Array(sab)
```

  > A reading thread is sleeping and waiting on location 0 which is expected to be 0. As long as that is `true`, it will not go on.  However, once the writing thread has stored a new value, it will be notified by the writing thread and return the new value (123).

```js
Atomics.wait(int32, 0, 0)
console.log(int32[0]) // 123
```

  > A writing thread stores a new value and notifies the waiting thread once it has written:

```js
console.log(int32) // 0
Atomics.store(int32, 0, 123)
Atomics.notify(int32, 0, 1)
```

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
<span style="color: lightblue">**Compatibility Unknown**: Edge Mobile</span>  
<span style="color: red">**No Support**: All others</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/notify)