let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);

let firstInitial = jsCreator[0];
let lastInitial = jsCreator[8];

let outputStr = "JavaScript was created by somebody with initials " + 
   firstInitial + "." +
   lastInitial + ".";

console.log(outputStr);

//let phrase = 'Code for fun';
//console.log(phrase[2]);

let myStr = 'Index';
console.log(myStr[2] === 'n');
console.log(myStr[4] === 'x');
console.log(myStr[6] === ' ');
console.log(myStr[0] === 'I');

let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);

let firstName = "Grace";
let lastName = "Hopper";

console.log(firstName, "has", firstName.length, "characters");
console.log(lastName, "has", lastName.length, "characters");

let nonprofit = "LaunchCode";

console.log(nonprofit.toLowerCase());
console.log(nonprofit);

const word = "Rutabaga;  stem";
console.log(word.length);
console.log(word[8]);

//const classes = "science";
const classes = ["science", "computer", "art"];
console.log(classes.length);
const teachers = ["Jones", "Willoughby", "Rhodes"];

console.log(teachers.length);
/*
let cityName = "Vienna";
let stateName = "Virginia";
//let location = stateName;
//let location = cityName + ",";
let location = cityName + ", " + stateName;

console.log(location.length);

let nonProfit = "Launchcode";

console.log(nonProfit);
nonProfit[6] = "C";
console.log(nonProfit);

//let nonProfit = "Launchcode";
nonProfit = "LaunchCode";

console.log(nonProfit);

let pet = 'cat';
console.log(pet + 's');
console.log(pet);
console.log(pet += 's');
console.log(pet);

let Nonprofit = "LaunchCode";

console.log(Nonprofit.toLowerCase());
console.log(Nonprofit);
*/
let wWord = 'JavaScript';
console.log(wWord.toUpperCase());
console.log(wWord.slice(4).toUpperCase());

let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
console.log(language);
/*
let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

let pluralNoun = "cats";
let name = "Oliver" ;
let verb = "walked" ;
let adjective = "fluffy" ;
let color = "Blue" ;

console.log("JavaScript provides a "+ color +" collection of tools — including " + adjective + " syntax and " + pluralNoun + " — that allows "+ name +" to "+ verb +" with strings.")

const classes = ["science, computer, art"];

const teachers = ["Jones", "Willoughby", "Rhodes"];

console.log(classes.length);
console.log(teachers.length);
*/
/*
let  language = 'JavaScript';
console.log(language.slice(1,6));
*/
/*
let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

const school = [
    ["science", "computer", "art"],
    ["Jones", "Willoughby", "Rhodes"]
 ];
console.log(school); 

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);

let str = 'LaunchCode students rock!';
console.log(str.split(" "));

*/

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);

/*
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

arr.splice(2);    //Everything from index 2 and beyond is removed.
console.log(arr);
*/
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

arr.splice(2,3);    //Start at index 2 and remove 3 total entries.
console.log(arr);

arr.splice(1,1);    //Start at index 1 and remove 1 entry.
console.log(arr);