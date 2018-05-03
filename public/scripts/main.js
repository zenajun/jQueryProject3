'use strict';

var app = {};

app.colorArray = ['red', 'blue', 'yellow', 'green'];

// answer key
app.answerArray = [];

//player's choices
app.playersArray = [];

app.attempt = 0;

// Grab random item from the array
app.randomIndex = function (array) {
    return Math.floor(Math.random() * array.length);
};

app.selectRandomColor = function () {
    return app.answerArray.push(app.colorArray[app.randomIndex(app.colorArray)]);
};

// Create a function that will generate the array more efficiently
app.makeArray = function () {
    for (var i = 0; i <= 3; i++) {
        app.selectRandomColor();
    }
    // console.log(app.answerArray);
};

// change box colour on click
app.changeBoxColor = function () {
    $('div.player').on('click', 'div.box', function () {
        var dataIndex = parseInt($(this).attr('data-click'));
        var removeColor = app.colorArray[dataIndex];
        var addColor = app.colorArray[dataIndex + 1];

        if (dataIndex === 3) {
            // $(this).data('click') === 0;    
            $(this).removeClass('green').addClass('red').attr('data-click', 0);
        } else {
            $(this).removeClass(removeColor).addClass(addColor).attr('data-click', dataIndex + 1);
        }
    });
}; // end of change box colour on click

// Create function that will grab the data from the users box and make an array.
app.getUsersSelection = function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        app.userScore(); // updates users score on submit

        //write function to grab users selection and stick it in an array.     
        for (var i = 1; i <= 4; i++) {
            app.playersArray.push(app.colorArray[$('.player .box:nth-child(' + i + ')').attr('data-click')]);
        }
        console.log(app.playersArray);

        // .map() to convert app.playersArry into colours
        // app.playersArray.map((indexTocolor) => {
        //     // app.playersArray.push(app.colorArray[indexTocolor]);


        //     console.log(app.playersArray);
        //     // app.playersArray.push(app.colorArray[indexTocolor]);
        //     // app.playersArray.splice(0, 4);
        // });

        // const dataIndex = $(this).attr('data-click');
    });
};

app.userScore = function () {
    app.attempt++;
    $('span.score').text(app.attempt);
};

// Create function that will add 4 boxes to the player div
app.generatePlayArea = function () {
    var playerBoxes = '<div class="box" data-click="0"></div>';
    //make this more efficient...
    $('div.player').append(playerBoxes);
    $('div.player').append(playerBoxes);
    $('div.player').append(playerBoxes);
    $('div.player').append(playerBoxes);
};

// create boxes with a class from the answerArray  // call this function with answerArray === usersArray
app.displayAnswerBox = function () {
    for (var i = 0; i < app.answerArray.length; i++) {
        var colorClass = app.answerArray[i];
        var boxCode = '<div class="box ' + colorClass + '" data-click=""></div>';
        $('div.player').append(boxCode);
    }
};

app.init = function () {
    app.makeArray();
    app.changeBoxColor();
    app.generatePlayArea();
    app.getUsersSelection();
};

$(function () {

    app.init();
});

/*
 Mastermind game

 Function that will randomly generate 4 colours into an array (order matters)
 this array will be hidden from the user.

 The user guesses the array by clicking on the boxes that toggle the colours
        need a toggle function to toggle multiple classes.

*/