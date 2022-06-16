const findTheOldest = function() {
people.forEach(v => {v.age = people[yearOfDeath] - people [yearOfBirth]})
//const peopleage = people.map(v => ({...v, age: people[v].yearOfDeath - people[v].yearOfBirth}))
console.log(peopleage)
};

// Do not edit below this line
module.exports = findTheOldest;
