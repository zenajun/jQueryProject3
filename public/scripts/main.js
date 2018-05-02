'use strict';

$(function () {
    // function to toggle between colours
    var colorArray = ['red', 'blue', 'yellow', 'green'];

    var answerArray = [];
    var box = '<div class="box"></div>';

    // console.log('ready');

    var randomIndex = function randomIndex(array) {
        return Math.floor(Math.random() * array.length);
    };

    // make answer array:    
    answerArray.push(colorArray[randomIndex(colorArray)]);
    answerArray.push(colorArray[randomIndex(colorArray)]);
    answerArray.push(colorArray[randomIndex(colorArray)]);
    answerArray.push(colorArray[randomIndex(colorArray)]);
    console.log(answerArray);

    $('div.box').on('click', function () {
        var dataIndex = parseInt($(this).attr('data-click'));
        var removeColor = colorArray[dataIndex];
        var addColor = colorArray[dataIndex + 1];
        //const test = $(this).data('click');
        console.log(dataIndex);

        if (dataIndex === 3) {
            // $(this).data('click') === 0;    
            $(this).removeClass('green').addClass('red').attr('data-click', 0);
            // console.log(test);


            // console.log(typeof );

        } else {
            $(this).removeClass(removeColor).addClass(addColor).attr('data-click', dataIndex + 1);

            // console.log(test);
        }

        //  console.log($(this).data('click'));

        // $(this).toggleClass('red blue yellow green none');
    });
});

// $('.toggle').click(function () {
//     var classes = ['class1', 'class2', 'class3'];
//     $('div').each(function () {
//         this.className = classes[($.inArray(this.className, classes) + 1) % classes.length];
//     });
// });

/*
 Mastermind game

 Function that will randomly generate 4 colours into an array (order matters)
 this array will be hidden from the user.

 The user guesses the array by clicking on the boxes that toggle the colours
        need a toggle function to toggle multiple classes.




*/