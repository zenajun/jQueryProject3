/*
 Mastermind game

 Function that will randomly generate 4 colours into an array (order matters)
    this array will be hidden from the user.

 The user guesses the array by clicking on the boxes that toggle the colours
    need a toggle function to toggle multiple classes.
*/

const app = {};

app.colorArray = ['red', 'blue', 'yellow', 'green'];    

// answer key
app.answerArray = [];

//player's choices
app.playersArray = [];

//score & attemps
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
}

// change box colour on click
app.changeBoxColor = () => {
    $('div.player').on('click', 'div.box', function() {
        const dataIndex = parseInt($(this).attr('data-click'));
        const removeColor = app.colorArray[dataIndex];
        const addColor = app.colorArray[dataIndex + 1];

        if (dataIndex >= 3 ) {         
            // $(this).data('click') === 0;    
            $(this).removeClass('green').addClass('red').attr('data-click', 0);
        } else {
            $(this).removeClass(removeColor).addClass(addColor).attr('data-click', dataIndex + 1);
        }
    });  
}   // end of change box colour on click

app.compare = () => {    
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
            text: `Congratulations!  And it only took you ${app.attempt} attempts!`
            });
        $('div.answers').html('');
        app.displayAnswerBox();
        app.resetGame();
        $('input[type="submit"]').css('display', 'none');
        $('input[type="reset"]').css('display', 'block');        
    }
}

// Function that will grab the data from the users box and make an array.
app.getUsersSelection = () => {
    $('form').on('submit', function (e) {
        e.preventDefault();
        app.userScore();  // updates users score on submit

        // Grab users selection and stick it in an array.  
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

// Function that will add 4 boxes to the player div
app.generatePlayArea = () => {
    const playerBoxes = `<div class="box" data-click="4"></div>`;
    for (let i = 0; i < 4; i++) {
        $('div.player').append(playerBoxes);
    }
}

// create boxes with a class from the answerArray  // call this function with answerArray === usersArray
app.displayAnswerBox = () => {
    for (let i = 0; i < app.answerArray.length; i++ ) {
        const colorClass = app.answerArray[i];
        const boxCode = `<div class="box ${colorClass}"></div>`;
        $('div.answers').append(boxCode);
    }
}

app.resetGame = () => {
    $('input[type="reset"]').on('click', () => {
        location.reload();
    });
}

app.smoothScroll = () => {
    $('a.play').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top}, 800, function() {
                window.location.hash = hash;
            });
        }
    });
}

app.init = () => {
    app.smoothScroll();
    app.makeArray();
    app.changeBoxColor();
    app.generatePlayArea();
    app.getUsersSelection();
}


// Document ready
$(function() {    
    app.init();  
});





