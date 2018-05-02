'use strict';

var app = {};

app.colorArray = ['red', 'blue', 'yellow', 'green'];
app.answerArray = [];

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
    console.log(app.answerArray);
};

// change box colour on click
app.changeBoxColor = function () {
    $('div.box').on('click', function () {
        var dataIndex = parseInt($(this).attr('data-click'));
        var removeColor = app.colorArray[dataIndex];
        var addColor = app.colorArray[dataIndex + 1];
        //const test = $(this).data('click');
        console.log(dataIndex);

        if (dataIndex === 3) {
            // $(this).data('click') === 0;    
            $(this).removeClass('green').addClass('red').attr('data-click', 0);
        } else {
            $(this).removeClass(removeColor).addClass(addColor).attr('data-click', dataIndex + 1);
        }
    });
}; // end of change box colour on click


app.init = function () {
    app.makeArray();
    app.changeBoxColor();
};

$(function () {

    app.init();

    // create boxes with a class from the answerArray
    // for (let i = 0; i <= 3; i++) {
    //     const grabColor = answerArray[0]
    //     const code = `<div class="box ${grabColor}" data-click=""></div>`
    //     $('div.player').append(code);
    //     answerArray.shift();
    // console.log(answerArray);        

    // }

});

/*
 Mastermind game

 Function that will randomly generate 4 colours into an array (order matters)
 this array will be hidden from the user.

 The user guesses the array by clicking on the boxes that toggle the colours
        need a toggle function to toggle multiple classes.


*/