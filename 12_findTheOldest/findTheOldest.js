const findTheOldest = (people) => {
        const currentYear = new Date().getFullYear(); // Get the current year
    
        return people.reduce((oldest, person) => {
            // Calculate age for each person
            const ageOfPerson = (person.yearOfDeath || currentYear) - person.yearOfBirth;
            const ageOfOldest = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
    
            // Return the person with the greatest age
            return ageOfPerson > ageOfOldest ? person : oldest;
        });
    };


// Do not edit below this line
module.exports = findTheOldest;
