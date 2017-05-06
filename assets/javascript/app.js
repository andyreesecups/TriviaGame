var panel = $("#quiz-area");
var countStartNumber = 30;

// Question set
var questions = [{
  question: "How many championships has the San Antonio Spurs won?",
  answers: ["0", "3", "5", "6"],
  correctAnswer: "5",
  image: "assets/images/spurs.gif"
}, {
  question: "Which rapper made headlines with his silly 'Hotline Bling' dance?",
  answers: ["Snoop Dogg", "Drake", "Fred Durst", "Eminem"],
  correctAnswer: "Drake",
  image: "assets/images/drake.gif"
}, {
  question: "What year was the 'best national championship win' ever? Hint: Vince Young",
  answers: ["1994", "1988", "2007", "2006"],
  correctAnswer: "2006",
  image: "assets/images/ut.gif"
}, {
  question: "What day of the year has been adopted as 'Star Wars Day'?",
  answers: ["May 4th", "April 18th", "December 25th", "July 4th"],
  correctAnswer: "May 4th",
  image: "assets/images/starwars.gif"
}, {
  question: "What is the best show in the world?",
  answers: ["Game of Thrones", "Seinfeld", "Power Rangers", "Dragonball Z"],
  correctAnswer: "Game of Thrones",
  image: "assets/images/tyrion.gif"
}, {
  question: "What is the fastest fish in the ocean?",
  answers: ["Tiger Shark", "Sailfish", "Tuna", "Blue Marlin"],
  correctAnswer: "Sailfish",
  image: "assets/images/sailfish.gif"
}, {
  question: "In which city where the 2016 summer Olympics held?",
  answers: ["Rio, Brazil", "Jackson, Mississippi", "Flint, Michigan", "Anchorage, Alaska"],
  correctAnswer: "Rio, Brazil",
  image: "assets/images/phelps.gif"
}, {
  question: "Who won the 2016 Best Actor Oscar?",
  answers: ["Seth Rogen", "Matthew Mcconaughey", "Leonardo Dicaprio", "Casey Affleck"],
  correctAnswer: "Leonard Dicaprio",
  image: "assets/images/leo.gif"
}];

// Variable to hold our setInterval
var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.timeUp();
    }
  },

  loadQuestion: function() {

    timer = setInterval(game.countdown, 1000);

    panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }
  },

  nextQuestion: function() {
    game.counter = countStartNumber;
    $("#counter-number").html(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },

  timeUp: function() {

    clearInterval(timer);

    $("#counter-number").html(game.counter);

    panel.html("<h2>Out of Time!</h2>");
    panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
    panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(timer);

    panel.html("<h2>All done, heres how you did!</h2>");

    $("#counter-number").html(game.counter);

    panel.append("<h3>Correct Answers: " + game.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
    panel.append("<br><button id='start-over'>Start Over?</button>");
  },

  clicked: function(e) {
    clearInterval(timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    game.incorrect++;

    clearInterval(timer);

    panel.html("<h2>Nope!</h2>");
    panel.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
    panel.append("<img src='" + questions[game.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(timer);

    game.correct++;

    panel.html("<h2>Correct!</h2>");
    panel.append("<img src='" + questions[game.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

// CLICK EVENTS

$(document).on("click", "#start-over", function() {
  game.reset();
});

$(document).on("click", ".answer-button", function(e) {
  game.clicked(e);
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestion();
});



