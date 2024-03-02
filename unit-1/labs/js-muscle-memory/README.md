<h1 align="center">JavaScript Arrays vs Objects</h1>

- [ ] Make an example of all code below inside a `arrays-objects.js` file

<br><br>
<div align="center">
  <img src="https://i.imgur.com/NnFrykD.png" alt="Arrays vs Objects">
</div>
<br><br>
<table width="100%">
  <thead style="border:1px solid #333333;">
    <tr>
      <th></th>
      <th>Arrays</th>
      <th>Objects</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="right" width="15%" valign="top">Data Type</td>
      <td width="40%" valign="top">
        Non-primitive; Object<br><br>
        <small>
          *Note: Arrays are objects where the indices are the keys, and the elements are the values<br><br>
          <code>let arr = [10, 11, 12];</code><br>
          <code>let arrObj = { '0': 10, '1': 11, '2': 12 };</code>
        </small>
      </td>
      <td width="40%" valign="top">Non-primitive; Object</td>
    </tr>
    <tr>
      <td align="right" width="15%" valign="top">Structure</td>
      <td width="40%" valign="top">
        Contiguous and sequential;<br>
        Each element in an array are physically stored next to each other<br>
        Indices are unique in arrays
      </td>
      <td width="40%" valign="top">
        Non-contiguous and randomly placed in memory<br>
        Keys are unique in objects
      </td>
    </tr>
    <tr>
      <td align="right" width="15%" valign="top">Order</td>
      <td width="40%" valign="top">Ordered (by indices)</td>
      <td width="40%" valign="top">Unordered (each key-value pair random memory locations)</td>
    </tr>
    <tr>
      <td align="right" width="15%" valign="top">Look Up / Access</td>
      <td width="40%" valign="top">
        Checks if an <b>index</b> exists in array<br>
        Returns the element at the <code>index</code><br>
        Indexing: <code>arr[i]</code><br>
        Extremely Fast
      </td>
      <td width="40%" valign="top">
        Checks if a <b>key</b> exists in object<br>
        Returns the value of the <code>key</code><br>
        Keying: <code>obj[key]</code><br>
        Extremely Fast
      </td>
    </tr>
    <tr>
      <td align="right" width="15%" valign="top">Searching</td>
      <td width="40%" valign="top">
        Checks if an <b>element</b> exists in the array<br>
        Uses array loop<br>
        <code>arr.indexOf(ele)</code><br><br>
        <small>
          *Note: While both array and objects uses a loop to search if an element / value is present, the array loop is slightly faster than object loop because each element in an array are next to each other. Computer can access items that are stored sequentially faster than items that are scattered.
        </small>
      </td>
      <td width="40%" valign="top">
        Checks if a <b>value</b> exists in the object<br>
        Uses object loop<br>
        <code>for (let key in obj) {</code><br>
        <code> //... </code><br>
        <code>}</code>
      </td>
    </tr>
    <tr>
      <td align="right" width="15%" valign="top">Insertion</td>
      <td width="40%" valign="top">
        <ul>
          <li>push - add to end</li>
          <li>unshift - add to beginning</li>
        </ul>
      </td>
      <td width="40%" valign="top">
        <code>obj["name"] = "whiskers"</code>
      </td>
    </tr>
    <tr>
      <td align="right" width="15%" valign="top">Deletion</td>
      <td width="40%" valign="top">
        <ul>
          <li>pop - removes last element</li>
          <li>shift - removes first element</li>
        </ul>
      </td>
      <td width="40%" valign="top">
        <code>delete obj[key]</code>
      </td>
    </tr>
    <tr>
      <td align="right" width="15%" valign="top">Pros</td>
      <td width="40%" valign="top">
        <ul>
          <li>Compact data structure</li>
          <li>Fast look up to find element at certain index by indexing <code>arr[idx]</code></li>
          <li>Ordered, elements can be sorted</li>
          <li>Looping through all items in an array is slightly faster than looping through all items in an object</li>
        </ul>
      </td>
      <td width="40%" valign="top">
        <ul>
          <li>Fast look up if a key exist by keying <code>obj[key]</code></li>
          <li>Can grow or shrink easily</li>
          <li>Adding a new key-value pair is very fast</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="right" width="15%" valign="top">Cons</td>
      <td width="40%" valign="top">
        <ul>
          <li>Slow insertion / deletion at the beginning or middle</li>
          <li>Can not grow and shrink easily</li>
          <li>Not ideal when dealing with a huge data set that is constantly growing or shrinking. Due to its contiguous nature, when the array runs out of slots, or the next space in memory is occupied, it will have to reallocate, double in size and copy all elements over to accomandate for new items</li>
        </ul>
      </td>
      <td width="40%" valign="top">
        <ul>
          <li>Not compacted like arrays</li>
          <li>Unordered; Items can't be "sorted"</li>
          <li>Hash collision - two keys hashes to same memory location</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="right" width="15%" valign="top">When to Use</td>
      <td width="40%" valign="top">
        <ul>
          <li>Great for compiling a list and looping through all items</li>
          <li>When order matters</li>
        </ul>
      </td>
      <td width="40%" valign="top">
        <ul>
          <li>Need to keep track of multiple things at once and order does not matter</li>
          <li>Great for frequency counter problems</li>
          <li>Great for lookup, when looping through elements in an array, and checking if it's present or has been seen before</li>
          <li>Examples: elementCount, countRepeats, isAnagram, phraseFinder</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
