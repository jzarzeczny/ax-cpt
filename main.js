//collection of buttons

const ax = document.querySelector('.AX')
const ay = document.querySelector('.AY')
const bx = document.querySelector('.BX')
const by = document.querySelector('.BY')
const procedureButton = document.querySelector('.testOfProcedure');
const affect = document.querySelector('.affect')
const reactiveC = document.querySelector('.reactiveC')

buttonsList = [ax, ay, bx, by, affect, reactiveC]
addTheListners();

//Other elements required

let box = document.getElementsByClassName('box');
let instruction = document.getElementsByClassName('instruction')
let scoreAX = document.getElementsByClassName('scoreAX');
let scoreAY = document.getElementsByClassName('scoreAY');
let scoreBX = document.getElementsByClassName('scoreBX');
let scoreBY = document.getElementsByClassName('scoreBY');
let resultBox = document.getElementsByClassName('results');
//Global variables

let orderOfTest = [0, 0, 1, 0, 0, 3, 2, 0, 0, 0];

//Stats of the user
let correctAX = 0;
let correctAY = 0;
let correctBX = 0;
let correctBY = 0;
let numberOfMistakes = 0;
const listOfInputs = [ax, ay, bx, by];

//Function for test the wariants of AX-CPT

function showProcedure(event){
    console.log(event);
    if (event.target.className === 'AX'){
        displayMechanism('A', 'X');
    } else if(event.target.className === 'AY') {
        displayMechanism('A', 'Y');
    } else if(event.target.className === 'BX') {
        displayMechanism('B', 'X');
    } else if (event.target.className === 'BY'){
        displayMechanism('B', 'Y');
    } else if (event.target.className === 'affect'){
        displayMechanism('B', 'Y', 'affect');
    } else if(event.target.className === 'reactiveC'){
        displayMechanism('B', 'Y', 'reactive');
    } else {
        console.log('Something went wrong')
    }
};

//Function for display the wariants of AX-CPT


function displayMechanism(clueText, probeText, test){
    removeTheListners();
    document.removeEventListener('keypress', checkTheResponse)           

    displayClue = setTimeout(() =>{
        box[0].innerText = clueText;
        box[0].classList.add('visible');

        timeBetweenClueAndProbe = setTimeout(()=>{
            box[0].classList.remove('visible');

            displayProbe = setTimeout(() => {
                box[0].innerText = probeText;
                box[0].classList.add('visible');

                removeProbeWaitForResponse = setTimeout(() =>{
                    box[0].classList.remove('visible');
                    //Managing the instruction display.
                    addTheListners();
                    if (test === 'test'){
                        instruction[0].classList.add('visible');
                        document.addEventListener('keypress', checkTheResponse);
                    }

                }, 1000)
            }, 1500)
        }, 300)
    }, 1000);
    //Adding some input checker to find out the response for the sequence. 

    } 


function beginTheTest(){
    requiredTest = orderOfTest.pop();
    console.log(requiredTest)
    if (requiredTest === 0){
        displayMechanism('A', 'X', 'test');
    } else if(requiredTest === 1) {
        displayMechanism('A', 'Y', 'test');
    } else if(requiredTest === 2) {
        displayMechanism('B', 'X', 'test');
    } else if (requiredTest === 3){
        displayMechanism('B', 'Y', 'test');
    } else {
        console.log('End of the test');
        console.log(correctAX, correctAY, correctBX, correctBY, numberOfMistakes);
        instruction[0].innerText = `To już koniec!
        Dziękujemy za uczestnictwo w badaniu.`;
        instruction[0].classList.add('visible');
        managmentOfTheResultDisplay();
        orderOfTest = [0, 0, 1, 0, 0, 3, 2, 0, 0, 0];
        setTimeout(()=>{
            initialSetting()}, 10000)
    }
}

//Function that's check the input by the user.
function checkTheResponse(event){
    if (event.key === 'z' ){
        console.log('You pressed Z!')
        instruction[0].classList.remove('visible');
        manageTheStats('z', requiredTest)
        if (orderOfTest !== []){beginTheTest(); return;};

    } else if (event.key ==='m'){
        console.log('You pressed M!')
        instruction[0].classList.remove('visible');
        manageTheStats('m', requiredTest)

        if (orderOfTest !== []){beginTheTest(); return;};

    } else {
        console.log('We fucked')
    }}

function manageTheStats(userInput, requiredTest){
    console.log(userInput, requiredTest)

    //Check if 0 --> Z
    if(userInput === 'z' && requiredTest === 0){
        //yes => Correct
        correctAX++
    } else if(userInput === 'm' && requiredTest === 1){
        correctAY++
    } else if(userInput === 'm' && requiredTest === 2){
        correctBX++
    } else if(userInput === 'm' && requiredTest === 3){
        correctBY++
    }else if((userInput === 'z' && requiredTest === 3) || (userInput === 'z' && requiredTest === 2) || (userInput === 'z' && requiredTest === 1) || (userInput === 'm' && requiredTest === 0)){
        console.log('Uncorrect answer.');
        numberOfMistakes++;
    } else {
        console.log('Something went wrong in calsulations of the test');
    }
}

function managmentOfTheResultDisplay(){
    resultBox[0].classList.add('visible');
    scoreAX[0].innerText = 'Wynik AX = ' + (Math.round(correctAX / 7 * 100)) + '%';
    scoreAY[0].innerText = 'Wynik AY = ' + (Math.round(correctAY / 1 * 100)) + '%';
    scoreBX[0].innerText = 'Wynik BX = ' + (Math.round(correctBX / 1 * 100)) + '%';
    scoreBY[0].innerText = 'Wynik BY = ' + (Math.round(correctBY / 1 * 100)) + '%';

}

function initialSetting(){
    //Hide the results
    scoreAX[0].innerText = '';
    scoreAY[0].innerText = '';
    scoreBX[0].innerText = '';
    scoreBY[0].innerText = '';

    //Reset the score
    correctAX = 0;
    correctAY = 0;
    correctBX = 0;
    correctBY = 0;
    numberOfMistakes = 0

    //Hide the results
    resultBox[0].classList.remove('visible');
    instruction[0].innerText = '';

}

//Menagment of listners 

function removeTheListners(){
    for (i = 0; i < buttonsList.length; i++){
        buttonsList[i].disable = true;
        buttonsList[i].removeEventListener('click', showProcedure)
    }
    procedureButton.removeEventListener('click', beginTheTest)
}

function addTheListners(){
    for (i = 0; i < buttonsList.length; i++){
        buttonsList[i].disable = true;
        buttonsList[i].addEventListener('click', showProcedure)
    }
    procedureButton.addEventListener('click', beginTheTest)

}