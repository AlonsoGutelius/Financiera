function LiquidezGeneral(){
    
var num1=Number(document.getElementById('Ac').value);
var num2=Number(document.getElementById('Pc').value);
var res=num1/num2;
res = res.toFixed(2);
document.getElementById('LG').value=res;

}

function pruebaAcida(){
    var num1=Number(document.getElementById('AC').value);
    var num2=Number(document.getElementById('IN').value);
    var num3=Number(document.getElementById('PC').value);
    var respu=(num1-num2)/num3;
    respu = respu.toFixed(2);
    document.getElementById('PruebaA').value=respu;
}

function CapitalTrabajo(){
    var num1    =Number(document.getElementById('Atc').value);
    var num2=Number(document.getElementById('PasC').value);
    var respu= num1-num2;
    respu = respu.toFixed(2);
    document.getElementById('CT').value=respu;
}
function RotacionCartera(){
    var num1=Number(document.getElementById('CXC').value);
    var num2=Number(document.getElementById('VT').value);
    var respu= (num1*360)/num2;
    respu = respu.toFixed();
    document.getElementById('RC').value=respu + " días";
}
function RotacionCajaYBancos(){
    var num1=Number(document.getElementById('CYV').value);
    var num2=Number(document.getElementById('V').value);
    var respu= (num1*360)/num2;
    respu = respu.toFixed();
    document.getElementById('RCYB').value=respu + " días";
}
function RotacionActivosTotales(){
    var num1=Number(document.getElementById('Vent').value);
    var num2=Number(document.getElementById('AcT').value);
    var respu= num1/num2;
    respu = respu.toFixed(2);
    document.getElementById('RAT').value=respu;
}
function RotacionActivosFijos(){
    var num1=Number(document.getElementById('Venta').value);
    var num2=Number(document.getElementById('AcF').value);
    var respu= num1/num2;
    respu = respu.toFixed(2);
    document.getElementById('RAF').value=respu;
}
function RatioEndeudamiento(){
    var num1=Number(document.getElementById('pas').value);
    var num2=Number(document.getElementById('paNeto').value);
    var respu= num1/num2;
    respu = respu.toFixed(2);
    document.getElementById('RAE').value=respu;
}

function RatioEndeudamientoCortoPlazo(){
    var num1=Number(document.getElementById('pasCo').value);
    var num2=Number(document.getElementById('paneTo').value);
    var respu= num1/num2;
    respu = respu.toFixed(2);
    document.getElementById('REC').value=respu;
}
function RatioEndeudamientoLargoPlazo(){
    var num1=Number(document.getElementById('pasNoCo').value);
    var num2=Number(document.getElementById('paneto').value);
    var respu= num1/num2;
    respu = respu.toFixed(2);
    document.getElementById('REL').value=respu;
}

function RentabilidadVentas(){
    var num1=Number(document.getElementById('benBruto').value);
    var num2=Number(document.getElementById('veNetas').value);
    var respu= (num1/num2)*100;
    respu = respu.toFixed(2);
    document.getElementById('REV').value=respu+"%";
}
function RentabilidadCapitalPropio(){
    var num1=Number(document.getElementById('benNeto').value);
    var num2=Number(document.getElementById('totalPat').value);
    var respu= (num1/num2)*100;
    respu = respu.toFixed(2);
    document.getElementById('RECT').value=respu+"%";
}
function RentabilidadActivos(){
    var num1=Number(document.getElementById('beneNeto').value);
    var num2=Number(document.getElementById('totalAct').value);
    var respu= (num1/num2)*100;
    respu = respu.toFixed(2);
    document.getElementById('REA').value=respu+"%";
}