/**
 * Exercise 1:
 * Declare variables named favBreakfast, favLunch, and favDinner.
 * Each variable should:
 *   - store a string data type.
 *   - have a value of your favorite meal.
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favBreakfast = "Toast";
var favLunch = "Hamburger";
var favDinner = "Ramen";
// --------------------------------------------------------------------------
// To test your solution, uncomment the following line and run `node app.js`
console.log("-----------\nExercise 1:\n-----------\nfavBreakfast: ".concat(favBreakfast, "\nfavLunch: ").concat(favLunch, "\nfavDinner: ").concat(favDinner, "\n"));
var mySkills = [
    {
        name: "JavaScript",
        learned: true
    },
    {
        name: "React",
        learned: true
    },
    {
        name: "TypeScript",
        learned: false
    },
];
// --------------------------------------------------------------------------
// To test your solution, uncomment the following line and run `node app.js`
console.log("-----------\nExercise 2:\n-----------\nmySkills:\n".concat(JSON.stringify(mySkills, null, 2), "\n"));
var myPerson = {
    id: 2,
    name: "Yong",
    skills: [{ name: "coding", learned: true }]
};
// --------------------------------------------------------------------------
// To test your solution, uncomment the following line and run `node app.js`
console.log("-----------\nExercise 3:\n-----------\nmyPerson:\n".concat(JSON.stringify(myPerson, null, 2), "\n"));
// --------------------------------------------------------------------------
/**
 * Exercise 4:
 * Write a function named feedPerson that accepts the following parameters:
 *   - the 3 variables from Exercise 1
 *   - myPerson
 * The function should add each of the variables to the meals array.
 * The function should not return anything.
 */
function feedPerson(favBreakfast, favLunch, favDinner, myPerson) {
    myPerson.meals = [favBreakfast, favLunch, favDinner];
}
// --------------------------------------------------------------------------
// To test your solution, uncomment the following lines and run `node app.js`
feedPerson(favBreakfast, favLunch, favDinner, myPerson);
console.log("-----------\nExercise 4:\n-----------\nmyPerson:\n".concat(JSON.stringify(myPerson, null, 2), "\n"));
// --------------------------------------------------------------------------
/**
 * Exercise 5:
 * Write a function named teachPerson that accepts the following parameters:
 *   - myPerson
 *   - an array with type Skill
 * The function should add each of the skill objects to the skills array.
 * The function should not return anything.
 */
function teachPerson(myPerson, mySkills) {
    myPerson.skills = __spreadArray(__spreadArray([], myPerson.skills, true), mySkills, true);
}
// --------------------------------------------------------------------------
// To test your solution, uncomment the following lines and run `node app.js`
teachPerson(myPerson, mySkills);
console.log("-----------\nExercise 5:\n-----------\nmyPerson:\n".concat(JSON.stringify(myPerson, null, 2), "\n"));
// --------------------------------------------------------------------------
/**
 * Exercise 6:
 * Write a function named getRandomSkill that accepts the following parameters:
 *   - myPerson
 * The function should return a random element from the skills array
 */
function getRandomSkill(myPerson) {
    var rand = Math.floor(Math.random() * myPerson.skills.length);
    return myPerson.skills[rand];
}
// --------------------------------------------------------------------------
// To test your solution, uncomment the following line and run `node app.js`
console.log("-----------\nExercise 6:\n-----------\nRandom Skill:\n".concat(JSON.stringify(getRandomSkill(myPerson), null, 2), "\n"));
// --------------------------------------------------------------------------
