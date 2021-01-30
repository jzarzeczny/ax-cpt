//Event listners

const ax = document.querySelector('.AX').addEventListener("click", startProcedure);
const ay = document.querySelector('.AY').addEventListener("click", startProcedure);
const bx = document.querySelector('.BX').addEventListener("click", startProcedure);
const by = document.querySelector('.BY').addEventListener("click", startProcedure);

const procedureButton = document.querySelector('.testOfProcedure').addEventListener('click', beginTheTest);


//Other elements required

let box = document.getElementsByClassName('box');

//Global variables

let orderOfTest = [0, 0, 1, 0, 0, 3, 2, 0, 0, 0] // AX - 0, AY - 1, BX - 2, BY - 3
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
                    //Adding some input checker to find out the response for the sequence. 
                    document.addEventListener('keypress', function checkTheResponse(event){
                        if (event.key === 'z' ){
                            console.log('You pressed Z!')
                        } else if (event.key ==='m'){
                            console.log('You pressed M!')
                        } else {
                            console.log('We fucked up!')
                        }
                    } )
                    if (orderOfTest !== 0){beginTheTest()};
                }, 1000)
            }, 1500)
        }, 300)
    }, 1000);
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
        console.log('Something went wrong');
    }
}