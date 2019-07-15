// Variables
var correct = 0;
var incorrect = 0;
var questionNumber = 0;
var timer;
var intervalId;

var questions = [
    {
      question: "What is the name of Cheryl Tunt's pet ocelot?",
      answers: ["Babar", "Baloo", "Babou", "Nermal"],
      correctAnswer: 2,
    }, 
    {
      question: "Cheryl has repeatedly expressed buyer's remorse over the ocelot. Why?",
      answers: ["He pees on everything.", "It's a wild animal that shouldn't be a house pet.", "He is frequently sick, and the medical bills are outrageous.", "Nobody believes she owns an ocelot."],
      correctAnswer: 2,
    }, 
    {
      question: "In the song 'Broken Hearts and Auto Parts', what specific item did Cheryl say the ocelot peed in?",
      answers: ["Everything", "Her Purse", "Cowboy Boots", "All of her Cars"],
      correctAnswer: 1,
    }, 
    {
      question: "Upon being torn to shreds by the wild cat, Archer insists:",
      answers: ["They 'introduce' him to the wee baby Seamus.", "They buy the cat toys, and compares his living conditions to that of a concentration camp.", "They put the cat down, and with him being the one to do it.", "Cheryl let the sickness take him, like a child before the polio vaccine."],
      correctAnswer: 1,
    }, 
    {
      question: "Did the ocelot remember Archer when they were reunited on the train?",
      answers: ["Yes", "No", "Cats don't remember anybody", "Trick question, there was never a train"],
      correctAnswer: 0,
    },
    {
      question: "Ocelots are ?",
      answers: ["Awesome", "Adept at serpentining to dodge bullets", "Crepuscular", "All of the above"],
      correctAnswer: 3,
    }];


//Clear #display and show question/answers
function changeDisplayQuestion() {
    $("#display").empty();

    $("#display").append(
    "<p>" + questions[questionNumber].question + "</p>",
    "<input class='choices' type='radio'  id='0'>" + questions[questionNumber].answers[0] + "</input>",
    "<br>",
    "<input class='choices' type='radio' id='1'>" + questions[questionNumber].answers[1] + "</input>",
    "<br>",
    "<input class='choices' type='radio' id='2'>" + questions[questionNumber].answers[2] + "</input>",
    "<br>",
    "<input class='choices' type='radio' id='3'>" + questions[questionNumber].answers[3] + "</input>",
    "<br>",
    "<button id='submit'>Submit</button>",
    );
    runTimer();
};

//Final screen
function finalScreen(){
    clearInterval(intervalId);
    if (correct === questions.length) {
        $("#display").empty();
        $("#display").append("<p>You got all " + correct + " right!</p>", "<br>", "<p>You have made Babou proud. May he always remember you.</p>");
    }else if (incorrect > 0) {
        $("#display").empty();
        $("#display").append("<p>You make Babou sad. He's sick enough as is, let him be!</p>", "<br>", "<p>One wrong answeris all it took.</p>","<br>", "<p>You got " + correct + " right.</p>","<br>", "<p>You were a disappointment " + incorrect + " times.</p>" )
    }
};

//Right Answer
function rightAnswerScreen(){
    $("#display").empty();
    $("#display").append("<p>That is correct!</p>");
    correct++;
    questionNumber++;
    if (questionNumber == 6){ 
        finalScreen();
    }else {
        setTimeout(changeDisplayQuestion, 3000);
    }
};

//Wrong Answer
function wrongAnswerScreen(){
    $("#display").empty();
    $("#display").append("<p>How could you think that?</p>");
    incorrect++;
    questionNumber++;
    if (questionNumber == 6){ 
        finalScreen();
    }else {
        setTimeout(changeDisplayQuestion, 3000);
    }
};

//timeout-No Answer
function noAnswerScreen(){
    $("#display").empty();
    $("#display").append("<p>Babou is a busy guy. Do better.</p>");
    incorrect++;
    questionNumber++;
    if (questionNumber == 6){ 
        finalScreen();
    }else {
        setTimeout(changeDisplayQuestion, 3000);
    }
};

function runTimer(){
    clearInterval(intervalId); //keeps from  iterating on itself
    timer = 15;
    //console.log(timer + "timer number")
    intervalId = setInterval(decrement, 1000); //telling this to countdown
    $("#timer").html(timer);
}

function decrement(){
    if (timer == 0){
        console.log("out of time")
        clearInterval(intervalId);
        noAnswerScreen();
    } else {
        timer--;
        $("#timer").html(timer);
        console.log(timer);
    }
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
    });
    $(document).on("click", "#submit", function(){
        if ($("#" + questions[questionNumber].correctAnswer).is(":checked")){
            clearInterval(intervalId);
            rightAnswerScreen();
        }else{
            wrongAnswerScreen();
        }
        console.log("areweclicking")
    });
    // $("#disply").on("click", "#submit", function(){
    //     var userguess = $(this).text;
    //     if (userguess === questions[questionNumber].correctAnswer){
    //         clearInterval(clock);
    //         rightAnswerScreen();
    //     }if (timer === 0){
    //         noAnswerScreen();
    //     }if (usergues !== questions[questionNumber].correctAnswer){
    //         wrongAnswerScreen();
    //     }
    // })
});



