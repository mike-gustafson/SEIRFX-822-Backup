# JavaScript Control Flow Challenges

## Getting Started
* Fork and clone this repository
* Run html file `open "Google Chrome" index.html`

---

### FizzBuzz

Implement [Fizz Buzz](http://en.wikipedia.org/wiki/Fizz_buzz). Loop from 1 to 100. If the number is divible by both 3 and 5, print "fizzbuzz". Otherwise, if the number if divisible by 3, print "fizz", or, if the number is divisible by 5, print "buzz". If none of the above are true, print the number. This is a very common interview question!

---

### Find the Phone Number

Use a `for...in` loop to examine the `phoneBook` Object below and print out the names of all the people who share the phone number "333-333-3333".

```js
const phoneBook = {
  "Abe": "111-111-1111",
  "Bob": "222-222-2222",
  "Cam": "333-333-3333",
  "Dan": "444-444-4444",
  "Ern": "555-555-5555",
  "Fry": "111-111-1111",
  "Gil": "222-222-2222",
  "Hal": "333-333-3333",
  "Ike": "444-444-4444",
  "Jim": "555-555-5555",
  "Kip": "111-111-1111",
  "Liv": "222-222-2222",
  "Mia": "333-333-3333",
  "Nik": "444-444-4444",
  "Oli": "555-555-5555",
  "Pam": "111-111-1111",
  "Qiq": "222-222-2222",
  "Rob": "333-333-3333",
  "Stu": "444-444-4444",
  "Tad": "555-555-5555",
  "Uwe": "111-111-1111",
  "Val": "222-222-2222",
  "Wil": "333-333-3333",
  "Xiu": "444-444-4444",
  "Yam": "555-555-5555",
  "Zed": "111-111-1111"
};
```

---

### The Bouncer

Use a `for...of` loop to iterate over the array of objects below. For each attendee in the array, if their age is 21 or higher, push them into an array called `adults`, otherwise push them into an array called `minors`. Print out both arrays when finished.

```js
const attendees = [
  { name: 'Xev', age: 35 },
  { name: 'Mal', age: 29 },
  { name: 'Clos', age: 17 },
  { name: 'Gysh', age: 39 },
  { name: 'Zek', age: 10 },
  { name: 'Hops', age: 14 },
  { name: 'Sil', age: 2 1}
];
```

---

### Package Shipping

You have a set of packages to load onto a delivery truck. However, the truck has limited capacity and you cannot put more items into it than it can hold. Using a `while` loop, remove items from the `packages` array and add them into the `truck` array until the `truck` array's length equals the `truckCapacity` variable's value. Use standard array methods for removing and adding elements from/to an array. You may start at either end of the `packages` array. When you are finished, print the contents of both the `truck` and the `packages` arrays. There should not be any duplication of items between the two arrays.

```js
const truck = [];
let truckCapacity = 8;
const packages = ['skis', 'DVD', 'frisbee', 'computer', 'pizza', 'fishing pole', 'car battery', 'stereo', 'furniture', 'salad dressing', 'sunshine', 'daydreams'];
```

---

### Comparing Arrays

Because Arrays are reference variables, they actually point to locations in memory. As such, even if two arrays contain exactly the same items you will never be able to use normal comparison to check equality:

```js
const a = [1,2,3];
const b = [1,2,3];
console.log(a === b);  // This will never be true
```

Using any of the loop constructs we've learned, write a program that will check two arrays for equality. You may consider two arrays to be "equal" if and only if they contain exactly the same number of items and each item is the same type, same value, and in the same order in both arrays. Some arrays are provided below for your testing purposes. Be sure to test with different combinations to make sure your script fully works:

```js
const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];
```
---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
