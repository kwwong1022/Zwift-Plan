// Plan Tool Function
var textGlob = "Starter \n";
var Form, VarA, VarB;
function createText(filename) {
    var text = textGlob;
    Form = document.getElementById("formMain");
    VarA = Form.elements['itemA'];
    VarB = Form.elements['itemB'];
    var msg = [];
    msg[0] = VarA.value;
    msg[1] = VarB.value;
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