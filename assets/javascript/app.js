var questions = [
    {
        question: "What is the capital of vietnam?",
        options: ["Da Nang", "Hue", "Hanoi", "Nha Trang"],
        answer: "Hanoi"
    },
    {
        question: "What is the biggest city in the US?",
        options: ["Los Angeles", "Chicago", "Washington DC", "New York", "San Francisco"],
        answer: "New York"
    },
    {
        question: "What is the capital of The state of North Carolina?",
        options: ["Raleigh", "Charlotte", "Boone", "Asheville", "Wilmington"],
        answer: "Raleigh"
    },
    {
        question: "Which ocean lies on the east coast of the United States?",
        options: ["Pacific", "Atlantic", "Indian", "Arctic"],
        answer: "Atlantic"
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Congo", "Mississipi", "Nile"],
        answer: "Nile"
    }
];

var timer;
//declared object name game
var game = {
  correct: 0,
  incorrect: 0,
  
  counter: 30,
  
  countdown: function() {
      //Accesing object property decrementing objectName.propertyName
    game.counter--;
    $("#counter-number").html(game.counter);
    //Game ends when counter is at 0
    if (game.counter === 0) {
        
      console.log("TIME UP");
      //accesing objects method done
      
      game.done();
    }
    
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);
    //once the start button is clicked, the button disapear and game starts
    $("#sub-wrapper").prepend(
      "<h1>Trivia Game</h1>",
      "<h2 >Time Remaining: <span id='counter-number'>30</span> Seconds</h2>"
    );

    $("#start").remove();
     //var ranArray= questions[Math.floor(Math.random()*items.length)];

    for (var i = 0; i < questions.length; i++) {
     
      $("#quiz-area").append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].options.length; j++) {
        $("#quiz-area").append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].options[j] + "''>" + questions[i].options[j]);
      }
    }
    
    $("#quiz-area").append("<button id='done' class='tn btn-secondary btn-lg btn-block' >Done</button>");
    
  },

  done: function() {
    var inputs = $("#quiz-area").children("input:checked");
    console.log('inputs', inputs)
    for (var i = 0; i < inputs.length; i++) {
      const userAnswer = $(inputs[i]).val();
      if (userAnswer === questions[i].answer) {
        game.correct++;

      }
      else  {
        game.incorrect++;
      } 
     
}
    this.result();
  },

  result: function() {
    clearInterval(timer);
    
    var answerInputs = $("#quiz-area").children("input:checked");
    const unanswered = questions.length - answerInputs.length;
    $("#sub-wrapper h2").remove();

    $("#quiz-area").html("<h2>All Done!</h2>");
    $("#quiz-area").append("<h3>Correct Answers: " + this.correct + "</h3>");
    $("#quiz-area").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    $("#quiz-area").append("<h3>Unanswered Questions: " + unanswered + "</h3>");
  }
};

$(document).on("click", "#start", function() {
    game.start();
  });
  
  $(document).on("click", "#done", function() {
    game.unanswered++;
    game.done();
  });
  


   
    
   
    
  //  
    //unction countdown(){
       // var counter = 30;
        //var interval = setInterval(function(){
          //  counter--;
           // if(counter >= 0){
             //   $("#countdown").html(counter);
           // }
            //if(counter === 0){
              //  clearInterval(interval);
            //}
        //}, 1000);
   // }

    
   

     
    
 
     

   