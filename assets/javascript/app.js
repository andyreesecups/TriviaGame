var questArr = [
	new Questions("question1", ["answer1-1", "answer2-1"]),
	new Questions("question2", ["answer1-2", "answer2-2"]),
	new Questions("question3", ["answer1-3", "answer2-3"]),
	new Questions("question4", ["answer1-4", "answer2-4"]),
	new Questions("question5", ["answer1-5", "answer2-5"]),
	new Questions("question6", ["answer1-6", "answer2-6"])
];

var usedQuestions = [];

function Questions(question, answers, img, time) {
	this.question = question;
	this.answers = answers;
	this.img = img || null;
	this.time = time || 30; //seconds
}

displayRandom();

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
		console.log(question);

	// Display the random question object's answers
		//-----------------------------------------------

		// pull the answers array from the random question object
		var answers = questObj.answers;

		// pick the answers from the answers array
		//-----------------------------------------------
			// loop through the array 
			for(var i = 0; i < answers.length; i++) {
				//pick the answer from the answers array at the index 'i'
				var answer = answers[i];

				//display answer in console
				console.log(answer);
			}

	// Display the random question object's time remaining
		//-----------------------------------------------

		//pulled the time from the random question object
		var counter = questObj.time; // var counter = 5;
		
		// create an interval to calculate time remaining
		var interval = setInterval(function(){
			//decrement counter to calculate time remaining
			counter--;

			// displaying time remaining in console	
			console.log(counter);

			// Handle running out of time
			if(counter <= 0) {
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

// 


