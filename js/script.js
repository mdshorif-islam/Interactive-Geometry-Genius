function calcuateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base')
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    // get triangle height value
    const heightfield = document.getElementById('triangle-height');
    const heightValueText = heightfield.value;
    const height = parseFloat(heightValueText);

    // base height value calculate
    const area = 0.5 * base * height;
    

    // show triangle  area 
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}


// function calcuateRectangleArea(){
//     // get rectangle width
//     const widthField = document.getElementById('rectangle-width');
//     const widthValueText = widthField.value;
//     const width = parseFloat(widthValueText);
    
//     // get rectangle length
//     const lengthField = document.getElementById('rectangle-length');
//     const lengthValueText = lengthField.value;
//     const length = parseFloat(lengthValueText);
    
//     // calculate area
//     const area = width * length;

//     // show retangle area
//     const rectangleAreaSpan = document.getElementById('rectangle-area');
//     rectangleAreaSpan.innerText = area;
// }

// reuseable function code


function calcuateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-redius');

    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElemnetInnerText('ellipse-area', areaTwoDecimal);

    addToCalculationEntry('Ellipse', area);
}

function calcuateParallelogramArea(){
    const base = getInputValue('parallelogra-base');
    const height = getInputValue('parallelogra-height');

    // validate
    if(isNaN(base) || isNaN(height)){
        alert('please insert number');
        return
    }

    const area = base * height;
    setElemnetInnerText('parallelogram-area',area);

    // add to calculation entry
    addToCalculationEntry('parallelogram', area);
}


function calcuateRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');

    const area = width * length;
    setElemnetInnerText('rectangle-area', area);
}




function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reuseable set span  p div etc text
function setElemnetInnerText(elementID, area){
    const element = document.getElementById(elementID);
    element.innerText = area;
}


// area calculation and add calculation entry
function addToCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success">Convert</button>`;
    calculationEntry.appendChild(p);
}