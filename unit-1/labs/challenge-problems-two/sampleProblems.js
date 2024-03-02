const easyProblemExample = () => {
  const test1 = [{ name: "Tom", age: 27 }];
  const test2 = [
    { name: "Bridget", age: 75 },
    { name: "Marcus", age: 45 },
    { name: "Anton", age: 13 },
  ];
  const test3 = [
    {
      name: "Layla",
      age: 27,
      knownLanguages: 3,
    },
    {
      name: "Keanu",
      age: 54,
      knownLanguages: 1,
    },
    {
      name: "Jasmine",
      age: 35,
      knownLanguages: 2,
    },
  ];
  const peoplesNames = (array) => {
    let holder = [];
    for (let i = 0; i < array.length; i++) {
      let nameOfPerson = array[i].name;
      holder.push(nameOfPerson);
    }
    return holder;
  };
  console.log(peoplesNames(test1));
  console.log(peoplesNames(test2));
  console.log(peoplesNames(test3));
};

const mediumProblemExample = () => {
  // Sample Data for testing
  let evenLength = [1, 2, 3, 4];
  let oddLength = ["January", "February", "March"];

  // Our locally scoped function
  function firstOrLast(array) {
    let result;
    if (array.length % 2 === 0) {
      result = array.shift();
    } else {
      result = array.pop();
    }
    return result;
  }

  //Our custom test to verify expected behavior for problem tests 1/2
  console.log(firstOrLast(evenLength), ">> expected: 1");
  console.log(firstOrLast(oddLength), ">> expected: 'March'");
};

const hardProblemExample = () => {
  
  function phraseFinder(words, phrase) {
    let match = 0;
    const sampleWords = phrase.split(" ");
    for (let i = 0; i < sampleWords.length; i++) {
      let test = words.includes(sampleWords[i]); // what datatype is returned by includes()? 
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

  const test1 = [['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep'] 
  const test2 = [['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep'] 
  const test3 = [["world", "prep", "hello", "bootcamp"], "world prep hello bootcamp"];
  
  console.log(phraseFinder(test1[0], test1[1])); // expected: true
  console.log(phraseFinder(test2[0], test2[1])); // expected: true
  console.log(phraseFinder(test3[0], test3[1])); // expected: false
};


// OUR TESTS
// easyProblemExample();
// mediumProblemExample();
// hardProblemExample();
