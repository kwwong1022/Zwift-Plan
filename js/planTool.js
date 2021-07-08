// Plan Tool Function
var textGlob = "Starter \n";
var Form, VarA, VarB;
var CardNo = 0;
Form = document.getElementById("formMain");
firstCard = document.getElementById("new-plan-card-session");
//module no = 1 calls green block
//module no = 0 calls test question
class cardInfo{
    constructor(duration, power) {
        this.duration = duration;
        this.power = power;
    }
}
var cardArray = [];
function moduleQuestionHTML(questionNo, moduleNo){
    var qHTML = document.createElement("a" + questionNo);
    if (moduleNo = 1) {
        qHTML.innerHTML = firstCard.innerHTML;
        //qHTML.innerHTML = '<section id="new-plan-card-session"> <div class="d-flex" style="justify-content: center;"> <div id="new-plan-card" class="card d-flex"> <div class="card-grid-left" style="width: 90%"> <!-- Workout Title --> <span style="font-size: 1.5rem; font-weight: 510;">ZONE <span id="title-zone-level">2</span> - <span id="title-power">200</span>w </span> <div class="power-edit d-flex" style="align-content: center; justify-content: space-between; padding-top: .4rem; padding-right: 1rem;"> <div class="d-flex"> <span style="font-size: 1.3rem; font-weight: 500; align-self: center;">Power:</span> </div> <div class="d-flex" style="padding: 0 .8rem 0"> <button id="power-percentage-minus-l" class="btn-sm btn-sm-l">-</button> <button id="power-percentage-minus-sm" class="btn-sm btn-sm-r">-</button> <span style="font-size: 1.6rem; font-weight: 500;"> <span style="padding: 0 .4rem 0"><span id="power-percentage">80</span>%</span> </span> <button id="power-percentage-add-sm" class="btn-sm btn-sm-l">+</button> <button id="power-percentage-add-l" class="btn-sm btn-sm-r">+</button> </div> <div class="d-flex"> <button id="power-watt-minus-l" class="btn-sm btn-sm-l">-</button> <button id="power-watt-minus-sm" class="btn-sm btn-sm-r">-</button> <span style="font-size: 1.6rem; font-weight: 500;"> <span style="padding: 0 .4rem 0"><span id="power-watt">180</span>w</span> </span> <button id="power-watt-add-sm" class="btn-sm btn-sm-l">+</button> <button id="power-watt-add-l" class="btn-sm btn-sm-r">+</button> </div> </div> <div class="duration-edit d-flex" style="align-content: center; justify-content: space-between; padding-top: .4rem; padding-right: 1rem;"> <div class="d-flex"> <span style="font-size: 1.3rem; font-weight: 500; align-self: center;">Duration:</span> </div> <div class="d-flex"> <button id="duration-min-minus-l" class="btn-sm btn-sm-l">-</button> <button id="duration-min-minus-sm" class="btn-sm btn-sm-r">-</button> <span style="font-size: 1.6rem; font-weight: 500;"> <span id="power-percentage" style="padding: 0 .4rem 0">00</span> </span> <button id="duration-min-add-sm" class="btn-sm btn-sm-l">+</button> <button id="duration-min-add-l" class="btn-sm btn-sm-r">+</button> </div> <span style="font-size: 1.6rem; font-weight: 500;">:</span> <div class="d-flex"> <button id="duration-sec-minus-l" class="btn-sm btn-sm-l">-</button> <button id="duration-sec-minus-sm" class="btn-sm btn-sm-r">-</button> <span style="font-size: 1.6rem; font-weight: 500;"> <span id="power-percentage" style="padding: 0 .4rem 0">00</span> </span> <button id="duration-sec-add-sm" class="btn-sm btn-sm-l">+</button> <button id="duration-sec-add-l" class="btn-sm btn-sm-r">+</button> </div> </div> </div> <div class="card-grid-right" style="width: 10%;"> <!-- Add New card Button--> <button id="btn-add-new-plan">+</button> </div> </div> <div style="width: 0%;"></div> </div> </section>';

        let newPowerPercentage = qHTML.querySelector('#power-percentage');
        let addPowerPercentageSmall = qHTML.querySelector('#power-percentage-add-sm');
        let addPowerPercentageLarge = qHTML.querySelector('#power-percentage-add-l');
        let minusPowerPercentageSmall = qHTML.querySelector('#power-percentage-minus-sm');
        let minusPowerPercentageLarge = qHTML.querySelector('#power-percentage-minus-l');
        let newPlanCard = qHTML.querySelector('#new-plan-card');
        let titleZoneLv = qHTML.querySelector('#title-zone-level');
        let titlePower = qHTML.querySelector('#title-power');
        let newPowerWatt = qHTML.querySelector('#power-watt');
        let addPowerWattSmall = qHTML.querySelector('#power-watt-add-sm');
        let addPowerWattLarge = qHTML.querySelector('#power-watt-add-l');
        let minusPowerWattSmall = qHTML.querySelector('#power-watt-minus-sm');
        let minusPowerWattLarge = qHTML.querySelector('#power-watt-minus-l');

        addPowerPercentageSmall.addEventListener('click', () => {
            let currPer = parseInt(newPowerPercentage.innerText);
            currPer += 1;
            newPowerPercentage.innerText = currPer;
            updatePower();
            updateAddCardTitle();
        })
        addPowerPercentageLarge.addEventListener('click', () => {
            let currPer = parseInt(newPowerPercentage.innerText);
            currPer += 5;
            newPowerPercentage.innerText = currPer;
            updatePower();
            updateAddCardTitle();
        })

        minusPowerPercentageSmall.addEventListener('click', () => {
            let currPer = parseInt(newPowerPercentage.innerText);
            currPer -= 1;
            newPowerPercentage.innerText = currPer;
            updatePower();
            updateAddCardTitle();
        })
        minusPowerPercentageLarge.addEventListener('click', () => {
            let currPer = parseInt(newPowerPercentage.innerText);
            currPer -= 5;
            newPowerPercentage.innerText = currPer;
            updatePower();
            updateAddCardTitle();
        })

        addPowerWattSmall.addEventListener('click', () => {
            let currPow = parseInt(newPowerWatt.innerText);
            currPow += 1;
            newPowerWatt.innerText = currPow;
            updatePercentage();
            updateAddCardTitle();
        })
        addPowerWattLarge.addEventListener('click', () => {
            let currPow = parseInt(newPowerWatt.innerText);
            currPow += 5;
            newPowerWatt.innerText = currPow;
            updatePercentage();
            updateAddCardTitle();
        })

        minusPowerWattSmall.addEventListener('click', () => {
            let currPow = parseInt(newPowerWatt.innerText);
            currPow -= 1;
            newPowerWatt.innerText = currPow;
            updatePercentage();
            updateAddCardTitle();
        })
        minusPowerWattLarge.addEventListener('click', () => {
            let currPow = parseInt(newPowerWatt.innerText);
            currPow -= 5;
            newPowerWatt.innerText = currPow;
            updatePercentage();
            updateAddCardTitle();
        })

        let updatePower = () => {
            let currPer = parseInt(newPowerPercentage.innerText) / 100;
            let currPow = Math.floor(userFTP * currPer);
            newPowerWatt.innerText = currPow;
        }

        let updatePercentage = () => {
            let currPow = parseInt(newPowerWatt.innerText);
            let currPer = Math.floor(currPow / userFTP * 100);
            newPowerPercentage.innerText = currPer;
        }

        let updateAddCardTitle = () => {
            let currPow = parseInt(newPowerWatt.innerText);
            let currZone = "";
            let currBgColor = "";
            let currZonePow = currPow / userFTP;
        
            if (currZonePow < 0.56) {
                currZone = "1"
                currBgColor = "rgb(141, 141, 141)";
            } else if (currZonePow >= 0.56 && currZonePow < 0.76) {
                currZone = "2"
                currBgColor = "rgb(56, 173, 219)";
            } else if (currZonePow >= 0.76 && currZonePow < 0.88) {
                currZone = "3"
                currBgColor = "rgb(46, 196, 71)";
            } else if (currZonePow >= 0.88 && currZonePow < 0.95) {
                currZone = "4"
                currBgColor = "rgb(218, 155, 62)";
            } else if (currZonePow >= 0.95 && currZonePow < 1.05) {
                currZone = "5"
                currBgColor = "rgb(194, 218, 61)";
            } else if (currZonePow >= 1.05 && currZonePow < 1.55) {
                currZone = "6"
                currBgColor = "rgb(207, 57, 57)";
            } else {
                currZone = "7"
                currBgColor = "rgb(170, 35, 159)";
            }
        
            titleZoneLv.innerText = currZone;
            titlePower.innerText = newPowerWatt.innerText;
            newPlanCard.style.backgroundColor = currBgColor;
        }
    }
    
    return qHTML;
}
function addQuestion(){
    CardNo++;
    $("#AllPlanCard").append(moduleQuestionHTML(CardNo, 1));
}
function createText(filename) {
    var text = textGlob;
    
    /*VarA = Form.elements['itemA'];
    VarB = Form.elements['itemB'];*/
    var msg = [];
    var msgSource = [];
    var selectionA = [];
    selectionA = document.getElementsByName("testSelectionA");
    for (var i = 0, length = selectionA.length; i < length; i++) {
        if (selectionA[i].checked) {
          // do whatever you want with the checked radio
          alert("found");
          msg[0] = selectionA[i].value;
      
          // only one radio can be logically checked, don't check the rest
          break;
        }
        else{
            alert("please check a box in question ");
        }
      }
      document.getElementById("demo").innerHTML = selectionA.length;
    /*msg[0] = VarA.value;
    msg[1] = VarB.value;*/
    for (let index = 0; index < msg.length; index++) {
        text += msg[index];
        text += " & ";
    }
    download(filename, text)
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}