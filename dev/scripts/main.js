const app = {};

app.colorArray = ['red', 'blue', 'yellow', 'green'];    
app.answerArray = [];
app.playersArray = [];
app.attempt = 0;

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
    $('div.box').on('click', function() {
        const dataIndex = parseInt($(this).attr('data-click'));
        const removeColor = app.colorArray[dataIndex];
        const addColor = app.colorArray[dataIndex + 1];
        //const test = $(this).data('click');
        // console.log(dataIndex);

        if (dataIndex === 3) {         
            // $(this).data('click') === 0;    
            $(this).removeClass('green').addClass('red').attr('data-click', 0);
        } else {
            $(this).removeClass(removeColor).addClass(addColor).attr('data-click', dataIndex + 1);
        }
    });  
}   // end of change box colour on click


// Create function that will grab the data from the users box and make an array.
app.getUsersSelection = () => {
    $('form').on('submit', function(e) {
        e.preventDefault();
        app.attempt++;
        $('span.score').text(app.attempt);
        console.log(app.attempt);
        
        $('div.player')
        
    });
}


// create boxes with a class from the answerArray  // call this function with answerArray === usersArray
app.createAnswerBox = () => {
    for (let i = 0; i < app.answerArray.length; i++ ) {
        const colorClass = app.answerArray[i];
        const boxCode = `<div class="box ${colorClass}" data-click=""></div>`;
        $('div.player').append(boxCode);
    }
}



app.init = () => {
    app.makeArray();
    app.changeBoxColor();
    app.getUsersSelection();


}
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
