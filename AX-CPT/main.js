const ax = document.querySelector('.AX').addEventListener("click", startProcedure);
const ay = document.querySelector('.AY').addEventListener("click", startProcedure);
const bx = document.querySelector('.BX').addEventListener("click", startProcedure);
const by = document.querySelector('.BY').addEventListener("click", startProcedure);

let box = document.getElementsByClassName('box');



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
                }, 1000)
            }, 1500)
        }, 300)
    }, 1000);
    


}

