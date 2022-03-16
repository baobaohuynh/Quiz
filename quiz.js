//Variables
var current = 0;
var answer = [];
var score = 0;

//Main function
$(document).ready(function(){
    $('#question-form').hide();
    $('#pre').hide();
    $('#next').hide();
    $('#submit').hide();
    $('.result-container').hide();

    //Add question
    function add_question(data, i) {
        $('#question').text(data[i].Question);
        $('#a').text(data[i].A);
        $('#b').text(data[i].B);
        $('#c').text(data[i].C);
        $('#d').text(data[i].D);
    }

    //Control Management
    function control() {
        $('#question-form').show();    
        if(current > 0) {
            $('#pre').show();
            $('#next').show();
            $('#submit').hide();
            if(current == quizData.length) {
                $('#submit').show();
                $('#next').hide();
                $('#pre').hide();
                $('#question-form').hide(); 
            }
        }
        else{
            $('#pre').hide();
            $('#submit').hide();
        }
    }

    //Start button
    $('#start').click(function(){
        $('#question-form').show();        
        $('#pre').hide();
        $('#next').show();
        $('#start').hide();
        add_question(quizData, current);
    });

    //Previous button
    $('#pre').click(function(){
        current--;
        control();
        add_question(quizData, current);
        select_answer();
    });

    //Next button
    $('#next').click(function(){
        current++;
        control();
        add_question(quizData, current);
        select_answer();
    });

    //select option button
    $('.btn').click(function() {
        $(this).addClass('active');
        $(this).siblings().removeClass("active");
        answer[current] = $(this).html();
    });

    //select answer
    function select_answer() {
        for(var i = 0; i < quizData.length - 1; i++){
            var choice = document.getElementById('option').children;
            if(choice[i].innerHTML == answer[current]){
                $('#option').children('.btn')[i].classList.add("active");
            }
            else{
                $("#option").children('.btn')[i].classList.remove("active");
            }
        }
    }

    //result
    
    function result(data) {
        for(var i = 0; i < 5; i++) {
            if(answer[i] == data[i].Answer){
                score = score + 5;
            }
        }
        $('.score-text').text("Your score: " + score);
        $('.result-container').show();
    }

    //submit button
    $('#submit').click(function() {
        result(quizData);
        $('#question-form').hide();
        $('#pre').hide();
        $('#submit').hide();
    });

});

//  DATA
var quizData = [
    {
        Question: 'Question 1. What is the supreme law of the land?',
        A: 'The Constitution',
        B: 'The Supreme Court',
        C: 'The Bill of Rights',
        D: 'The Declaration of Independence',
        Answer: 'The Constitution'
    },

    {
        Question: 'Question 2. How many amendments does the Constitution have?',
        A: '10',
        B: '5',
        C: '102',
        D: '27',
        Answer: '27'
    },
    
    {
        Question: 'Question 3. What is the economic system in the United States?',
        A: 'Capitalism',
        B: 'Marxist economy',
        C: 'Socialist economy',
        D: 'Communist economy',
        Answer: 'Capitalism'
    },

    {
        Question: 'Question 4. Name one power of the U.S. Congress.',
        A: 'Writes laws',
        B: 'Declares war',
        C: 'Makes the fedaral budget',
        D: 'All of the above',
        Answer: 'All of the above'
    },

    {
        Question: 'Question 5. Who vetoes bills',
        A: 'A Member of Congress',
        B: 'The President',
        C: 'Supreme Court Justices',
        D: 'All of the above',
        Answer: 'The President'
    }
]


