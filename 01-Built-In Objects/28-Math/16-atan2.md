##### 2/24/2020
# `Math.atan2()`

```js
function calcAngleDegrees(x, y) {
  return Math.atan2(y, x) * 180 / Math.PI;
}

console.log(calcAngleDegrees(5, 5)); // 45
console.log(calcAngleDegrees(10, 10)); // 45
console.log(calcAngleDegrees(0, 10)); // 90
```

---

## Syntax:
`Math.atan2(y, x)`

* **y**: the y coordinate of the point
* **x**: the x coordinate of the point

## Return value:
The angle in radians(in `[-\pi, \pi]`) between the positive x-axis and the ray from (0, 0) to the point (x, y).

---

## Description:
The `Math.atan2()` method returns the angle in the plane (in radians) between the positive x-axis and the ray from (0, 0) to the point (x, y), for `Math.atan2(y, x)`.

The `Math.atan2()` method returns a numeric value between `-π` and `π` representing the angle theta of an (x, y) point.  This is the counterclockwise angle, measured in radians, between the positive x axi, and the point (x, y).  Note that the arguments to this `function` pass the y-coordinate first and the x-coordinate second.

`Math.atan2()` is passed separate `x` and `y` arguments, and `Math.atan2()` is passed the ratio of those two arguments.

  > Because `atan2()` is a static method of `Math`, you always use it as `Math.atan2()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `atan2()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**1**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**4**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**1**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**1**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2)