<br><br>
**Which (intermediate) data structure would you choose to collect your data for this problem?**
* Hint: Does order matter?

```js
// repeatedChars
// Write a function `repeatedChars(words)` which takes a string and returns an array of all 
// the characters in word that appear in a streak (ie: more than once consecutively).
// This should be case-sensitive!
repeatedChars("aaabaa")           // => ["a", "a"]
repeatedChars("mississippi")      // => ["s", "s", "p"]
repeatedChars("SSassSS")          // => ["S", "s", "S"]
```
<hr />
<hr />
<hr />

<h1 align="center">List of Common Methods</h1>

* Strings
* Arrays
* Objects

- [ ] Create an example of all code below inside a `common-methods.js` file

<br>

### Strings
* Strings are primitive data type in JavaScript
* Primitive data types in JavaScript are IMMUTABLE
* Immutable - once we create a value for it, we can not modify a part of the string

<br>

```js
const str = "hello world";
```

<table valign="top">
  <thead valign="top">
    <tr>
      <th width="25%">Method</th>
      <th width="25%">Example</th>
      <th width="20%">Return Value</th>
      <th width="35%">What it Returns</th>
    </tr>
  </thead>
  <tbody valign="top">
    <tr>
      <td><code>str.length</code></td>
      <td><code>str.length</code></td>
      <td>11</td>
      <td>Returns the number of characters in the string</td>
    </tr>
    <tr>
      <td><code>str[index]</code></td>
      <td><code>str[0]</code></td>
      <td>"h"</td>
      <td>Returns the character at index 0</td>
    </tr>
    <tr>
      <td></td>
      <td><code>str[1]</code></td>
      <td>"e"</td>
      <td>Returns the character at index 1</td>
    </tr>
    <tr>
      <td></td>
      <td><code>str[str.length - 1]</code></td>
      <td>"d"</td>
      <td>Returns the last character at the last index</td>
    </tr>
    <tr>
      <td></td>
      <td><code>str[100]</code></td>
      <td>undefined</td>
      <td>Returns <code>undefined</code> if the index is invalid</td>
    </tr>
    <tr>
      <td><code>str1 + str2</code><br><code>str1.concat(str2)</code></td>
      <td><code>"hi" + "there"</code><br><code>"hi".concat("there")</code></td>
      <td>"hithere"</td>
      <td>Returns a new combined string</td>
    </tr>
    <tr>
      <td><code>str.indexOf(char)</code></td>
      <td><code>str.indexOf("e")</code></td>
      <td>1</td>
      <td>Returns the first index where <code>"e"</code> is found</td>
    </tr>
    <tr>
      <td></td>
      <td><code>str.indexOf("o")</code></td>
      <td>4</td>
      <td>Returns the left-most index for duplicate characters</td>
    </tr>
    <tr>
      <td></td>
      <td><code>str.indexOf("llo")</code></td>
      <td>2</td>
      <td>Returns the index where substring starts</td>
    </tr>
    <tr>
      <td></td>
      <td><code>str.indexOf("W")</code></td>
      <td>-1</td>
      <td>Returns -1 if character is not found; Case-sensitive!</td>
    </tr>
    <tr>
      <td></td>
      <td><code>str.indexOf("lLo")</code></td>
      <td>-1</td>
      <td>Returns -1 if substring is not found; Case-sensitive!</td>
    </tr>
    <tr>
      <td><code>str.slice(startIdx, endIdx)</code></td>
      <td><code>str.slice()</code></td>
      <td><code>"hello world"</code></td>
      <td>Returns a copy of original string</td>
    </tr>
    <tr>
      <td></td>
      <td><code>str.slice(3)</code></td>
      <td><code>"lo world"</code></td>
      <td>Returns a new string containing characters starting at index 3 up to the end</td>
    </tr>
    <tr>
      <td></td>
      <td><code>str.slice(1, 5)</code></td>
      <td><code>"ello"</code></td>
      <td>Returns a new string containing characters starting at index 1 up to but not including 5</td>
    </tr>
    <tr>
      <td></td>
      <td><code>str.slice(1, -1)</code></td>
      <td><code>"ello worl"</code></td>
      <td>Get all characters except the first and last</td>
    </tr>
    <tr>
      <td><code>str.split(separator)</code></td>
      <td><code>str.split(" ")</code></td>
      <td><code>["hello", "world"]</code></td>
      <td>Returns an array of words</td>
    </tr>
    <tr>
      <td></td>
      <td><code>"foo".split("")</code></td>
      <td><code>["f", "o", "o"]</code></td>
      <td>Returns an array of characters</td>
    </tr>
    <tr>
      <td><code>string.toUpperCase()</code></td>
      <td><code>"booTCaMp".toUpperCase()</code></td>
      <td><code>"BOOTCAMP"</code></td>
      <td>Returns a new string where every character is capitalized</td>
    </tr>
    <tr>
      <td><code>string.toLowerCase()</code></td>
      <td><code>"booTCaMp".toLowerCase()</code></td>
      <td><code>"bootcamp"</code></td>
      <td>Returns a new string where every character is lower cased</td>
    </tr>
  </tbody>
