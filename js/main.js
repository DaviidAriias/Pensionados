//Document Ready - Validación DOM
document.addEventListener("DOMContentLoaded", function() {
    console.log('JS Loaded - Everything OK!');
});


//-------------------- Variable body usada multiples veces en la ejecución de modales
var body = document.getElementsByTagName('body')[0];


//-------------------- Overlay Estudio de crédito
function showModalStudy(){
    document.getElementById('StudyProcess').classList.add('contStudyProcess--isShow');
    body.classList.add('is--scrollLocked');
}


//-------------------- Overlay Modal
function showModal(){
    document.getElementById('modalDefault').classList.add('contModal--isShow');
    body.classList.add('is--scrollLocked');
}

function hideModal(){
    document.getElementById('modalDefault').classList.remove('contModal--isShow');
    body.classList.remove('is--scrollLocked');
}


//-------------------- Overlay Canguro
function showKangaroo(){
    document.getElementById('contCanguro').classList.add('contCanguroMain--iscanguroShow');
    body.classList.add('is--scrollLocked');
}

function hideKangaroo(){
    document.getElementById('contCanguro').classList.remove('contCanguroMain--iscanguroShow');
    body.classList.remove('is--scrollLocked');
}


//-------------------- Mostrar Direccion
function chengeAddress(){
    document.getElementById('triggerChangeAddress').style.display = 'none';
    document.getElementById('adressDefault').style.display = 'none';
    document.getElementById('adressAltern').style.display = ''; //vacio para que tome el flex que trae por defecto
}


//-------------------- Mostrar Información persoal
function showPersonalInfo(){
    document.getElementById('firstInfo').style.display = 'none';
    document.getElementById('secondInfo').style.display = 'inline-block';
}


//-------------------- Editar fecha cédula
function editFechaCedula(){
    document.getElementById('triggerEditFechaCedula').style.display = 'none';
    var input = document.getElementById('fecha-cedula');
    input.classList.remove('editable')
    input.disabled = false;
    input.focus();
    function openPicker(inputDateElem) {
        var ev = document.createEvent('KeyboardEvent');
        ev.initKeyboardEvent('keydown', true, true, document.defaultView, 'F4', 0);
        inputDateElem.dispatchEvent(ev);
    }
    
    openPicker(cal);
}


//-------------------- Editar pais nacimiento
function editPaisNaciemiento(){
    document.getElementById('triggerEditPaisNacimiento').style.display = 'none';
    var input = document.getElementById("pais-nacimiento");
    input.disabled = false;
    input.focus();
    input.select();
}


//-------------------- Editar ciudad nacimiento
function editCiudadNacimiento(){
    document.getElementById('triggerCiudadNacimiento').style.display = 'none';
    var input = document.getElementById("ciudad-nacimiento");
    input.disabled = false;
    input.focus();
    input.select();
}


//-------------------- Mostrar datos ocultos confirmación y resultados
function seeMoreDetails(){
    document.getElementById('result__ConfirToggleOpen').style.display = 'none';
    document.getElementById('boxResultConfirmHidden').style.display = 'block';
    document.getElementById('result__ConfirToggleClose').style.display = '';
}

function seeLessDetails(){
    document.getElementById('result__ConfirToggleClose').style.display = 'none';
    document.getElementById('boxResultConfirmHidden').style.display = 'none';
    document.getElementById('result__ConfirToggleOpen').style.display = '';
}


//-------------------- Añadir  y eliminar producto extra vinculación
function addExtraProduct(){
    document.getElementById('extraProduct').style.display = 'inline-block';
}

function deleteExtraProduct(){
    document.getElementById('extraProduct').style.display = 'none';
}

