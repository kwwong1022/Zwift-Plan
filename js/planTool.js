// Plan Tool Function
var textGlob = "Starter \n";
var Form, VarA, VarB;
Form = document.getElementById("formMain");
function moduleQuestionHTML(questionNo){
    var qHTML = document.createElement("a");
    qHTML.innerHTML = '<div class="d-flex" style="justify-content: center;"><div id="new-plan-card" class="card"style="width: 100%; height: 8rem; padding: .5rem .8rem .5rem;background-color: rgb(46, 196, 71);border-radius: 15px 15px 15px 15px; border: 6px solid white;box-shadow: 0px 2px 13px 0px #888888; color: rgb(247, 247, 247);"><span style="font-size: 1.5rem; font-weight: 500;">Zone <span id="title-zone-level">2</span> - <span id="title-power">200</span>w</span></div><div style="width: 0%;"></div></div>';
    
    return qHTML;
}
function addQuestion(){
    $("#new-plan-card-session").append(moduleQuestionHTML(1));
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