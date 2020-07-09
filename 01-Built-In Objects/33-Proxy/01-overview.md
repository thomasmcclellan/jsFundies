##### 7/06/2020
# `Proxy() Constructor` Overview
## Syntax:
`new Proxy(target, handler)`

* **target**: A target `object` to wrap with `Proxy`.  it can be any sort of `object`, including a native `array`, a `function`, or even another proxy.
* **handler**: An `object` whose properties are `functions` that define the behavior of the proxy when an operation is performed on it.

---

## Description:
The `Proxy()` constructor is used to created `Proxy` objects.

Use the `Proxy()` constructor to create a new `Proxy` object. This constructor takes two mandatory arguments:
  1. `target` is the `object` for which you want to create the proxy
  2. `handler` is the `object` that defines the custom behavior of the proxy.

An empty `handler` will create a proxy that behaves, in almost all respects, exactly like the `target`. By defining any of a set group of `functions` on the handler `object`, you can customize specific aspects of the proxy's behavior. For example, by defining `get()` you can provide a customized version of the `target`'s property accessor.

### Handler `Functions`:
This section lists all the handler `functions` you can define.  Handler `functions` are sometimes called _traps_, because they trap calls to the underlying target `object`.

**`handler.apply()`**
  > A trap for a `function` call. 

**`handler.construct()`**
  > A trap for the `new` operator.

**`handler.defineProperty()`**
  > A trap for `Object.defineProperty()`.

**`handler.get()`**
  > A trap for getting property values. 

**`handler.getOwnPropertyDescriptor()`**
  > A trap for `Object.getOwnPropertyDescriptor`.

**`handler.getPrototypeOf()`**
  > A trap for `Object.getPrototypeOf`.

**`handler.has()`**
  > A trap for the `in` operator. 

**`handler.isExtensible()`**
  > A trap for `Object.isExtensible`

**`handler.ownKeys()`**
  > A trap for `Object.getOwnPropertyNames` and `Object.getOwnPropertySymbols`.

**`handler.preventExtensions()`**
  > A trap for `Object.preventExtensions`.

**`handler.set()`**
  > A trap for setting property values. 

**`handler.setPrototypeOf()`**
  > A trap for `Object.setPrototypeOf`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `Proxy()` Constructor | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**49**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**18**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**36**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: lightgreen">**49**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**49**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**18**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**36**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**5.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**6.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs]()