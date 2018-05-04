const app = {};

app.colorArray = ['red', 'blue', 'yellow', 'green'];    

// answer key
app.answerArray = [];

//player's choices
app.playersArray = [];

//score & transwer
app.attempt = 0;
app.correct = 0;



// Grab random item from the array
app.randomIndex = (array) => {
    return (Math.floor(Math.random() * array.length));
}


app.selectRandomColor = () => {
    return app.answerArray.push((app.colorArray[app.randomIndex(app.colorArray)]));
}

// Create a function that will generate the array more efficiently
app.makeArray = () => {
    for (let i = 0; i <= 3; i++) {
        app.selectRandomColor();            
    }
    // console.log(app.answerArray);
}

// change box colour on click
app.changeBoxColor = () => {
    $('div.player').on('click', 'div.box', function() {
        const dataIndex = parseInt($(this).attr('data-click'));
        const removeColor = app.colorArray[dataIndex];
        const addColor = app.colorArray[dataIndex + 1];

        if (dataIndex === 3) {         
            // $(this).data('click') === 0;    
            $(this).removeClass('green').addClass('red').attr('data-click', 0);
        } else {
            $(this).removeClass(removeColor).addClass(addColor).attr('data-click', dataIndex + 1);
        }
    });  
}   // end of change box colour on click

app.compare = () => {
    console.log(app.answerArray);
    console.log(app.playersArray);
    
    for (let i = 0; i < 4; i++) {
        if (app.answerArray[i] === app.playersArray[i]) {
            app.correct++;            
        } 
    } 
    $('.correct').text(app.correct);
    if (app.correct === 4) {
        console.log(`You win!`);
        swal({
            
            title: "Good job!",
            icon: "success",
            text: `Congratulations!  You've won and it only took you ${app.attempt} attempts!`

            });
        $('div.answers').html('');
        app.displayAnswerBox();
        
    }
}
// Create function that will grab the data from the users box and make an array.
app.getUsersSelection = () => {
    $('form').on('submit', function (e) {
        e.preventDefault();
        app.userScore();  // updates users score on submit

        //write function to grab users selection and stick it in an array.  
        app.playersArray = [];
        app.correct = 0;

        for (let i = 1; i <= 4; i++) {
            app.playersArray.push(app.colorArray[$(`.player .box:nth-child(${i})`).attr('data-click')]);
        }
        app.compare();     
        
    });
}

// function that will compare the computer's array to the players array
app.userScore = () => {
    app.attempt++;
    $('span.score').text(app.attempt);
}

// Create function that will add 4 boxes to the player div
app.generatePlayArea = () => {
    const playerBoxes = `<div class="box" data-click="0"></div>`;
    //make this more efficient...
    $('div.player').append(playerBoxes);
    $('div.player').append(playerBoxes);
    $('div.player').append(playerBoxes);
    $('div.player').append(playerBoxes);
}

// create boxes with a class from the answerArray  // call this function with answerArray === usersArray
app.displayAnswerBox = () => {
    for (let i = 0; i < app.answerArray.length; i++ ) {
        const colorClass = app.answerArray[i];
        const boxCode = `<div class="box ${colorClass}" data-click=""></div>`;
        // $('div.answer').html();
        $('div.answers').append(boxCode);
    }
}

app.init = () => {
    app.makeArray();
    app.changeBoxColor();
    app.generatePlayArea();
    app.getUsersSelection();
    // app.displayAnswerBox();
}

// Document ready
$(function() {    
    app.init();  
});




/*
 Mastermind game

 Function that will randomly generate 4 colours into an array (order matters)
 this array will be hidden from the user.

 The user guesses the array by clicking on the boxes that toggle the colours
        need a toggle function to toggle multiple classes.

*/
