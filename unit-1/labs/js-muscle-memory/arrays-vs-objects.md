<h1 align="center">JavaScript Arrays vs Objects</h1>
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
