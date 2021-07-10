/*
let cyclistName = "";
let authorName = "";
let userFTP = 200;
let isFTPNaN = false;
let userWeight = 75;
let isWeightNaN = false;
let metric = "kilogram";
let profileIsClosed = false;
*/

const planCardArray = [];

// plan-card-0
const planCard0 = {
    id: "plan-card-0",
    mode: 0, // 0-edit, 1-info
    showAvgPower: false,
    isFreeride: false,
    power: 160,
    durationMinute: 30,
    durationSecond: 0,
}
planCardArray.push(planCard0);

let cardInitialize = (planCard) => {
    const editCard = document.querySelector(`#${planCard.id} .edit-card`);
    const infoCard = document.querySelector(`#${planCard.id} .card-info`);
    const cardTitleZoneLv = document.querySelector(`#${planCard.id} .title-zone-level`);
    const cardTitlePower = document.querySelector(`#${planCard.id} .title-power`);
    const btnShowAvgPower = document.querySelector(`#${planCard.id} .btn-show-avg-power`);
    const btnIsFreeride = document.querySelector(`#${planCard.id} .btn-is-freeride`);

    const powerPercentage = document.querySelector(`#${planCard.id} .power-percentage`);
    const addPowerPercentageSmall = document.querySelector(`#${planCard.id} .power-percentage-add-sm`);
    const addPowerPercentageLarge = document.querySelector(`#${planCard.id} .power-percentage-add-l`);
    const minusPowerPercentageSmall = document.querySelector(`#${planCard.id} .power-percentage-minus-sm`);
    const minusPowerPercentageLarge = document.querySelector(`#${planCard.id} .power-percentage-minus-l`);

    const powerWatt = document.querySelector(`#${planCard.id} .power-watt`);
    const addPowerWattSmall = document.querySelector(`#${planCard.id} .power-watt-add-sm`);
    const addPowerWattLarge = document.querySelector(`#${planCard.id} .power-watt-add-l`);
    const minusPowerWattSmall = document.querySelector(`#${planCard.id} .power-watt-minus-sm`);
    const minusPowerWattLarge = document.querySelector(`#${planCard.id} .power-watt-minus-l`);

    btnShowAvgPower.addEventListener('click', () => {
        if (!planCard.showAvgPower) {
            planCard.showAvgPower = true;
            btnShowAvgPower.style.backgroundColor = "rgba(255, 255, 255, 1)";
            btnShowAvgPower.style.color = "grey";
            console.log(`${planCard.id}.showAvgPower: ${planCard.showAvgPower}`);
        } else {
            planCard.showAvgPower = false;
            btnShowAvgPower.style.backgroundColor = "rgba(255, 255, 255, .5)";
            btnShowAvgPower.style.color = "rgb(82, 82, 82)";
            console.log(`${planCard.id}.showAvgPower: ${planCard.showAvgPower}`);
        }
    })
    btnIsFreeride.addEventListener('click', () => {
        if (!planCard.isFreeride) {
            planCard.isFreeride = true;
            btnIsFreeride.style.backgroundColor = "rgba(255, 255, 255, 1)";
            btnIsFreeride.style.color = "grey";
            console.log(`${planCard.id}.isFreeRide: ${planCard.isFreeride}`);
            // update title
            // disable edit btns
        } else {
            planCard.isFreeride = false;
            btnIsFreeride.style.backgroundColor = "rgba(255, 255, 255, .5)";
            btnIsFreeride.style.color = "rgb(82, 82, 82)";
            console.log(`${planCard.id}.isFreeRide: ${planCard.isFreeride}`);
        }
        updateCard();
    })

    powerPercentage.innerText = Math.floor(parseInt(planCard.power / userFTP * 100));
    addPowerPercentageSmall.addEventListener('click', () => {
        processPowerData(true, powerPercentage, 1);
    })
    addPowerPercentageLarge.addEventListener('click', () => {
        processPowerData(true, powerPercentage, 5);
    })
    minusPowerPercentageSmall.addEventListener('click', () => {
        processPowerData(true, powerPercentage, -1);
    })
    minusPowerPercentageLarge.addEventListener('click', () => {
        processPowerData(true, powerPercentage, -5);
    })

    powerWatt.innerText = planCard.power;
    addPowerWattSmall.addEventListener('click', () => {
        processPowerData(false, powerWatt, 1);
    })
    addPowerWattLarge.addEventListener('click', () => {
        processPowerData(false, powerWatt, 5);
    })
    minusPowerWattSmall.addEventListener('click', () => {
        processPowerData(false, powerWatt, -1);
    })
    minusPowerWattLarge.addEventListener('click', () => {
        processPowerData(false, powerWatt, -5);
    })

    let processPowerData = (isPer, span, amount) => {
        let curr = parseInt(span.innerText);
        curr += amount;

        if (isPer) {
            planCard.power = Math.floor(curr * userFTP / 100);
            span.innerText = curr;
            powerWatt.innerText = planCard.power;
        } else {
            planCard.power = curr;
            span.innerText = curr;
            powerPercentage.innerText = Math.floor(curr / userFTP * 100);
        }

        updateCard();
    }

    const durationMinute = document.querySelector(`#${planCard.id} .duration-minute`);
    const addDurationMinuteSmall = document.querySelector(`#${planCard.id} .duration-min-add-sm`);
    const addDurationMinuteLarge = document.querySelector(`#${planCard.id} .duration-min-add-l`);
    const minusDurationMinuteSmall = document.querySelector(`#${planCard.id} .duration-min-minus-sm`);
    const minusDurationMinuteLarge = document.querySelector(`#${planCard.id} .duration-min-minus-l`);

    const durationSecond = document.querySelector(`#${planCard.id} .duration-second`);
    const addDurationSecondSmall = document.querySelector(`#${planCard.id} .duration-sec-add-sm`);
    const addDurationSecondLarge = document.querySelector(`#${planCard.id} .duration-sec-add-l`);
    const minusDurationSecondSmall = document.querySelector(`#${planCard.id} .duration-sec-minus-sm`);
    const minusDurationSecondLarge = document.querySelector(`#${planCard.id} .duration-sec-minus-l`);

    if (planCard.durationMinute < 10) {
        durationMinute.innerText = `0${planCard.durationMinute}`;
    }
    addDurationMinuteSmall.addEventListener('click', () => {
        processDurationData(true, durationMinute, 1);
    })
    addDurationMinuteLarge.addEventListener('click', () => {
        processDurationData(true, durationMinute, 5);
    })
    minusDurationMinuteSmall.addEventListener('click', () => {
        processDurationData(true, durationMinute, -1);
    })
    minusDurationMinuteLarge.addEventListener('click', () => {
        processDurationData(true, durationMinute, -5);
    })

    if (planCard.durationSecond < 10) {
        durationSecond.innerText = `0${planCard.durationSecond}`;
    }
    addDurationSecondSmall.addEventListener('click', () => {
        processDurationData(false, durationSecond, 1);
    })
    addDurationSecondLarge.addEventListener('click', () => {
        processDurationData(false, durationSecond, 5);
    })
    minusDurationSecondSmall.addEventListener('click', () => {
        processDurationData(false, durationSecond, -1);
    })
    minusDurationSecondLarge.addEventListener('click', () => {
        processDurationData(false, durationSecond, -5);
    })

    let processDurationData = (isMin, span, amount) => {
        let curr = parseInt(span.innerText);
        curr += amount;

        if (isMin) {
            planCard.durationMinute = curr;
            span.innerText = curr;
        } else {
            if (curr >= 60) { 
                curr = 0;
            }
            planCard.durationSecond = curr;
            span.innerText = curr;
        }

        updateCard();
    }

    let updateCard = () => {
        let currPowerPercentage = planCard.power / userFTP;
        let currZone = "";
        let currBgColor = "";

        if (currPowerPercentage < 0.56) {
            currZone = "1"
            currBgColor = "rgb(141, 141, 141)";
        } else if (currPowerPercentage >= 0.56 && currPowerPercentage < 0.76) {
            currZone = "2"
            currBgColor = "rgb(59, 179, 248)";
        } else if (currPowerPercentage >= 0.76 && currPowerPercentage < 0.88) {
            currZone = "3"
            currBgColor = "rgb(46, 196, 71)";
        } else if (currPowerPercentage >= 0.88 && currPowerPercentage < 0.95) {
            currZone = "4"
            currBgColor = "rgb(252, 132, 53)";
        } else if (currPowerPercentage >= 0.95 && currPowerPercentage < 1.05) {
            currZone = "5"
            currBgColor = "rgb(233, 203, 68)";
        } else if (currPowerPercentage >= 1.05 && currPowerPercentage < 1.55) {
            currZone = "6"
            currBgColor = "rgb(233, 68, 68)";
        } else {
            currZone = "7"
            currBgColor = "rgb(170, 35, 159)";
        }

        cardTitleZoneLv.innerText = currZone;
        cardTitlePower.innerText = planCard.power;
        infoCard.style.backgroundColor = currBgColor;
        editCard.style.backgroundColor = currBgColor;

        const cardInfoTitleZoneLv = document.querySelector(`#${planCard.id} .card-info-title-zone-level`);
        const cardInfoTitlePower = document.querySelector(`#${planCard.id} .card-info-title-power`);
        const cardInfoTitleHr = document.querySelector(`#${planCard.id} .card-info-title-hr`);
        const cardInfoTitleMin = document.querySelector(`#${planCard.id} .card-info-title-min`);
        const cardInfoTitleSec = document.querySelector(`#${planCard.id} .card-info-title-sec`);

        let hour = Math.floor(planCard.durationMinute / 60);
        let min = Math.floor(planCard.durationMinute % 60);
        let sec = Math.floor(planCard.durationSecond);

        cardInfoTitleZoneLv.innerText = currZone;
        cardInfoTitlePower.innerText = planCard.power;
        cardInfoTitleHr.innerText = hour;
        if (min < 10) {
            cardInfoTitleMin.innerText = `0${min}`;
        } else {
            cardInfoTitleMin.innerText = min;
        }
        if (sec < 10) {
            cardInfoTitleSec.innerText = `0${sec}`;
        } else {
            cardInfoTitleSec.innerText = sec;
        }

        const cardInfoIF = document.querySelector(`#${planCard.id} .card-info-if`);
        const cardInfoTSS = document.querySelector(`#${planCard.id} .card-info-tss`);

        // TSS = (sec x NP® x IF®)/(FTP x 3600) x 100
        cardInfoIF.innerText = planCard.power / userFTP;
        cardInfoTSS.innerText = (planCard.durationMinute*60+planCard.durationSecond)*planCard.power*(planCard.power / userFTP)/(userFTP*3600)*100;
    
        
    }

    updateCard();
}

cardInitialize(planCardArray[0]);