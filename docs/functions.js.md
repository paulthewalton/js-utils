

<br><a name="functions.js"></a>

# functions.js
> Utilities for combining, modifying functions.

**Author**: Paul Walton  

<br>

## Functions

<dl>
<dt><a href="docs/sequence.md">sequence(...fns)</a> ⇒ <code>function</code></dt>
<dd><p>Sequence multiple functions into one function.</p>
</dd>
<dt><a href="docs/compose.md">compose(...fns)</a> ⇒ <code>function</code></dt>
<dd><p>Compose multiple functions into one function.</p>
</dd>
<dt><a href="docs/batch.md">batch(...fns)</a> ⇒ <code>function</code></dt>
<dd><p>Create one function that runs multiple functions on the same arguments.</p>
</dd>
<dt><a href="docs/batchApply.md">batchApply(fn, argsArray, thisArg)</a> ⇒ <code>Array</code></dt>
<dd><p>Call one function multiple times with an array of values/value arrays to pass to each call.</p>
</dd>
<dt><a href="docs/makeTest.md">makeTest(fns, strictMode)</a> ⇒ <code>function</code></dt>
<dd><p>Turn a series of functions into a testing function.</p>
</dd>
<dt><a href="docs/partial.md">partial(fn, ...partials)</a> ⇒ <code>function</code></dt>
<dd><p>Partially apply arguments to a function without setting <code>this</code>.</p>
</dd>
<dt><a href="docs/partialRight.md">partialRight(fn, ...partials)</a> ⇒ <code>function</code></dt>
<dd><p>Partially apply arguments to a function from right-to-left without setting <code>this</code>.</p>
</dd>
<dt><a href="docs/throttle.md">throttle(fn, wait)</a> ⇒ <code>function</code></dt>
<dd><p>Throttle a high-frequecy and/or resource intensive function.</p>
</dd>
<dt><a href="docs/debounce.md">debounce(fn, wait, [leading])</a> ⇒ <code>function</code></dt>
<dd><p>Debounce a function by setting a minimum elapsed time between invocations.</p>
</dd>
</dl>


<br><a name="sequence"></a>

## sequence(...fns) ⇒ <code>function</code>
Sequence multiple functions into one function.


| Param | Type | Description |
| --- | --- | --- |
| ...fns | <code>function</code> | Callable functions. |

**Example**  
```js
var abc = sequence(a, b, c);
abc(x); // -> c(b(a(x)))
```

<br><a name="compose"></a>

## compose(...fns) ⇒ <code>function</code>
Compose multiple functions into one function.


| Param | Type | Description |
| --- | --- | --- |
| ...fns | <code>function</code> | Callable functions. |

**Example**  
```js
var abc = compose(a, b, c);
abc(x); // -> a(b(c(x)))
```

<br><a name="batch"></a>

## batch(...fns) ⇒ <code>function</code>
> Create one function that runs multiple functions on the same arguments.

Create one function that runs multiple functions on the same arguments.
* Returned function returns array of results in order of original args.


| Param | Type | Description |
| --- | --- | --- |
| ...fns | <code>function</code> | Callable functions. |

**Example**  
```js
var abc = batch(a, b, c);
abc(x); // -> [a(x), b(x), c(x)];
```

<br><a name="batchApply"></a>

## batchApply(fn, argsArray, thisArg) ⇒ <code>Array</code>
Call one function multiple times with an array of values/value arrays to pass to each call.

**Returns**: <code>Array</code> - Array of returns from each call of fn.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to call. |
| argsArray | <code>Array.&lt;Array&gt;</code> | Array of arguments for function. |
| thisArg | <code>\*</code> | Value to set as `this` for the function. |

**Example**  
```js
batchApply(Math.pow, [[2, 2], [10, 3]]) // -> [4, 1000]
```

<br><a name="makeTest"></a>

## makeTest(fns, strictMode) ⇒ <code>function</code>
Turn a series of functions into a testing function.


| Param | Type | Description |
| --- | --- | --- |
| fns | <code>Array.&lt;function()&gt;</code> | Array of functions to test arguments. |
| strictMode | <code>\*</code>, <code>boolean</code> | Whether tested arguments have to pass all.      tests (true/false -> AND/OR) |


<br><a name="partial"></a>

## partial(fn, ...partials) ⇒ <code>function</code>
> Partially apply arguments to a function without setting `this`.

Partially apply arguments to a function without setting `this`.
* Use `_` as a placeholder value, final arguments will fill those positions from left-to-right, appending any remaining arguments.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to partially apply. |
| ...partials | <code>\*</code> | Arguments to partially apply to `fn`. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| placeholder | <code>string</code> | "_", can be used as placeholder instead of the string literal. |

**Example**  
```js
let forceGreaterThanZero = partial(Math.max, 0);
forceGreaterThanZero(myNum) // ~= Math.max(0, myNum)
```

<br><a name="partialRight"></a>

## partialRight(fn, ...partials) ⇒ <code>function</code>
> Partially apply arguments to a function from right-to-left without setting `this`.

Partially apply arguments to a function from right-to-left without setting `this`.
* Use `_` as a placeholder value, final arguments will replace those positions from right-to-left, prepending any remaining arguments.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to partially apply. |
| ...partials | <code>\*</code> | Arguments to partially apply to `fn`. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| placeholder | <code>string</code> | "_", can be used as placeholder instead of the string literal. |

**Example**  
```js
let divide = (a, b) => a / b;
let divideBy2 = partialRight(divide, 2);
divideBy2(myNum) // ~= divide(myNum, 2)
```
**Example**  
```js
let addThenMultiply = (a, b, c) => (a + b) * c;
let add2ThenMultiply = partialRight(divide, 2, partialRight.placeholder);
add2ThenMultiply(1, 3) // === addThenMultiply(1, 2, 3) === 9
```

<br><a name="throttle"></a>

## throttle(fn, wait) ⇒ <code>function</code>
Throttle a high-frequecy and/or resource intensive function.

**Returns**: <code>function</code> - Throttled function.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to throttle. |
| wait | <code>number</code> | Minimum number of millseconds to wait between calls. |


<br><a name="debounce"></a>

## debounce(fn, wait, [leading]) ⇒ <code>function</code>
> Debounce a function by setting a minimum elapsed time between invocations.

Debounce a function by setting a minimum elapsed time between invocations.
* When called before the elapsed time, will return the last result
* Debounced function has 2 methods:
  - flush(), which cancels the timer and immediately returns the result of the invoked function, and
  - cancel(), which just cancels the timer.

**Returns**: <code>function</code> - Debounced function.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>function</code> |  | Function to debounce. |
| wait | <code>number</code> |  | Minimum elapsed time between invoking `fn`. |
| [leading] | <code>boolean</code> | <code>false</code> | Optional. Whether to invoke the function the first time is is called before waiting. Default false. |