</table>

<br><br>

**Mutability**
* JavaScript strings are IMMUTABLE

```js
const str2 = 'bye';
str2[0] = 'x';
str;                    // 'bye'                    

// note how `str2` is still "bye" and not "xye"
```

<br>
<br>

### Arrays

* Arrays are non-primitive data types
* Non-primitive data type in JavaScript are MUTABLE

<br>

```js
const arr = ['blue', 'pink', 'green'];
const arr1 = [10, 11, 12];
const arr2 = [45, 46];
const arr3 = [4, 5, 6];
```

<table valign="top">
  <thead valign="top">
    <tr>
      <th width="25%">Method</th>
      <th width="25%">Example</th>
      <th width="20%">Return Value</th>
      <th width="35%">What it Returns</th>
    </tr>
  </thead>
  <tbody valign="top">
    <tr>
      <td><code>arr.length</code></td>
      <td><code>arr.length</code></td>
      <td>3</td>
      <td>Returns the number of elements in array</td>
    </tr>
    <tr>
      <td><code>arr[index]</code></td>
      <td><code>arr[0]</code></td>
      <td>"blue"</td>
      <td>Returns the element at index 0</td>
    </tr>
    <tr>
      <td></td>
      <td><code>arr[5]</code></td>
      <td><code>undefined</code></td>
      <td>Returns the <code>undefined</code> if element is not present</td>
    </tr>
    <tr>
      <td></td>
      <td><code>arr[arr.length - 1]</code></td>
      <td>"green"</td>
      <td>Returns the element at the last index</td>
    </tr>
    <tr>
      <td><code>arr.indexOf(element)</code></td>
      <td><code>arr.indexOf("blue")</code></td>
      <td>0</td>
      <td>Returns the index where element is found</td>
    </tr>
    <tr>
      <td></td>
      <td><code>arr.indexOf("violet")</code></td>
      <td>-1</td>
      <td>Returns -1 if element is not present</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Mutating Methods</td>
      <td><code>arr3 = [4,5,6]</code></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>arr.push(element)</code></td>
      <td><code>arr3.push(10)</code></td>
      <td>4<br><code>[4,5,6,10]</code></td>
      <td>Returns the new length of array; Adds an element to the end of array</td>
    </tr>
    <tr>
      <td></td>
      <td><code>arr3.push("a", "b")</code></td>
      <td>6<br><code>[4,5,6,10,"a","b"]</code></td>
      <td>Returns the new length of array; Adds multiple elements to the end of array</td>
    </tr>
    <tr>
      <td><code>arr.pop()</code></td>
      <td><code>arr3.pop()</code></td>
      <td>"b"<br><code>[4,5,6,10,"a"]</code></td>
      <td>Returns the removed element; Removes last element in array</td>
    </tr>
    <tr>
      <td><code>arr.shift()</code></td>
      <td><code>arr3.shift()</code></td>
      <td>4<br><code>[5,6,10,"a"]</code></td>
      <td>Returns the removed element; Removes first element in array</td>
    </tr>
    <tr>
      <td><code>arr.unshift(element)</code></td>
      <td><code>arr3.unshift(100)</code></td>
      <td>5<br><code>[100,5,6,10,"a"]</code></td>
      <td>Returns the new length of array; Adds an element to the front of array</td>
    </tr>
    <tr>
      <td></td>
      <td><code>arr3.unshift("c","d")</code></td>
      <td>7<br><code>["c","d",100,5,6,10,"a"]</code></td>
      <td>Returns the new length of array; Adds multiple elements to the front of array</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Non-mutating Methods</td>
      <td><code>arr1 = [10,11,12]</code></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>arr.slice(startIdx, endIdx)</code></td>
      <td><code>arr1.slice()</code></td>
      <td><code>[10,11,12]</code></td>
      <td>Returns a copy of original array</td>
    </tr>
    <tr>
      <td></td>
      <td><code>arr1.slice(1)</code></td>
      <td><code>[11,12]</code></td>
      <td>Returns a new array containing elements starting at index 1</td>
    </tr>
    <tr>
      <td></td>
      <td><code>arr1.slice(1, 2)</code></td>
      <td><code>[11]</code></td>
      <td>Returns a new array containing elements starting at index 1 up to but not including index 2</td>
    </tr>
    <tr>
      <td><code>arr.join(joiner)</code></td>
      <td><code>["a", "b", "c"].join("-")</code></td>
      <td>"a-b-c"</td>
      <td>Returns a new string where every element is separated by <code>"-"</code>; Turns an array to a string, separating each element by a joiner</td>
    </tr>
    <tr>
      <td><code>arr1.concat(arr2)</code></td>
      <td><code>[1,2].concat([4,5])</code></td>
      <td><code>[1,2,4,5]</code></td>
      <td>Returns a new combined array; Combines multiple arrays together</td>
    </tr>
    <tr>
      <td></td>
      <td><code>[1,2].concat([4,5], [7,9])</code></td>
      <td><code>[1,2,4,5,7,9]</code></td>
      <td>Returns a new combined array; Combines multiple arrays together</td>
    </tr>
  </tbody>
