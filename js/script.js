
let controlString = '';





function zero() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
        document.getElementById('display').value += '0';
        controlString += '0';
        
    }

}
function uno() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
    document.getElementById('display').value += '1';
    controlString += '1';
    
    }
    else{
        document.getElementById('display').value = '1';
        controlString = '1';
        
    }
}
function due() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
        document.getElementById('display').value += '2';
        controlString += '2';
        
        }
        else{
            document.getElementById('display').value = '2';
            controlString = '2';
            
        }
}
function tre() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
        document.getElementById('display').value += '3';
        controlString += '3';
        
        }
        else{
            document.getElementById('display').value = '3';
            controlString = '3';
            
        }
}
function quattro() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
        document.getElementById('display').value += '4';
        controlString += '4';
        
        }
        else{
            document.getElementById('display').value = '4';
            controlString = '4';
            
        }
}
function cinque() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
        document.getElementById('display').value += '5';
        controlString += '5';
        
        }
        else{
            document.getElementById('display').value = '5';
            controlString = '5';
            
        }
}
function sei() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
        document.getElementById('display').value += '6';
        controlString += '6';
        
        }
        else{
            document.getElementById('display').value = '6';
            controlString = '6';
            
        }
}
function sette() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
        document.getElementById('display').value += '7';
        controlString += '7';
        
        }
        else{
            document.getElementById('display').value = '7';
            controlString = '7';
        }
}
function otto() {
    if (controlString.charAt(0) != '0' || controlString.indexOf('.') != -1) {
        document.getElementById('display').value += '8';
        controlString += '8';
        
        }
        else{
            document.getElementById('display').value = '8';
            controlString = '8';
            
        }
}
function nove() {
    if (controlString.charAt(0) != '0'|| controlString.indexOf('.') != -1 ) {
        document.getElementById('display').value += '9';
        controlString += '9';
        
        }
        else{
            document.getElementById('display').value = '9';
            controlString = '9';
            
        }
}

function virgola() {
    if (document.getElementById('display').value.length != 0 &&  controlString.indexOf('.') == -1 ) {
        document.getElementById('display').value += '.';
        controlString += '.';
        
    }
}

function pi() {
    document.getElementById('display').value += '3.1415926536';
    controlString = '3.1415926536';
}

function potenza() {
    if (controlString.length != 0) {
        document.getElementById('display').value += '**';
        controlString = '';
    }
}

function C() {
    document.getElementById('display').value = "";
    controlString = '';
}

function parentesiOpen() {
    document.getElementById('display').value += "(";
}

function parentesiClosed() {
    document.getElementById('display').value += ")";
}

function somma() {
    if (controlString.length != 0 ) {
        document.getElementById('display').value += "+";
        controlString = '';
    }
}

function moltiplicazione() {
    if (controlString.length != 0) {
        document.getElementById('display').value += "*";
        controlString = '';
    }
}
function sottrazione() {
    let valoreInput = document.getElementById('display').value;
    if(valoreInput.length == 0 || (valoreInput.charAt(valoreInput.length -1)) != '-' )
    document.getElementById('display').value += "-";
    controlString = '';

}
function divisione() {
    if (controlString.length != 0) {
        document.getElementById('display').value += "/";
        controlString = '';
    }
}

function uguale() {
    let risultato = new Function('return ' + document.getElementById('display').value)
    document.getElementById('textarea').value += document.getElementById('display').value + ' : \n' + + risultato() + '\n';
    document.getElementById('display').value = risultato();
    controlString = risultato();
}

function refresh() {
    document.getElementById('textarea').value = "";
}



