// Variables
var correct = 0;
var incorrect = 0;
var questionNumber = 0;
var timer = 15;

var questions = [
    {
      question: "What is the name of Cheryl Tunt's pet ocelot?",
      answers: ["Babar", "Baloo", "Babou", "Nermal"],
      correctAnswer: "Babou"
    }, 
    {
      question: "Cheryl has repeatedly expressed buyer's remorse over the ocelot. Why?",
      answers: ["He pees on everything.", "It's a wild animal that shouldn't be a house pet.", "He is frequently sick, and the medical bills are outrageous.", "Nobody believes she owns an ocelot."],
      correctAnswer: "He is frequently sick, and the medical bills are outrageous."
    }, 
    {
      question: "In the song 'Broken Hearts and Auto Parts', what specific item did Cheryl say the ocelot peed in?",
      answers: ["Everything", "Her Purse", "Cowboy Boots", "All of her Cars"],
      correctAnswer: "Her Purse"
    }, 
    {
      question: "Upon being torn to shreds by the wild cat, Archer insists:",
      answers: ["They 'introduce' him to the wee baby Seamus.", "They buy the cat toys, and compares his living conditions to that of a concentration camp.", "They put the cat down, and with him being the one to do it.", "Cheryl let the sickness take him, like a child before the polio vaccine."],
      correctAnswer: "They buy the cat toys, and compares his living conditions to that of a concentration camp."
    }, 
    {
      question: "Did the ocelot remember Archer when they were reunited on the train?",
      answers: ["Yes", "No"],
      correctAnswer: "Yes"
    },
    {
      question: "Ocelots are ?",
      answers: ["Awesome", "Adept at serpentining to dodge bullets", "Crepuscular", "All of the above"],
      correctAnswer: "All of the above"
    }];


//Clear #display and show question/answers
function changeDisplayQuestion() {
    $("#display").empty();

    $("#display").append("<p> Time Remaining: " + timer + " seconds</p>",
    "<p>" + questions[questionNumber].question + "</p>",
    "<input class='choices' type='radio' value='1'>" + questions[questionNumber].answers[0] + "</input>",
    "<br>",
    "<input class='choices' type='radio' value='2'>" + questions[questionNumber].answers[1] + "</input>",
    "<br>",
    "<input class='choices' type='radio' value='3'>" + questions[questionNumber].answers[2] + "</input>",
    "<br>",
    "<input class='choices' type='radio' value='4'>" + questions[questionNumber].answers[3] + "</input>",
    );
};

//Final screen
function finalScreen(){
    if (correct === questions.length) {
        $("#display").empty();
        $("#display").append("<p>You got all " + correct + " right!</p>", "<br>", "<p>You have made Babou proud. May he always remember you.</p>");
    }else if (wrong > 0) {
        $("#display").empty();
        $("#display").append("<p>You make Babou sad. He's sick enough as is, let him be!</p>", "<br>", "<p>" + incorrect + " wrong is all it took.</p>")
    }
};

//Right Answer
function rightAnswerScreen(){
    $("#display").empty();
    $("#display").append("<p>That is correct!</p>");
    correct++;
    setTimeout(changeDisplayQuestion, 5000);
    questionNumber++;
};

//Wrong Answer
function wrongAnswerScreen(){
    $("#display").empty();
    $("#display").append("<p>How could you think that?</p>");
    incorrect++;
    setTimeout(changeDisplayQuestion, 5000);
    questionNumber++;
};

//timeout-No Answer
function noAnswerScreen(){
    $("#display").empty();
    $("#display").append("<p>Babou is a busy guy. Do better.</p>");
    incorrect++;
    setTimeout(changeDisplayQuestion, 5000);
    questionNumber++;
};

var clock = setInterval(countDown, 1000);
    function countDown(){
        if (timer > 0) {
            time--;
        }if (timer <= 0){
            clearInterval(clock);
            noAnswer();
        };
};

function determineEnd(){
    if (questionNumber < questions.length){
        timer = 15;
        changeDisplayQuestion();
    }else {
        finalScreen();
    };
};

$(document).ready(function (){
    $("#start").click(function (){
        changeDisplayQuestion();
        countDown();
    });

    $("#disply").on("click", ".choices", function(){
        var userguess = $(this).text;
        if (userguess === questions[questionNumber].correctAnswer){
            clearInterval(clock);
            rightAnswerScreen();
        }if (timer === 0){
            noAnswerScreen();
        }if (usergues !== questions[questionNumber].correctAnswer){
            wrongAnswerScreen();
        }
    })
});



