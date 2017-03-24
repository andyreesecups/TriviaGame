var timeRemaining;
var score;
var answer;
var question;
var counter;

var questArr = [
    new Questions("Which Spice Girl is the only one actually named after a spice?", ["Ginger Spice", "Pepper Spice", "Paprica Spice", "Rosemary Spice"]),
    new Questions("What continent has the fewest flowering plants?", ["Antarctica", "Africa", "Australia", "South America"]),
    new Questions("How many NBA championships have the San Antonio Spurs won?", ["Five", "Three", "Seven", "Four"]),
    new Questions("Who averaged one patent for every three weeks of his life?", ["Thomas Edison", "Albert Einstein", "Bill Nye", "Benjamin Franklin"]),
    new Questions("What is the diameter of the Earth?", ["8,000 miles", "2,000 miles", "5,000 miles", "10,000 miles"]),
    new Questions("What is the only land mammal that can't jump?", ["Elephant", "Giraffe", "Cow", "Turtle"]),
    new Questions("Which one of these celebrities is NOT a convicted felon?", ["Snoop Dogg", "Martha Stewart", "Robert Downey Jr", "Tim Allen"]),
    new Questions("What is the fastest fish in the ocean? ", ["Sailfish", " Tuna", "Blue Marlin", ""]),
    new Questions("What year did the New Orleans Saints win the Super Bowl", ["2010", "2006", "2012", "2003"])
];

var usedQuestions = [];

function Questions(question, answers, img, time) {
    this.question = question;
    this.answers = answers;
    this.img = img || null;
    this.time = time || 7; //seconds
}

displayRandom();

//    $("#question").html("<p> " + question + "</p>");
// $("#question").html("<p> " + answer + " </p>");
// $("#time-remaining").html("<p> " + "Time Remaining: " + counter + "</p>");

// Display a random question object's question, answers, and handled time remaining
//------------------------------------------------------------------
function displayRandom() {


    // pick a random question object from the questArr
    //-----------------------------------------------

    // picking a random index between 0 and one less than the length of the questArr
    var index = Math.floor(Math.random() * questArr.length);

    // picking the random question objects from the questArr array
    var questObj = questArr[index];

    // Display the random question object's question
    //-----------------------------------------------

    // pull question from the random question object
    var question = questObj.question;

    // display question in console
    // console.log(question);


    // Display the random question object's answers
    //-----------------------------------------------

    // pull the answers array from the random question object
    var answers = questObj.answers;

    // pick the answers from the answers array
    //-----------------------------------------------
    // loop through the array 
    for (var i = 0; i < answers.length; i++) {
        //pick the answer from the answers array at the index 'i'
        var answer = answers[i];

        //display answer in console
        // console.log(answer);
        $("#question").html("<p> " + answer + "</p>");
        $("#question").html("<p> " + question + "</p>");
        $("#timeremaining").html("<p> " + "Time Remaining: " + counter + "</p>");

    }




    // Display the random question object's time remaining
    //-----------------------------------------------

    //pulled the time from the random question object
    var counter = questObj.time; // var counter = 5;

    // create an interval to calculate time remaining
    var interval = setInterval(function() {
        //decrement counter to calculate time remaining
        counter--;

        // displaying time remaining in console	
        console.log(counter);

        // Handle running out of time
        if (counter <= 0) {
            // stop calculating time remaining 
            clearInterval(interval);
            shiftQuestionObj(index);
        }
    }, 1000);



}

// Put the random question object in the usedQuestions array and remove it from the questArr array
//--------------------------------------------------------------------------------------------------
function shiftQuestionObj(index) {
    // Remove the random question object from the questArr array
    var object = questArr.splice(index, 1);

    // Push the random question object into the usedQuestions array
    usedQuestions.push(object[0]);

    console.log(questArr);
    console.log(usedQuestions);

}

// Once the Start button is clicked generate a random Question and start counter
document.getElementById("startreset").onclick = function() {
    displayRandom();

}






// If user picks the correct answer
//-----------------------------------
// stop counter

//increase score by 1

//generate a new random question and answers

//and start counter after 5 seconds without user input

//else
//-----------------------

//stop counter

// show counter after 5 seconds

//generate a new question and answers
