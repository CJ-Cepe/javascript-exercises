const findTheOldest = function(people) {
    let currentOldestAge = 0
    let currentOldestPerson
    let date = new Date()

    people.map(person => {
        let age
        if(person.yearOfDeath){
            age = person.yearOfDeath - person.yearOfBirth
        } else {
            age = date.getFullYear() - person.yearOfBirth
        }
        
        if (currentOldestAge < age) {
            currentOldestAge = age
            currentOldestPerson = person
        }
    })

    console.log(currentOldestPerson.name)
    return currentOldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
