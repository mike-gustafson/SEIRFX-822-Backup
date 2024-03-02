this_works = True

# ====================================================================
# TODO Problem 1: count_scores
"""
Write a method `count_score(people)` that takes in an list of score
objects (people) as its input. A score object has two key-value pairs:
a name (string) and a score (int). `count_score(people)` should
return an object that has key-value pairs where each name is a key and
the value is their total score.

Example 1

ppl = [ 
    { "name": "Pete", "score": 10 },
    { "name": "Mike", "score" : 10 },
    { "name": "Pete", "score": -8 },
    { "name": "Dexter", "score": 12 }
]

count_result = count_score(ppl);
print(count_result) => { "Pete": 2, "Mike": 10, "Dexter": 12 }

Example 2

peeps = [
  { "name": "Pete", "score": 2 },
  { "name": "Dexter", "score": 2 },
  { "name": "Mike", "score": 2 },
  { "name": "Dexter", "score": 2 },
  { "name": "Mike", "score": 2 },
  { "name": "Pete", "score": 2 },
  { "name": "Dexter", "score": 2 }
];

count_score(peeps) => { "Pete": 4, "Mike": 4, "Dexter": 6 }
"""

# Data
ppl = [ 
    { "name": "Pete", "score": 10 },
    { "name": "Mike", "score" : 10 },
    { "name": "Pete", "score": -8 },
    { "name": "Dexter", "score": 12 }
]

peeps = [
  { "name": "Pete", "score": 2 },
  { "name": "Dexter", "score": 2 },
  { "name": "Mike", "score": 2 },
  { "name": "Dexter", "score": 2 },
  { "name": "Mike", "score": 2 },
  { "name": "Pete", "score": 2 },
  { "name": "Dexter", "score": 2 }
];

"""
JavaScript Solution
function countScores(people) {
  const results = {};

  // set up a for loop
  for (let i = 0; i < people.length; i++) {
    let person = people[i];

    if (results[person.name] === undefined) {
      results[person.name] = person.score; 
    } else {
      results[person.name] += person.score;
    }
  }

  return results;
}
"""

def count_score(people):
    """Rewrite javascript solution to method"""
    pass


# ====================================================================
# TODO Problem 2: adults
"""
Write a method `adults(people)` that takes in an array of person
objects. The method should return a list containing the names of
those who have an age of 21 or higher.

Example:

ppl = [
  { "name": 'Khalid Robinson', "age": 22 },
  { "name": 'Ariel Winter', "age": 20 },
  { "name": 'Post Malone', "age": 25 },
  { "name": 'Willow Smith', "age": 17 }
]

adults(ppl) # => [ 'Khalid Robinson', 'Post Malone' ]

"""

def adults(people):
    """Write solution to function and test. Remove pass to start"""
    pass

# ====================================================================
# TODO Problem 3: is_prime

"""
Define a function `is_prime(number)` that returns `True` if `number` is prime.
Otherwise, False. Assume `number` is a positive integer.

Examples:

is_prime(2); # => True
is_prime(10); # => False
is_prime(11); # => True
is_prime(9); # => False
is_prime(2017); # => True

"""

def is_prime(number):
    """Write solution to method and test. Remove pass to start"""
    pass

# ====================================================================
# TODO Problem 4: tripler

"""
Write a method tripler(array) that takes in an list and returns a new list
containing 3 times every element of the original list.

Examples:

tripler([1,2,3]); # => [ 3, 6, 9 ]
tripler([4, 1, 7]); # => [ 12, 3, 21 ]
"""

def tripler(array):
    """Write solution to method and test. Remove pass to start"""
    pass


# ====================================================================
# TODO Problem 5: cat_builder

"""
Write a method `cat_builder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:

cat1 = cat_builder('Garfield', 'golden', ['scratching-post', 'yarn']);
print(cat1)  # => { "name": 'Garfield', "color": 'golden', "toys": ['scratching-post', 'yarn'] }

cat2 = cat_builder('Whiskers', 'rainbow', ['poptarts']);
print(cat2) # => { "name": 'Whiskers', "color": 'rainbow', "toys": [ 'poptarts' ] }
"""

def cat_builder(name, color, toys):
    """Write solution to method and test. Remove pass to start"""
    pass