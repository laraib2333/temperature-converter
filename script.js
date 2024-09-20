function Convert() {
    let From = document.getElementById('From').value;
    let To = document.getElementById('To').value;
    let Temperature = parseFloat(document.getElementById('Temperature').value);
    let Result = document.getElementById('Result');

    var convertedTemperature;

    if (From === 'C' && To === 'F') {
        convertedTemperature = (Temperature * 9/5) + 32;
    } else if (From === 'F' && To === 'C') {
        convertedTemperature = (Temperature - 32) * 5/9;
    } else {
        convertedTemperature = Temperature; 
    }

    Result.value = convertedTemperature.toFixed(2);
}

function Reset() {
    document.getElementById('From').value = '';
    document.getElementById('To').value = '';
    document.getElementById('Temperature').value = '';
    document.getElementById('Result').value = '';
}

