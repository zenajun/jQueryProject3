const app = {};

app.colorArray = ['red', 'blue', 'yellow', 'green'];    
app.answerArray = [];

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
    console.log(app.answerArray);
}

// change box colour on click
app.changeBoxColor = () => {
    $('div.box').on('click', function() {
        const dataIndex = parseInt($(this).attr('data-click'));
        const removeColor = app.colorArray[dataIndex];
        const addColor = app.colorArray[dataIndex + 1];
        //const test = $(this).data('click');
        console.log(dataIndex);

        if (dataIndex === 3) {         
            // $(this).data('click') === 0;    
            $(this).removeClass('green').addClass('red').attr('data-click', 0);
        } else {
            $(this).removeClass(removeColor).addClass(addColor).attr('data-click', dataIndex + 1);
        }
    });  
}   // end of change box colour on click




app.init = () => {
    app.makeArray();
    app.changeBoxColor();
}


$(function() {
    
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
