var trace = {
  x: [],
  y: [],
  type: 'scatter',
  mode: 'lines',
  color: 'rgb(55, 128, 191)'
};
var sumTime;
var afterTime = 42;
function convertArrayToLines(){
  CDPowerHigh = 20;
  CDPowerLow= 0;
  WMPowerLow=0;
  WMPowerHigh = 20; 
  WMDuration = 300;
  CDDuration = 300;
  sumTime = 0;
  if (hasWM) {
    console.log("WM");
    convertWMToLines(sumTime + WMDuration);
    sumTime += WMDuration;
  }

  for (let index = 1; index < planCardArray.length; index++) {
    console.log("Norm");
    afterTime = sumTime + ((planCardArray[index].durationMinute*60) + (planCardArray[index].durationSecond))
    convertCardToLines(index,sumTime, afterTime);
    sumTime = afterTime;
  }

  if (hasCD) {
    console.log("CD");
    //convertWMToLines(sumTime , sumTime + 500);
    startTime = sumTime;
    endTime = sumTime + CDDuration;
    let xArr = [startTime,    endTime];
    let yArr = [CDPowerHigh,  CDPowerLow];
    for (let index = 0; index < xArr.length; index++) {
      trace.x.push(xArr[index]);
    }
    for (let index = 0; index < yArr.length; index++) {
      trace.y.push(yArr[index]);
    }
  }

  let data;
    data =[];
    data.push(trace);
    let layout = {
    showlegend: false
  };
  Plotly.newPlot('myDiv', data,layout);
}

function convertCardToLines(cardNo, startTime, endTime){
  //let power = 10;
  let power = planCardArray[cardNo].power;
  //let lastPower = 2;
  let lastPower;
  if (cardNo === 0) {
    lastPower = 0;
  }else{
    lastPower = planCardArray[cardNo-1].power;
  }
  let xArr = [startTime,    startTime,  endTime];
  let yArr = [lastPower,    power,      power];
  for (let index = 0; index < xArr.length; index++) {
    trace.x.push(xArr[index]);
  }
  for (let index = 0; index < yArr.length; index++) {
    trace.y.push(yArr[index]);
  }
}

function convertWMToLines(endTime){
  let xArr = [0        ,  endTime];
  let yArr = [WMPowerLow,  WMPowerHigh];
  for (let index = 0; index < xArr.length; index++) {
    trace.x.push(xArr[index]);
  }
  for (let index = 0; index < yArr.length; index++) {
    trace.y.push(yArr[index]);
  }
}
function convertCDToLines(startTime, endTime){
  let xArr = [startTime,    endTime];
  let yArr = [CDPowerHigh,  CDPowerLow];
  for (let index = 0; index < xArr.length; index++) {
    trace.x.push(xArr[index]);
  }
  for (let index = 0; index < yArr.length; index++) {
    trace.y.push(yArr[index]);
  }
} 

var data;
data =[];
//trace.x.push(15);
//convertCardToLines(1,0,10);
data.push(trace);
var layout = {
  showlegend: false
};
Plotly.newPlot('myDiv', data,layout);