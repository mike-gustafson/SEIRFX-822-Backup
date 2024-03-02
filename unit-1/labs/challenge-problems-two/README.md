# Challenge Problems Two

## Example Problems 

The challenge problems show a few examples of 'easy','medium','hard' JS problems. These examples include common JS techniques (for loops, basic array methods, and explicit if else statements. They are intended to 
## Easy Challenge Example 
```js

/******************************************************************************
Write a function peoplesNames(array) that takes in an array of objects and returns
an array containing the value for the object's 'name' property 

You can assume the array contains at least one element and all objects will have a property 'name'
Examples:
peoplesNames([{name: "Tom", age:27}]) => ["Tom"]
peoplesNames([{name: "Bridget", age:75},{name: "Marcus", age:45},{name: "Anton", age:13} ]) 
    => ["Bridget","Marcus", "Anton"]
*******************************************************************************/

// Our Function Definition
const peoplesNames = (array) => {
    let holder = []
    for(let i = 0;i<array.length;i++){
        let nameOfPerson = array[i].name
        holder.push(nameOfPerson)
    }
    return holder
}

/******************************************************************************

How the above code works: 

1. We define a holder variable, because we assign the data type we are expecting to return
2. We use an iterator (for loop) to execute some code for each object in our array
3. Push the name (stored as a variable for testing) into the holder array 
4. Return the array (with each name from the array of objects)

*******************************************************************************/
// Our Test Data ::before:: running the mocha test
const people = [
    { name: "Layla", age: 27, knownLanguages: 3},
    { name: "Keanu", age: 54, knownLanguages: 1},
    { name: "Jasmine", age: 35, knownLanguages: 2}
];

//Our output to verify expected behavior of function 
console.log(peoplesNames(people))  // expected: [ 'Layla', 'Keanu', 'Jasmine' ]

```

Notes: 
- The function below does the same thing as our example above: a) iterates over an array b) returns an array of new values returned by our call back function we pass in)

```js 

const peoplesMapNames = (array) => array.map(person=>person.name)

```

- How might one refactor the function to take a second argument `keys` that will return the corresponding `key` of each object? 

## Medium Challenge Example 

```js

/******************************************************************************
Write a function firstOrLast(array) that takes in an array and returns either:
- the first element if there is an even number of elements in the array
- the last element if there is an odd number of elemetns in the array
You can assume the array contains at least one element.
Examples:
firstOrLast(['a', 'b', 'c', 'd']) => 'a'
firstOrLast(['Jenny', 'Mary', 'Mark']) => 'Mark'
*******************************************************************************/

// Our Function Definition
function firstOrLast(array) { 
  let result;
  if (array.length % 2 === 0) {
    result = array.shift()
  } else {
    result = array.pop()
  }
  return result
}


/******************************************************************************
How the above code works: 
1. We define a temporary variable to store the result of our conditional 
2. Define our first test condition in an if/else statement
3. If the array length is even: Assign the first item from the array to the 'result' variable
4. If the array length is odd: Assign the last item of the array to 'result' variable 
5. Return the assigned result

Note the test will assume the argument passed in is an array with a length > 0. 
What might you have to change to account for an [] or an undefined argument? 
*******************************************************************************/

// Our Test Data ::before:: running the mocha test

let evenLength = [1 , 2 , 3, 4]
let oddLength = ["January", "February", "March"]

//Our output to verify expected behavior of function 

console.log(firstOrLast(evenLength))  // expected: 1
console.log(firstOrLast(oddLength))  // expected: 'March'

```

## Hard Challenge Example 

```js

/*******************************************************************************
Write a function phraseFinder(words, phrase), that takes in an array of words and a
string representing a phrase. The function should return true if the phrase can be
formed by a pair of words from the array. The function should return false if the
phrase cannot be formed by any pair of words.

Examples:

phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello world') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello goodbye') => false
*******************************************************************************/

// Our Function Definition
function phraseFinder(words, phrase) { 
  let match = 0;
  const sampleWords = phrase.split(" ");
  for (let i = 0; i < sampleWords.length; i++) {
    let test = words.includes(sampleWords[i]); // what datatype is returned by array.includes()? 
    if (test) {
      match++; 
    }
  }
  if (match === sampleWords.length) {
    return true;
  } else {
    return false;
  }
}

/******************************************************************************
  How the above code works: 
  1. We define a storage variable(number) - this will keep track of matches between our phrase(string) and the bank of words(array)
  2. We define a new variable(array) that is a conversion of our string into an array of strings (These elements are what we are testing against)
    2b. We have convert our sample string into an array because there are numerous 'search' methods that are built into JS (indexOf, find(), includes(), every())
  3. We iterate over our sampleWords so every word in our dataset is tested with the includes() method
  4. We store the value returned from the includes() in a local variable 'test'(boolean)
  5. If test is true (there is a match) - we increment the value of match otherwise we do nothing, then our for loop goes to the next element
  6. If the number of words in the phrase equals the number of matches found - then we have a full match
*******************************************************************************/

// Our Test Data ::before:: running the mocha test

  const test1 = [['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep'] 
  const test2 = [['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep'] 
  const test3 = [["world", "prep", "hello", "bootcamp"], "world prep hello Bootcamp"];
  
//Our output to verify expected behavior of function 
  console.log(phraseFinder(test1[0], test1[1])); // expected: true
  console.log(phraseFinder(test2[0], test2[1])); // expected: true
  console.log(phraseFinder(test3[0], test3[1])); // expected: false

```

Notes: 
- The includes() method checks if a value exists as an element in the array - so with strings the search is case-sensitive. How might one refactor the function to include a `case-insensitive` option? 

- As you may have noticed with the other examples we have followed a pattern for all of these problems: 

    a) Define state - some local variable that we are testing against/mutating 
    
    b) Run the iterator - we often will need to analyze/evaluate/change some dataset/subset of our inputed data
    
    c) Mutate the state - we built some control flow (if/else/switches) to change, or mutate, our data to count or match a desired format
    
    d) Format expected output - our function should return the expected datatype (string, number, boolean, array, object) our tests will take in. 


