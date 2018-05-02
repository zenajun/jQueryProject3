$(function() {
    // function to toggle between colours
    const colorArray = ['red', 'blue', 'yellow', 'green'];

    
    const answerArray = [];
    const box = `<div class="box"></div>`    

    // console.log('ready');
    
    const randomIndex = (array) => {
        return (Math.floor(Math.random() * array.length ));
    }
    
    // make answer array:    
    answerArray.push((colorArray[randomIndex(colorArray)]));
    answerArray.push((colorArray[randomIndex(colorArray)]));
    answerArray.push((colorArray[randomIndex(colorArray)]));
    answerArray.push((colorArray[randomIndex(colorArray)]));
    console.log(answerArray);    


     $('div.box').on('click', function() {
        const dataIndex = parseInt($(this).attr('data-click'));
        const removeColor = colorArray[dataIndex];
        const addColor = colorArray[dataIndex + 1];
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
