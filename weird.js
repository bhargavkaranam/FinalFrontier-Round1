 var questions = ['Who am I?', 'What is my name', 'What is your name?'];
     var tries = [];
     var path = require ('path');
     var score = 0;
     var isCheck = 1;
     var answers = ['Ankit', 'Gohel', 'Divyanshu'];
     var titles =['a','b','c'];
     var dataStore = require('nedb');
     var db = new dataStore({
         filename: 'test.db', // for testing purposes, before building, change filename to - path.join(require('nw.gui').App.dataPath,'test.db')
         autoload: true
     });
 
     $(document).ready(function() {

        splashScreen();
        onRestartApp();
        //subjectiveQuestion();

        db.find({}, function (err, docs) {
           for(var i =0; i<docs.length;i++)
           {
                tries[docs[i].question - 1] = docs[i].tries;

                if (docs[i].score > score)
                    score = docs[i].score;
           }

           $('.score').html('Your score : ' + score);
           for(var i =0;i<15;i++)
            {
                if(tries[i] == null)
                    tries[i] = 0;
            }

             $('.remaining-tries').html('Remaining tries : ' + (3-tries[0]));
        });
 
         $(".question-tab").click(function() {

            var current_question = Number($(this).attr('id'));
            $('.title').html(titles[current_question-1]);
            $('.question_no').html(current_question);
            $('.question').html(questions[current_question - 1]);
            $('.remaining-tries').html('Remaining tries : ' + (3-tries[current_question - 1]));
         });
 
        

         $('.check').click(function() {
                var answer = $('.answer-entered').val();
                var current_question = Number($('.question_no').text());
                var isCorrect = 0;

                db.find({question : current_question}, function (err,docs) {
                    if(docs.length != 0)
                    {
                        if(docs[0].correct == 1)
                        {
                            alert('You have already answered this question correctly');
                            isCheck = 0;
                        }
                    }
                });

                console.log(isCheck);
                if (isCheck != 0)
                {
                    if (tries[current_question - 1] < 3) 
                    {

                        var doc = {
                            question: current_question,
                            answer: answer,
                            tries: null,
                            correct:null,
                            score: null
                        };

                        if (answer == answers[current_question - 1]) 
                        {

                            isCorrect = 1;
                            doc.correct =1;

                             db.find({question : current_question} ,function(err,docs) {

                                   var count = docs.length;

                                   if(count == 0)
                                   {
                                       if(current_question <= 9)
                                           score += 20;
                                       else
                                           score += 50;
                                   }
                                   else if (docs[0].correct == 0)
                                   {
                                       if(current_question <= 9)
                                           score+=20;
                                       else
                                           score+=50;
                                   }

                                   doc.score = score;
                               });



                            $(".kaiser-container").fadeTo(500, 0.3, function() {
                                $('.score').html('Your score : ' + score);

                                $('.svg-container').fadeIn();
                                $(".trigger").addClass("drawn");
                                $('.svg-container').delay('slow').fadeOut('slow', function() {
                                    $(".kaiser-container").css('opacity', 1);
                                    $('#' + current_question).css('background-color', '#1b5e20');
                                    $(".trigger").removeClass("drawn");
                                });
                            });
                            
                            tries[current_question - 1] += 1;
                            doc.tries = tries[current_question-1];
                            $('.remaining-tries').html('Remaining tries : ' + (3-tries[current_question - 1]));
                        } 

                        else 
                        {
                            doc.correct = 0;
                            doc.score = score;
                            $(".kaiser-container").fadeTo(500, 0.3, function() {
                    
                                $('.svg-container1').fadeIn();
                                $(".trigger1").addClass("drawn1");
                                $('.svg-container1').delay('slow').fadeOut('slow', function() {
                                    $(".kaiser-container").css('opacity', 1);
                                    $('#' + current_question).css('background-color', '#b71c1c');
                                    $(".trigger1").removeClass("drawn");
                                });
                            });

                           tries[current_question - 1] += 1;
                           doc.tries = tries[current_question-1];
                           $('.remaining-tries').html('Remaining tries : ' + (3-tries[current_question - 1]));
                        }
                          
                         db.count({question: current_question}, function(err, count) {
                                 if (count == 0)
                                     db.insert(doc);
                                 else 
                                     db.update({ question: current_question }, { 
                                        $set: 
                                        { 
                                            answer: answer, 
                                            correct: isCorrect, 
                                            tries : tries [current_question-1],
                                            score: score
                                        }}, 
                                        {} , function (err, numReplaced){
                                        });

                            });
                    } 
                    else
                    {
                       alert('You have no tries remaining');
                       $('#' + current_question).css('pointer-events','none');
                    }
                }
            });
         });

function onRestartApp()
{

    db.find({}, function (err, docs) {
        for(var i =0; i<docs.length;i++)
        {
            if(docs[i].correct == 1)
                $('#' + docs[i].question).css('background-color', '#1b5e20');
            if(docs[i].correct == 0)
                $('#' + docs[i].question).css('background-color', '#b71c1c');

            if(docs[i].tries >=3)
                  $('#' + docs[i].question).css('pointer-events','none');
        }
    });

    $('.title').html(titles[0]);
    $('.question_no').html(1);
    $('.question').html(questions[0]);
   
}

// function subjectiveQuestion(){
//     for(var i=21;i<=25;i++)
//     {
//         $('#'+i).click(function() {
//             $('.submission').css('display','none');
//         });
//     }
// }

function splashScreen()
{
    $('.splash-screen').fadeOut(3000, function () {
        $(".kaiser-container").fadeIn();
    });
}