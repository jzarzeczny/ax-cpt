//Event listners

const ax = document.querySelector('.AX').addEventListener("click", startProcedure);
const ay = document.querySelector('.AY').addEventListener("click", startProcedure);
const bx = document.querySelector('.BX').addEventListener("click", startProcedure);
const by = document.querySelector('.BY').addEventListener("click", startProcedure);

const procedureButton = document.querySelector('.testOfProcedure').addEventListener('click', beginTheTest);


//Other elements required

let box = document.getElementsByClassName('box');
let instruction = document.getElementsByClassName('instruction')
//Global variables

let orderOfTest = [0, 0, 1, 0, 0, 3, 2, 0, 0, 0] // AX - 0, AY - 1, BX - 2, BY - 3
let decisionWasMade

//Stats of the user
let correctAX = 0;
let correctAY = 0;
let correctBX = 0;
let correctBY = 0;
let numberOfMistakes = 0;
//Function for test the wariants of AX-CPT

function startProcedure(event){
    if (event.target.className === 'AX'){
        initialSetting('A', 'X');
    } else if(event.target.className === 'AY') {
        initialSetting('A', 'Y');
    } else if(event.target.className === 'BX') {
        initialSetting('B', 'X');
    } else if (event.target.className === 'BY'){
        initialSetting('B', 'Y');
    } else {
        console.log('Something went wrong')
    }
};

//Function for display the wariants of AX-CPT


function initialSetting(clueText, probeText){
    setTimeout(function displayClue(){
        box[0].innerText = clueText;
        box[0].classList.add('visible');
        setTimeout(function removeClue(){
            box[0].classList.remove('visible');
            setTimeout(function deleyClueToProbe(){
                box[0].innerText = probeText;
                box[0].classList.add('visible');
                setTimeout(function removeProbe(){
                    box[0].classList.remove('visible');
                    //Managing the instruction display.
                    instruction[0].classList.add('visible');
                    //Adding some input checker to find out the response for the sequence. 

                }, 1000)
            }, 1500)
        }, 300)
    }, 1000);
    document.addEventListener('keypress', checkTheResponse)
    } 


function beginTheTest(){
    requiredTest = orderOfTest.pop();
    console.log(requiredTest)
    if (requiredTest === 0){
        initialSetting('A', 'X');
    } else if(requiredTest === 1) {
        initialSetting('A', 'Y');
    } else if(requiredTest === 2) {
        initialSetting('B', 'X');
    } else if (requiredTest === 3){
        initialSetting('B', 'Y');
    } else {
        console.log('End of the test');
        console.log(correctAX, correctAY, correctBX, correctBY, numberOfMistakes);
        instruction[0].innerText = `To już koniec!
        Dziękujemy za uczestnictwo w badaniu.`;
        instruction[0].classList.add('visible');
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

// managmentOfTheResultDisplay(){

// }