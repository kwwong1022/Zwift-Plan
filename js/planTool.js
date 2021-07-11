// Plan Tool Function
function createText(filename) {
	var text = '';

	text += '<workout_file>\n	<author>'+ authorName +'</author>\n	<name>zwo Test</name>\n	<description></description>\n	<sportType>bike</sportType>\n	<tags/>\n	<workout>\n'
	text += genZWO();
	text += '	</workout>\n</workout_file>';
	download(filename, text)
}

function genZWO(){
	let str = '';
	if (hasWM === true) {
		str+='		<Warmup Duration="'+ WMDuration +'" PowerLow="'+ WMPowerLow +'" PowerHigh="'+ WMPowerHigh +'" pace="0"/>\n'
	}
	for (let index = 1; index < planCardArray.length; index++) {
		str+=genCardToZWO(index);
	}

	if (hasCD === true) {
		str+='		<Cooldown Duration="'+ CDDuration +'" PowerLow="'+ CDPowerLow +'" PowerHigh="'+ CDPowerHigh +'" pace="0"/>\n'
	}
	return str;
}

function genCardToZWO(SCard){//SCard should be number of element in the cardArray
	let str = '';
	if (planCardArray[SCard].isFreeride) {
		str+='		<FreeRide Duration="'+ (planCardArray[SCard].durationMinute*60+planCardArray[SCard].durationSecond) +'" FlatRoad="0"/>\n'
	} 
	else {
		str+='		<SteadyState Duration="'+ (planCardArray[SCard].durationMinute*60+planCardArray[SCard].durationSecond) +'" Power="'+ planCardArray[SCard].power +'" pace="0"/>\n'
	} 
	return str;
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