</table>


<br>



<br>

#### Mutability
```js
const arr4 = ['b', 'y', 'e'];
arr4[0] = 'x';
arr4;                   // ['x', 'y', 'e']          

// note how the first element has changed from 'b' to 'x'
```


<br><br>

### Objects

* Objects are also non-primitive
* Meaning, objects are mutable!

```js
const cat = {
  'name': 'whiskers',
  'age': 2,
  'color': 'orange',
  'toys': ['scratching post', 'yarn'],
  'test-key': true,
  'purr': function() {
    console.log('purrr~');
  }
}
```

<table valign="top">
  <thead valign="top">
    <tr>
      <th width="33%">Method</th>
      <th width="33%">Return Value</th>
      <th width="33%">What it Returns</th>
    </tr>
  </thead>
  <tbody valign="top">
    <tr>
      <td>Dot Notation</td>
      <td></td>
      <td></td>
    <td>
    <tr>
      <td><code>cat.name</code></td>
      <td>"whiskers"</td>
      <td>Returns the value for <code>"name"</code> key</td>
    </tr>
    <tr>
      <td><code>cat.age</code></td>
      <td>2</td>
      <td>Returns the value for <code>"age"</code> key</td>
    </tr>
    <tr>
      <td><code>cat.color</code></td>
      <td>"orange"</td>
      <td>Returns the value for <code>"color"</code> key</td>
    </tr>
    <tr>
      <td><code>cat.toys</code></td>
      <td><code>['scratching post', 'yarn']</code></td>
      <td>Returns the value for <code>"toys"</code> key</td>
    </tr>
    <tr>
      <td><code>cat.toys[0]</code></td>
      <td>"scratching post"</td>
      <td>Returns the first element from array of toys</td>
    </tr>
    <tr>
      <td><code>cat.toys.length</code></td>
      <td>2</td>
      <td></td>
    </tr>
    <tr>
      <td><code>cat.purr();</td>
      <td>"purrr~"</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Bracket Notation</td>
      <td></td>
      <td></td>
    </tr>
   <tr>
      <td><code>cat["name"]</code></td>
      <td>"whiskers"</td>
      <td>Returns the value for <code>"name"</code> key</td>
    </tr>
    <tr>
      <td><code>cat["age"]</code></td>
      <td>2</td>
      <td>Returns the value for <code>"age"</code> key</td>
    </tr>
    <tr>
      <td><code>cat["color"]</code></td>
      <td>"orange"</td>
      <td>Returns the value for <code>"color"</code> key</td>
    </tr>
    <tr>
      <td><code>cat["toys"]</code></td>
      <td><code>['scratching post', 'yarn']</code></td>
      <td>Returns the value for <code>"toys"</code> key</td>
    </tr>
    <tr>
      <td><code>cat["toys"][0]</code></td>
      <td>"scratching post"</td>
      <td>Returns the first element from array of toys</td>
    </tr>
    <tr>
      <td><code>cat["toys"].length</code></td>
      <td>2</td>
      <td></td>
    </tr>
    <tr>
      <td><code>cat["test-key"]</code></td>
      <td>true</td>
      <td>*We can't use dot notation for keys that are invalid variable names</td>
    </tr>
    <tr>
      <td><code>cat["purr"]()</code></td>
      <td>"purrr~"</td>
      <td>*The dot notation is preferred when calling a method</td>
    </tr>
  </tbody>
