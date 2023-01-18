function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const student1 = {
    name: "Alexandr", 
    ownCity: "Moscow",
    age: 22,
    course: "Front"
  };


  console.log(showProps(student1, "same"));  // false
  console.log(showProps(student1, "name"));  // true