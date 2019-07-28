var correctAnswers = 0;
var wronganswers = 0;
var unanswererd = 0;

var questions = [
    {
        question: "What is the capital of vietnam?",
        options: ["Da Nang", "Hue", "Hanoi", "Nha Trang"],
        answer: 2
    },
    {
        question: "What is the biggest city in the US?",
        options: ["Los Angeles", "Chicago", "Washington DC", "New York", "San Francisco"],
        answer2: 3
    },
    {
        question: "What is the capital of The state of North Carolina?",
        options: ["Raleigh", "Charlotte", "Boone", "Asheville", "Wilmington"],
        answer3: 0
    },
    {
        question: "Which ocean lies on the east coast of the United States?",
        options: ["Pacific", "Atlantic", "Indian", "Arctic"],
        answer4: 1
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Congo", "Mississipi", "Nile"],
        answer5: 3
    }
];
   
    $("#question1").html("<h2>" + questions[0].question + "</h2>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" +  questions[0].options[0] 
                     + "<input type='radio' name='answer1' value='1'>"  + questions[0].options[1] 
                     + "<input type='radio' name='answer1' value='2'>" + questions[0].options[2] 
                    + "<input type='radio' name='answer1' value='3'>"  + questions[0].options[3]
                   
    );
    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + questions[1].options[0] 
        + "<input type='radio' name='answer2' value='1'>"  + questions[1].options[1] 
        + "<input type='radio' name='answer2' value='2'>" + questions[1].options[2] 
        + "<input type='radio' name='answer2' value='3'>"  + questions[1].options[3]
        + "<input type='radio' name='answer2' value='4'>"  + questions[1].options[4]
    );
   

    $("#question3").html("<h3>" + questions[2].question + "</h3>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].options[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>"  + questions[2].options[1] 
        + "<input type='radio' name='answer3' value='2'>" + questions[2].options[2] 
        + "<input type='radio' name='answer3' value='3'>" +  questions[2].options[3] 
        + "<input type='radio' name='answer3' value='2'>" +  questions[2].options[4]
    );

    $("#question4").html("<h3>" + questions[3].question + "</h3>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].options[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>"  + questions[3].options[1] 
        + "<input type='radio' name='answer4' value='2'>" + questions[3].options[2] 
        + "<input type='radio' name='answer4' value='3'>" +  questions[3].options[3] 
       
    );
    $("#question5").html("<h3>" + questions[4].question + "</h3>");
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[3].options[0] + "</label>"
        + "<input type='radio' name='answer5' value='1'>"  + questions[4].options[1] 
        + "<input type='radio' name='answer5' value='2'>" + questions[4].options[2] 
        + "<input type='radio' name='answer5' value='3'>" +  questions[4].options[3] 
    );
   // function display_questions(){
     //   for(var i = 0; i < questions.length; i++){
       //     var newDiv = $("<div>");
        
         //   newDiv.text(questions[0].question);
           // newDiv.text(questions[1].question1);
           // newDiv.text(questions[2].question2);
           // newDiv.text(questions[3].question3);
        // $("#questions_display").append(newDiv, "<br>");
        //}
    //}
    function countdown(){
        var counter = 30;
        var interval = setInterval(function(){
            counter--;
            if(counter >= 0){
                $("#countdown").html(counter);
            }
            if(counter === 0){
                clearInterval(interval);
            }
        }, 1000);
    }

    
    $("#start").on("click", function(){
        $(this).hide();
        
        countdown();
        
       // display_questions();
        
            
     });

    

     
    
 
     

   