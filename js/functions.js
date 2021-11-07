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

function CostolCapitalAccionariado(){
    
    var num1=Number(document.getElementById('RF').value);
    var num2=Number(document.getElementById('RM').value);
    var num3=Number(document.getElementById('B').value);
    var resultado=num1+(num2-num1)*num3;
    resultado = resultado.toFixed(2);
    document.getElementById('CCA').value=resultado;
}

function CostoPromedioPonderadoCapital(){
    
    var num1=Number(document.getElementById('KD').value);
    var num2=Number(document.getElementById('KE').value);
    var num3=Number(document.getElementById('D').value);
    var num4=Number(document.getElementById('P').value);
    var num5=Number(document.getElementById('T').value);
    var resultado=(num2*(num4/(num4+num3)))+(num1*(num3/(num4+num3)))*(1-num5);
    resultado = resultado.toFixed(4);
    document.getElementById('WACC').value=resultado;
}

function Desapalancar(){
    
    var num1=Number(document.getElementById('B_DA').value);
    var num2=Number(document.getElementById('B_Dt1').value);
    var num3=Number(document.getElementById('B_DDeuda').value);
    var num4=Number(document.getElementById('B_DCapital').value);
    var resultado=(num1)/(1+((1-num2)*(num3/num4)));
    resultado = resultado.toFixed(3);
    document.getElementById('B_DResult').value=resultado;
}

function Apalancar(){
    
    var num1=Number(document.getElementById('B_AD').value);
    var num2=Number(document.getElementById('B_At2').value);
    var num3=Number(document.getElementById('B_ADeuda').value);
    var num4=Number(document.getElementById('B_ACapital').value);
    var resultado=(1+((1-num2)*(num3/num4)))*num1;
    resultado = resultado.toFixed(3);
    document.getElementById('B_AResult').value=resultado;
}




function roic(){
    
    
        var num1=Number(document.getElementById('Ebit').value);
        var num2=Number(document.getElementById('tasa').value);
        var num2=num2/100;
        var num3=Number(document.getElementById('capPro').value);
        var num4=Number(document.getElementById('deuFi').value);
   
        var resultado=(((num1*(1-num2))/(num3+num4))*100);
        resultado = resultado.toFixed(2);
        document.getElementById('ROIC').value=resultado+"%";
    


}