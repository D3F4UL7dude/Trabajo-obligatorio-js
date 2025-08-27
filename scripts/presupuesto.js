const productoSelect = document.getElementById('producto');
const inputMeses = document.getElementById('meses');
const extra1 = document.getElementById('extra1');
const extra2 = document.getElementById('extra2');
const extra3 = document.getElementById('extra3');
const resultadoFinal = document.getElementById('resultado')

function calcularPresupuesto(){
    let precioBase = parseInt(productoSelect.value) || 0;
    let meses = parseInt(inputMeses.value) || 0;
    let descuento = 0;
    if (meses >=6){
        descuento = 0.10
    }
    let extras = 0
    if(extra1.checked) extras += 100;
    if(extra2.checked) extras += 150;
    if(extra3.checked) extras += 200;

    let total = (precioBase + extras) * meses;
    total = total - total * descuento

    resultadoFinal.textContent = total.toFixed(2)
}

productoSelect.addEventListener('input', calcularPresupuesto);
inputMeses.addEventListener('input', calcularPresupuesto);
extra1.addEventListener('input', calcularPresupuesto);
extra2.addEventListener('input', calcularPresupuesto);
extra3.addEventListener('input', calcularPresupuesto);

calcularPresupuesto();


// boton de reset
const form = document.getElementById('formPresupuesto');
const btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click', function(e){
    e.preventDefault();
    form.reset();
});