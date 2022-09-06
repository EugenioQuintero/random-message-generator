
    // Gets # from 0 -> 3 - 1
    let randomNum = Math.floor(Math.random() * 4);


const joke = {
    answers: [['Figs', 'Figs the doorbell, it\'s broken!'], ['Wooden Shoe',   'Wooden shoe like to know!'], ['Radio', 'Radio not, here I come!' ]]
}

/*
for(let prop in joke){
    console.log(joke[prop].length);
}
*/

    switch(randomNum) {
        case 1:
            console.log(`Knock Knock! \n Who\'s there? \n ${joke.answers[0][0]}\n ${joke.answers[0][0]} who?\n ${joke.answers[0][1]}`);
            break
        case 2:
            console.log(`Knock Knock! \n Who\'s there? \n ${joke.answers[1][0]}\n ${joke.answers[1][0]} who?\n ${joke.answers[1][1]}`);
            break
        case 3:
            console.log(`Knock Knock! \n Who\'s there? \n ${joke.answers[2][0]}\n ${joke.answers[2][0]} who?\n ${joke.answers[2][1]}`);
            break
        default:
            console.log(`No one is knocking`);
    }




