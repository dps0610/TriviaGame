// Variables
var correct = 0;
var incorrect = 0;
var timeToGuess = 15;
var questionOn = 0;

//create questions obj, possible answer arr, and correct answer

var questions = [ {
    question: "Cheryl Tunt owns a pet ocelot, what is his name?",
    answers: ["Baloo", "Babar", "Babou", "Nermal"],
    correctAnswer: "Babou",
    },
{   question: "Cheryl expresses buyer's remorse regarding the ocelot. What is her reasoning?",
    answers: ["It's a wild animal, and deserves freedom", "It's constantly sick, and expensive to take care of","He pees on literally everything", "Nobody believes she actually owns an ocelot"],
    correctAnswer: "It's constatly sick, and expensive to take care of",
},
{   question: "Upon being nearly torn to shreds by the wild cat, Archer insists:",
    answers: ["They need to buy it toys, and compares its living quarters to a concentration camp", "They need to put it down, and he wishes to do it", "They need to 'introduce him to the wee baby Seamus", "Cheryl let the sickness take him, like a mother who refuses to vaccinate their child"],
    correctAnswer: "They need to buy it toys, and compares its living quarters to a concentration camp",
},
{   question: "In the song 'Broken Hearts and Auto Parts' Cheryl specifically mentions the ocelot peeing in what?",
    answers: ["Every single car she owns", "Her purse", "Her cowboy boots", "Her morning grapefruit"],
    correctAnswer: "Her purse",
},
{   question: "Did the cat remember Archer when the reunited on the train?",
    answers: ["Yes", "No"],
    correctAnswer: "Yes",
},
{   question: "Ocelots are: ",
    answers: ["Awesome", "Crepuscular", "Adept at serpentining to dodge bullets", "All of the above"],
    correctAnswer: "All of the above",
}];



