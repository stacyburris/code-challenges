'use strict';

// What is a hash table?
    // Hash Table = array of key/value pairs that use complicated math to determine WHERE/HOW to store that data to be accessed later
    // Benefits: SPEED, SPEED, SPEED, Structure
    // You can't have a null key
    // They might be unordered - you have to know what you are looking for

// Write a function that takes a list of (prerequisite , course) pairs, and returns the name of the course that the student will be taking when they are halfway through the course track.


//Sample input: (arbitrary ordered)

preReq_courses1 = [
    ["Data Structures", "Algorithms"],
    ["Foundations of Computer Science", "Operating Systems"],
    ["Computer Networks", "Computer Architecture"],
    ["Algorithms", "Foundations of Computer Science"],
    ["Computer Architecture", "Data Structures"],
    ["Software Design", "Computer Networks"]
]

// Order of courses would be 
    // Software Design
    // Computer Networks
    // Computer Architecture
    // Data Structures
    // Algorithms
    // Foundations of Computer Science
    // Operating Systems

// Sample output 1:
    // "Data Structures"

// USING A HASH TABLE!
// {'Data Structures': 'Algorithms',
// 'Foundations of Computer Science': 'Operating Systems',
// 'Computer Networks': 'Computer Architecture',
// 'Algorithms': 'Foundations of Computer Science',
// 'Computer Architecture': 'Data Structures',
// 'Software Design': 'Computer Networks'}

// Finding thr start - How do we know which class is FIRST?
    // It is the only one that IS a prereq, but does not have a rereq.

    // for key in obj.keys():
    // if key not in Object.values();
    // first_class = key

// LOOPING THE HASH TABLE
// -- Start with the First Class = 
//'Software Design' --> 
//'Computer Networks' --> 
//'Computer Networks' --> 
//'Computer Architecture' --> and so on -->
// How to know when to stop looping: When we've hit the middle point of length of the classes


// TODO: To be continued with a fresh set of eyes :( 
function findMid(preReq_courses1) {
    console.log(preReq_courses1)
      let classes = [];
      let firstClass = 0;
      let currentClass = '';
      let courseLength = preReq_courses1.length + 1;
      console.log(courseLength) // =7
      let coursesSeen = 0;
      let coursesWithoutPreReq = new Set();
      console.log('set = -----', coursesWithoutPreReq)
      // Build Hash Table
      let keyOfObject = Object.keys(classes);
      console.log('keys = ----', keyOfObject)
      if (!keyOfObject === coursesWithoutPreReq ) {
          firstClass = keyOfObject;
          currentClass = firstClass;   
      }
  
      while(coursesSeen != (courseLength / 2)) {
          currentClass = classes[currentClass]
         
      }    
          let middleClass = currentClass;
          coursesSeen += 1 
   console.log(middleClass)  
  return middleClass;
  
  }
  console.log(findMid(preReq_courses1));