</table>

<br><br>

#### Dot vs. Bracket Notation
```js
const banana = "color";

cat.banana;             // undefined                // dot notation looks for a literal key of "banana"
cat[banana];            // 'orange'                 // use bracket notation when the keys are variables!!
cat['test-key'];        // true                     // must use bracket notation!
```

<br>

#### Mutation
```js
cat.name = 'potato';    // reassigns the cat's `name` property to a value of "potato"
cat.name;               // 'potato'

cat.age = cat.age + 2;  // reassigns the value of the cat's `age`
cat.age;                // 4
```

<br>

#### Other Common Object Methods
```js
const pusheen = {
  name: 'Klutzi',
  age: 2,
  color: 'gray',
  toys: ['yarn', 'ice cream', 'scratching post'],
  mood: 'happy'
};

Object.keys(pusheen);       // => [ 'name', 'age', 'color', 'toys', 'mood' ]
Object.values(pusheen);     // => [ 'Klutzi', 2, 'gray', [ 'yarn', 'ice cream', 'scratching post' ], 'happy' ]
```


<hr />
<hr />
<hr />

## JS Muscle Memory
This problem set will test your understanding of how JavaScript is evaluated.
Check your answers by running the lines code. Type out these expressions and avoid
copy & paste. Get used to typing JavaScript! Some of these answers are obvious but
run the code anyway to get familiar with the workflow for running JavaScript.
### Task 1
Predict what the following JavaScript expressions will evaluate to. 
- [ ] Complete all of these inside of the Chrome DevTools
```js
4 + 4 / 2
(2 + -7) * 3
101 % 10
12 - 4 % 3
true && false
true && !(false || false)
!true && !(false || false)
'cat' + 'dog'
2 + 'pizza'
2.5 * 'fish'
5 >= 11
5 === 5.0
7 !== 7.1
5 + 5 > 8
6 + 6 !== 12
2 > 1 || false
'true' === true
10 % 2 === 0
21 % 2 === 0
21 % 2 !== 0
21 % 2 === 1
12 % 3 === 0
9 % 3 === 0
14 % 3 === 0
'new york'[0]
'new york'[1]
'san francisco'[2 * 3]
'engineering'[3].toUpperCase()
'engineering'.indexOf('G')
'engineering'.indexOf('neer')
'engineering'.indexOf('r') > -1
'science'.indexOf('x') === -1
```
### Task 2
Predict what the `console.log` lines will print out. Test your work by writing
these code snippets to `.js` files and running them. Put each snippet into it's own
`.js` file and see what the `console.log`s print out. Reference the `running_javascript`
reading for how to run `.js` files.
```js
// 1
let idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx); // ?
idx * 2;
console.log(idx); // ?
```
```js
// 2
let num = 33;
let isEven = num % 2 === 0;
console.log(isEven); // ?
console.log(!isEven); // ?
```
```js
// 3
let str1 = 'marker';
let num = 'whiteboard'.length - str1.length;
console.log(num); // ?
let str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // ?
let char = str2[num].toLowerCase(); // ?
console.log(char + '!'); // ?
```
```js
// 4
let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1];
console.log(lastChar); // ?
console.log(sentence.indexOf(lastChar)); // ?
```
### Task 3: Conditionals
Predict what will happen in the following examples. Which `console.log`s will actually
print?
To check your work, type these code snippets to `.js` files. No copy and pasting!
After, feel free to play around with the variable (by assigning your own value)
in each example to experiment!
```js
// 5
let age = 30; // try different numbers here
if (age > 30) {
  console.log('older than 30');
} else {
  console.log('younger than 30');
}
```
```js
// 6
let str = 'pizza'; // try different strings here
if (str.length > 10) {
  console.log('long string');
} else {
  console.log('short string');
}
if (str[0] === 'p') {
  console.log('starts with p');
}
```
```js
// 7
let num = 15; // try different numbers here
if (num % 3 === 0) {
  console.log('divisible by 3');
} else if (num % 5 === 0) {
  console.log('divisible by 5');
}
```
```js
// 8
let num = 15; // try different numbers here
if (num % 3 === 0) {
  console.log('divisible by 3');
}
if (num % 5 === 0) {
  console.log('divisible by 5');
}
```
```js
// 9
let str = 'General Assembly'; // try different strings here
if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}
```
```js
// 10
let num = -44; // try different numbers here
if (num > 0) {
  console.log('positive');
} else if (num < 0) {
  console.log('negative');
} else {
  console.log(0);
}
if (num % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}
```
### Task 4: Conditional Muscle Memory
Practice typing the syntax for conditionals. **Type each snippet 10 times each to
burn the muscle memory into your typing fingers!** Be sure to use proper spacing and
indentation, type it **exactly** as shown below. Run the code after each time to make
sure it runs. You'll realize how easy it is to forget parentheses or braces. Syntax
errors like this will cause your code to be totally misunderstood by the computer.
Practice, practice, practice!
```js
let num = 11; // feel free to change the value of this variable
if (num > 5) {
  console.log('if');
}
```
```js
let num = 5; // feel free to change the value of this variable
if (num > 5) {
  console.log('if');
} else {
  console.log('else');
}
```
```js
let num = 0; // feel free to change the value of this variable
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}
```

### Task 5: Function Muscle Memory
Practice typing the syntax for functions. **Type each snippet 10 times.** Focus on using
proper style and indentation. Be sure to test your code by running it after
each repetition. You'll be surprised and also annoyed at what details you missed!
Learn from those typos.
```js
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('bootcamp prep')); // feel free to change the string being passed
```
```js
function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
console.log(checkNumber(5)); // feel free to change the number being passed
```

```js
function fizzBuzz1(max) {
  for (let i = 0; i < max; i += 1) {

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}
```

```js
function evenCaps(sentence) {
  let newSentence = "";

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (i % 2 === 0) {
      let capitalChar = char.toUpperCase();
      newSentence += capitalChar;
    } else {
      newSentence += char;
    }
  }

  return newSentence;
}
```

### Tasks 6: Complete all JavaScript Problems

- [ ] 1-tripler.js
- [ ] 2-odd-range.js
- [ ] 3-is-prime.js
- [ ] 4-cat-builder.js
- [ ] 5-value-pairs.js
- [ ] 6-does-key-exists.js
- [ ] 7-adults.js
- [ ] 8-count-scores.js
- [ ] 9-decomposition.js
