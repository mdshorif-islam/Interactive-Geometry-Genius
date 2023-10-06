// ****************triangle area start********************
function calcuateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base')
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    // get triangle height value
    const heightfield = document.getElementById('triangle-height');
    const heightValueText = heightfield.value;
    const height = parseFloat(heightValueText);


    // validate
    if(isNaN(base) || isNaN(height)){
        alert('please insert number');
        return
    }

    // base height value calculate
    const areas = 0.5 * base * height;
    

    // show triangle  area 
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = areas;

     // add to calculation entry
        addToCalculationEntry('triangle', areas);
}
//******************************** */ triangle area End********************************


// ******************************* Rectangle area start *******************************
function calcuateRectangleArea(){
    const rectangleWidth = getInputValue('rectangle-width');
    const rectangleLength = getInputValue('rectangle-length');

    if(isNaN(rectangleWidth) || isNaN(rectangleLength)){
        alert('please insert number');
        return
    }

    const area = rectangleWidth * rectangleLength;

    setElemnetInnerText('rectangle-area', area);

    addToCalculationEntry('Rectangle', area);
}
// ******************************* Rectangle area End *********************************

//************************** */ Parallelogram area start ******************************
function calcuateParallelogramArea(){
    const base = getInputValue('parallelogra-base');
    const height = getInputValue('parallelogra-height');

    // validate
    if(isNaN(base) || isNaN(height)){
        alert('please insert number');
        return;
    }

    const area = base * height;
    setElemnetInnerText('parallelogram-area',area);

    // add to calculation entry
    addToCalculationEntry('parallelogram', area);
}
//************************** */ Parallelogram area end ******************************


// ************************** Rhombus area start**********************************
function calcuateRhombusmArea(){
    const base = getInputValue('rhombus-base');
    const height = getInputValue('rhombus-height');

    if(isNaN(base) || isNaN(height)){
        alert('please insert number');
        return;
    }

    const area = 0.5 * base * height;

    setElemnetInnerText('rhombus-area', area);

    addToCalculationEntry('rhombus',area);
}
// **************************Rhombus area End ***********************************

// **************************Pentagon area start ********************************
function calcuatepentagonArea(){
    const perimeter = getInputValue('pentagon-perimeter');
    const base = getInputValue('pentagon-base');

    if(isNaN(perimeter) || isNaN(base)){
        alert('please insert number');
        return;
    }

    const area = 0.5 * perimeter * base;

    setElemnetInnerText('pentagons-area', area);

    addToCalculationEntry('pentagons', area);
}
// **************************Pentagon area end **********************************

// **************************Ellipse area start *********************************
function calcuateEllipseArea(){
    const major = getInputValue('ellipse-major-radius');
    const minor = getInputValue('ellipse-minor-redius');

    if(isNaN(major) || isNaN(minor)){
        alert('please insert number');
        return;
    }
const area = 3.14 * major * minor;

setElemnetInnerText('ellipse-area', area);

addToCalculationEntry('ellipse', area);
}
// **************************Ellipse area end **********************************











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
    p.classList.add('my-5');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success btn-sm text-white">Convert</button>`;
    calculationEntry.appendChild(p);
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