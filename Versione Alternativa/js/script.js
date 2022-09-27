let addizione,diviso,moltiplica,sottrai = false;

let indice = 0;
let controlString = "";
let contenitore = [
    '',
    ''
];



function zero() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
    document.getElementById('display').value += '0';
    contenitore[indice] = contenitore[indice].concat('0');
    controlString += '0';
    }
}
function uno() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
    document.getElementById('display').value += '1';
    contenitore[indice] = contenitore[indice].concat('1');
    controlString += '1';
    }
    else{
        document.getElementById('display').value = '1';
        contenitore[indice] = '1';
        controlString = '1';
        
    }
}
function due() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
        document.getElementById('display').value += '2';
        contenitore[indice] = contenitore[indice].concat('2');
        controlString += '2';
        }
        else{
            document.getElementById('display').value = '2';
            contenitore[indice] = '2';
            controlString = '2';
            
        }
}
function tre() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
        document.getElementById('display').value += '3';
        contenitore[indice] = contenitore[indice].concat('3');
        controlString += '3';
        }
        else{
            document.getElementById('display').value = '3';
            contenitore[indice] = '3';
            controlString = '3';
            
        }
}
function quattro() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
        document.getElementById('display').value += '4';
        contenitore[indice] = contenitore[indice].concat('4');
        controlString += '4';
        }
        else{
            document.getElementById('display').value = '4';
            contenitore[indice] = '4';
            controlString = '4';
            
        }
}
function cinque() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
        document.getElementById('display').value += '5';
        contenitore[indice] = contenitore[indice].concat('5');
        controlString += '5';
        }
        else{
            document.getElementById('display').value = '5';
            contenitore[indice] = '5';
            controlString = '5';
            
        }
}
function sei() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
        document.getElementById('display').value += '6';
        contenitore[indice] = contenitore[indice].concat('6');
        controlString += '6';
        }
        else{
            document.getElementById('display').value = '6';
            contenitore[indice] = '6';
            controlString = '6';
            
        }
}
function sette() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
        document.getElementById('display').value += '7';
        contenitore[indice] = contenitore[indice].concat('7');
        controlString += '7';
        }
        else{
            document.getElementById('display').value = '7';
            contenitore[indice] = '7';
            controlString = '7';
            
        }
}
function otto() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
        document.getElementById('display').value += '8';
        contenitore[indice] = contenitore[indice].concat('8');
        controlString += '8';
        }
        else{
            document.getElementById('display').value = '8';
            contenitore[indice] = '8';
            controlString = '8';
            
        }
}
function nove() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
        document.getElementById('display').value += '9';
        contenitore[indice] = contenitore[indice].concat('9');
        controlString += '9';
        }
        else{
            document.getElementById('display').value = '9';
            contenitore[indice] = '9';
            controlString = '9';
            
        }
}
function virgola() {
    if (document.getElementById('display').value.length != 0 &&  controlString.indexOf('.') == -1 ) {
    document.getElementById('display').value += '.'
    contenitore[indice] = contenitore[indice].concat('.');
    controlString += '.';
    }
}

function C() {
    document.getElementById('display').value = "";
    indice = 0;
    addizione, moltiplica, diviso, sottrai = false;
    contenitore = ["", ""];
    controlString = "";
}


function somma() {
    if (controlString.length != 0  && indice < contenitore.length -1) {
        document.getElementById('display').value += "+";
        addizione = true;
        indice++;
        controlString = "";
    }
}

function moltiplicazione() {
    if (controlString.length != 0 && indice < contenitore.length -1 ) {
        document.getElementById('display').value += "*";
        moltiplica = true;
        indice++;
        controlString = "";
    }
}
function sottrazione() {
    if (controlString.length != 0 && indice < contenitore.length -1 ) {
        document.getElementById('display').value += "-";
        moltiplica = true;
        indice++;
        controlString = "";
    }
}
function divisione() {
    if (controlString.length != 0  && indice < contenitore.length -1) {
        document.getElementById('display').value += "/";
        diviso = true;
        indice++;
        controlString = "";
    }
}

function uguale() {
    
    if (addizione) {
        let totale = document.getElementById('display').value = Number(contenitore[0]) + Number(contenitore[1]);
        document.getElementById('textarea').value += contenitore[0] + ' + ' + contenitore[1] + ': \n';
        document.getElementById('textarea').value += totale + '\n';
        indice = 0;
        addizione = false;
        contenitore = [totale.toString(), ""];
    }
    if (sottrai) {
        let totale = document.getElementById('display').value = Number(contenitore[0]) - Number(contenitore[1]);
        document.getElementById('textarea').value += contenitore[0] + ' - ' + contenitore[1] + ': \n';
        document.getElementById('textarea').value += totale + '\n';
        indice = 0;
        sottrai = false;
        contenitore = [totale.toString(), ""];
    }
    if (moltiplica) {
        let totale = document.getElementById('display').value = Number(contenitore[0]) * Number(contenitore[1]);
        document.getElementById('textarea').value += contenitore[0] + ' * ' + contenitore[1] + ': \n';
        document.getElementById('textarea').value += totale + '\n';
        indice = 0;
        moltiplica = false;
        contenitore = [totale.toString(), ""];
    }
    if (diviso) {
        let totale = document.getElementById('display').value = Number(contenitore[0]) / Number(contenitore[1]);
        document.getElementById('textarea').value += contenitore[0] + ' / ' + contenitore[1] + ': \n';
        document.getElementById('textarea').value += totale + '\n';
        indice = 0;
        diviso = false;
        contenitore = [totale.toString(), ""];
    }
    
}

function refresh() {
    document.getElementById('textarea').value = "";
}


