// Plan Tool Function
var textGlob = "Starter \n";
var Form, VarA, VarB;
var CardNo = 0;
Form = document.getElementById("formMain");
//module no = 1 calls green block
//module no = 0 calls test question
function moduleQuestionHTML(questionNo, moduleNo){
    var qHTML = document.createElement("a" + questionNo);
    if (moduleNo = 1) {
        qHTML.innerHTML = '<section id="new-plan-card-session"> <div class="d-flex" style="justify-content: center;"> <div id="new-plan-card" class="card d-flex"> <div class="card-grid-left" style="width: 90%"> <!-- Workout Title --> <span style="font-size: 1.5rem; font-weight: 510;">ZONE <span id="title-zone-level">2</span> - <span id="title-power">200</span>w </span> <div class="power-edit d-flex" style="align-content: center; justify-content: space-between; padding-top: .4rem; padding-right: 1rem;"> <div class="d-flex"> <span style="font-size: 1.3rem; font-weight: 500; align-self: center;">Power:</span> </div> <div class="d-flex" style="padding: 0 .8rem 0"> <button id="power-percentage-minus-l" class="btn-sm btn-sm-l">-</button> <button id="power-percentage-minus-sm" class="btn-sm btn-sm-r">-</button> <span style="font-size: 1.6rem; font-weight: 500;"> <span style="padding: 0 .4rem 0"><span id="power-percentage">80</span>%</span> </span> <button id="power-percentage-add-sm" class="btn-sm btn-sm-l">+</button> <button id="power-percentage-add-l" class="btn-sm btn-sm-r">+</button> </div> <div class="d-flex"> <button id="power-watt-minus-l" class="btn-sm btn-sm-l">-</button> <button id="power-watt-minus-sm" class="btn-sm btn-sm-r">-</button> <span style="font-size: 1.6rem; font-weight: 500;"> <span style="padding: 0 .4rem 0"><span id="power-watt">180</span>w</span> </span> <button id="power-watt-add-sm" class="btn-sm btn-sm-l">+</button> <button id="power-watt-add-l" class="btn-sm btn-sm-r">+</button> </div> </div> <div class="duration-edit d-flex" style="align-content: center; justify-content: space-between; padding-top: .4rem; padding-right: 1rem;"> <div class="d-flex"> <span style="font-size: 1.3rem; font-weight: 500; align-self: center;">Duration:</span> </div> <div class="d-flex"> <button id="duration-min-minus-l" class="btn-sm btn-sm-l">-</button> <button id="duration-min-minus-sm" class="btn-sm btn-sm-r">-</button> <span style="font-size: 1.6rem; font-weight: 500;"> <span id="power-percentage" style="padding: 0 .4rem 0">00</span> </span> <button id="duration-min-add-sm" class="btn-sm btn-sm-l">+</button> <button id="duration-min-add-l" class="btn-sm btn-sm-r">+</button> </div> <span style="font-size: 1.6rem; font-weight: 500;">:</span> <div class="d-flex"> <button id="duration-sec-minus-l" class="btn-sm btn-sm-l">-</button> <button id="duration-sec-minus-sm" class="btn-sm btn-sm-r">-</button> <span style="font-size: 1.6rem; font-weight: 500;"> <span id="power-percentage" style="padding: 0 .4rem 0">00</span> </span> <button id="duration-sec-add-sm" class="btn-sm btn-sm-l">+</button> <button id="duration-sec-add-l" class="btn-sm btn-sm-r">+</button> </div> </div> </div> <div class="card-grid-right" style="width: 10%;"> <!-- Add New card Button--> <button id="btn-add-new-plan">+</button> </div> </div> <div style="width: 0%;"></div> </div> </section>';
    }
    
    return qHTML;
}
function addQuestion(){
    CardNo++;
    $("#AllPlanCard").append(moduleQuestionHTML(CardNo, 1));
}
function addPowerPercentageLow(powerPercentageElement){
    let currPer = parseInt(powerPercentageElement.innerText);
    currPer += 1;
    powerPercentageElement.innerText = currPer;
    updatePower();
    updateAddCardTitle();
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