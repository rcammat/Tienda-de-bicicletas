"use strict";
//Clase Tienda
class Tienda{
    constructor(iNumVentas){
        this.iNumVentas=iNumVentas;
        this.arrayBicis=[];
    }

    altaBicicleta(oBicicleta){
        if(this.arrayBicis.filter(bici => bici.sLocalizador == oBicicleta.sLocalizador).length==1){
            return false;
        }else{
            if(this.arrayBicis.push(oBicicleta)){
                return true;
            }else {
                return false;
            }
            
        }
    }
    ventaBicicleta(sLocalizador){
        let alerta="";
        let arrayBicicleta=this.arrayBicis.filter(bici => bici.sLocalizador == sLocalizador);
        if(arrayBicicleta.length==1){
            let oBicicleta=arrayBicicleta[0];
            if(oBicicleta.bVendida==false){
                oBicicleta.bVendida=true;
                alerta ="Bicicleta  vendida";
            }else {
                alerta="Bicicleta ya vendida";
            }
        }else{
            alerta = "La bicicleta no existe";
        }
        return alerta;
    }
    listadoCarretera(){
        let arrayBicisCarretera = this.arrayBicis.filter(oCarretera => oCarretera instanceof Carretera);
        let sTabla= "<h1>Tabla de Bicicletas de carretera</h1><table border='1'>";
        sTabla += "<thead><tr><th>Localizador</th><th>Año</th><th>Vendida</th><th>Num Platos</th></thead>";
        sTabla += "<tbody align='center'>";
        for(let oBicicleta of arrayBicisCarretera){
            sTabla+=oBicicleta.toHTMLrow();
        }
        sTabla += "</tbody ></table>";
        return sTabla;
    }
    listadoMontaña(){
        let arrayBicisMontaña = this.arrayBicis.filter(oMontaña => oMontaña instanceof Montaña);
        let sTabla= "<h1>Tabla de Bicicletas de montaña</h1><table border='1' >";
        sTabla += "<thead><tr><th>Localizador</th><th>Año</th><th>Vendida</th><th>Num Suspensiones</th></thead>";
        sTabla += "<tbody align='center'>";
        for(let oBicicleta of arrayBicisMontaña){
            sTabla+=oBicicleta.toHTMLrow();
        }
        sTabla += "</tbody></table>";
        return sTabla;
    }
    listadoGeneral(){
        let sTabla= "<table border='1'>";
        sTabla += "<thead><tr><th>Localizador</th><th>Año</th><th>Vendida</th></thead>";
        sTabla += "<tbody align='center'>";
        for(oBicicleta of this.arrayBicis){
         sTabla += oBicicleta.toHTMLrow();
        }
        sTabla += "</tbody></table>";
        return sTabla;
    }
    numCarretera(){
        let arrayBicisCarretera = this.arrayBicis.filter(oCarretera => oCarretera instanceof Carretera);
        return arrayBicisCarretera.length;
    }
    numMontaña(){
        let arrayBicisMontaña = this.arrayBicis.filter(oMontaña => oMontaña instanceof Montaña);
        return arrayBicisMontaña.length;
    }
    numTotal(){
        return this.arrayBicis.length;
    }
    numVenta(){
        let arrayBicisVendida = this.arrayBicis.filter(oBici => oBici.bVendida==true);
        return arrayBicisVendida.length;
    }
}

//Clase Bicicleta
function Bicicleta(sLocalizador,iAño,bVendida){
    this.sLocalizador=sLocalizador;
    this.iAño=iAño;
    this.bVendida=bVendida;
}

Bicicleta.prototype.toHTMLrow=function(){
    let sFila = "<tr>";
    sFila += "<td>" + this.sLocalizador + "</td>";
    sFila += "<td>" + this.iAño + "</td>";
    sFila += "<td>" + (this.bVendida?"Si":"No") + "</td>";
    sFila += "</tr>";
    return sFila;
};

//Clase Carretera (hereda de bicicleta)
function Carretera(sLocalizador,iAño,bVendida,iNumPlatos){
    
    //Acepta una array
    Bicicleta.call(this,sLocalizador,iAño,bVendida);
    this.iNumPlatos=iNumPlatos;
}

//Herencia de Bicicleta
Carretera.prototype = Object.create(Bicicleta.prototype);
Carretera.prototype.constructor = Carretera;

Carretera.prototype.toHTMLrow=function(){
    let sFila = "<tr>";
    sFila += "<td>" + this.sLocalizador + "</td>";
    sFila += "<td>" + this.iAño + "</td>";
    sFila += "<td>" + (this.bVendida?"Si":"No") + "</td>";
    sFila += "<td>" + this.iNumPlatos + "</td>";
    sFila += "</tr>";
    return sFila;
};

//Clase Montaña
function Montaña(sLocalizador,iAño,bVendida,iNumSuspensiones){
    //Acepta una lista
    Bicicleta.call(this,sLocalizador,iAño,bVendida);
    this.iNumSuspensiones=iNumSuspensiones;
}

//Herencia de Bicicleta
Montaña.prototype = Object.create(Bicicleta.prototype);
Montaña.prototype.constructor = Montaña;

Montaña.prototype.toHTMLrow=function(){
    let sFila = "<tr>";
    sFila += "<td>" + this.sLocalizador + "</td>";
    sFila += "<td>" + this.iAño + "</td>";
    sFila += "<td>" + (this.bVendida?"Si":"No") + "</td>";
    sFila += "<td>" + this.iNumSuspensiones + "</td>";
    sFila += "</tr>";
    return sFila;
};