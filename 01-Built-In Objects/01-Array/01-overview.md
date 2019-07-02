##### 4/17/2019
# Array Overview

```js
// Create an Array
let fruits = ['Apple', 'Banana']

// Access (index into) an Array item
let first = fruits[0]

let last = fruits[fruits.length - 1]

// Loop over an Array
fruits.forEach((item, index, array) => {
  return item
})

// Add to the end of an Array
let newLength = fruits.push('Orange')

// Remove from the end of an Array
let last = fruits.pop()

// Remove from the front of an Array
let first = fruits.shift()

// Add to the front of an Array
let first = fruits.unshift('Strawberry')

// find the index of an item in an Array
fruits.push('Mango')

let pos = fruits.indexOf('Banana')

// Remove an item by index position
let removedItem = fruits.splice(pos, 1)

// Remove items from an index position
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']

let pos = 1, n = 2

let removedItems = vegetables.splice(pos, n)

// Copy an Array
let shallowCopy = fruits.slice()
```
---

## Properties
**`Array.length`**   
  > 
**`get Array[@@species]`**   
  > 
**`Array.prototype`** 
  > 

## Methods
**`Array.from()`**  
  > 

**`Array.isArray()`**  
  > 

**`Array.of()`**  
  > 


## Instances
All `Array` instances inherit from `Array.prototype`.  The prototype object of the Array constructor can be modified to affect all Array instances.

### Properties
**`Array.prototype.constructor`**  
  > 

**`Array.prototype.length`**  
  > 

**`Array.prototype[@@unscopables]`**  
  > 


### Methods
#### Mutator Methods
**`Array.prototype.copyWithin()`**  
  > 

**`Array.prototype.fill()`**  
  > 

**`Array.prototype.pop()`**  
  > 

**`Array.prototype.push()`**  
  > 

**`Array.prototype.reverse()`**  
  > 

**`Array.prototype.shift()`**  
  > 

**`Array.prototype.sort()`**  
  > 

**`Array.prototype.splice()`**  
  > 

**`Array.prototype.unshift()`**  
  > 


#### Accessor Methods
**`Array.prototype.concact()`**  
  > 

**`Array.prototype.includes()`**  
  > 

**`Array.prototype.indexOf()`**  
  > 

**`Array.prototype.join()`**  
  > 

**`Array.prototype.lastIndexOf()`**  
  > 

**`Array.prototype.slice()`**  
  > 

**`Array.prototype.toString()`**  
  > 

**`Array.prototype.toLocaleString()`**  
  > 

    
#### Iteration Methods
**`Array.prototype.entries()`**  
  > 

**`Array.prototype.every()`**  
  > 

**`Array.prototype.filter()`**  
  > 

**`Array.prototype.find()`**  
  > 

**`Array.prototype.findIndex()`**  
  > 

**`Array.prototype.forEach()`**  
  > 

**`Array.prototype.keys()`**  
  > 

**`Array.prototype.map()`**  
  > 

**`Array.prototype.reduce()`**  
  > 

**`Array.prototype.reduceRight()`**  
  > 

**`Array.prototype.some()`**  
  > 

**`Array.prototype.values()`**  
  > 

**`Array.prototype[@@iterator]()`**
  > 


---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard | New methods added: `isArray`, `indexOf`, `lastIndexOf`, `every`, `some`, `forEach`, `map`, `filter`, `reduce`, `reduceRight` |
| ECMAScript 2015 (6th Edition) | 2015 | Standard | New methods added: `from`, `of`, `find`, `findIndex`, `fill`, `copyWithin` |
| ECMAScript 2016 | 2016 | Standard | New method added: `includes` |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)