"use strict";
let oTienda = new Tienda(20);

function añadeBicicleta(){
    let sLocalizador = frmAltaBicicleta.txtLocalizador.value;
    let iAño = frmAltaBicicleta.lstAnio.value;
    let iNumPlatos = frmAltaBicicleta.txtPlatos.value;
    let iNumSuspensiones = frmAltaBicicleta.txtSuspensiones.value;
    if(sLocalizador=="" || iAño=="" || iNumPlatos == "" || iNumSuspensiones == ""){
        alert("Error, campos vacios");
    }else {
        if(document.getElementById('rbtTipoBicicleta-0').checked  ){  
            let oBicicleta= new Carretera(sLocalizador,iAño,false,iNumPlatos);
            if(oTienda.altaBicicleta(oBicicleta)==true){
               alert("Alta bicicleta OK");
               document.getElementById('frmAltaBicicleta').style.display="none";
            }else {
               alert("Error, localizador repetido");
           }    
       }
       if(document.getElementById('rbtTipoBicicleta-1').checked   ){
           
           let oBicicleta= new Montaña(sLocalizador,iAño,false,iNumSuspensiones);
           if(oTienda.altaBicicleta(oBicicleta)==true){
               alert("Alta bicicleta OK");
               document.getElementById('frmAltaBicicleta').style.display="none";
            }else {
                alert("Error, localizador repetido");
            }
       }
    }
    
    
}
function ventaBicicleta(){
    let sLocalizador = frmVentaBicicleta.txtLocalizadorVenta.value;
    alert(oTienda.ventaBicicleta(sLocalizador));
    document.getElementById('frmVentaBicicleta').style.display="none";
}

function mostrarTotales(){
    document.getElementById('totales').innerHTML="<h3>Bicicletas de Carretera: " +oTienda.numCarretera+"</h3>";
    document.getElementById('totales').innerHTML+="<h3>Bicicletas de Montaña: " +oTienda.numMontaña+"</h3>";
    document.getElementById('totales').innerHTML+="<h3>Total de bicicletas: " +oTienda.numTotal+"</h3>";
    document.getElementById('totales').innerHTML+="<h3>Total de ventas: " +oTienda.numVenta+"</h3>";
}
function listadoSeparado(){
    var oVentana = window.open("","Formularios");
    oVentana.document.write(oTienda.listadoCarretera(),oTienda.listadoMontaña());
   
    
}
function mostrarFormulario(sIdFormulario){
    document.getElementById(sIdFormulario).style.display="block";
}
