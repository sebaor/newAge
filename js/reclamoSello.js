document.querySelector("#btnCargar").addEventListener("click", cargarReclamo);

function cargarReclamo(){
    let sello = document.querySelector("#selectSello").value;
    /* Limpio select Sello */
    document.querySelector("#selectSello").value = "";
    let asunto = document.querySelector("#selectAsunto").value;
    /* Limpio select Asunto */
    document.querySelector("#selectAsunto").value = "";
    let rut = document.querySelector("#txtRut").value;
    /* Limpio txt RUT */
    document.querySelector("#txtRut").value = "";
    let rSocial = document.querySelector("#razonSocial").value;
    /* Limpio txt rSocial */
    document.querySelector("#razonSocial").value = "";
    let direccLocal = document.querySelector("#txtDireccLocal").value;
    /* Limpio txt direcc local */
    document.querySelector("#txtDireccLocal").value = "";
    let nTerminal = document.querySelector("#txtTerminal").value;
    /* Limpio txt N terminal */
    document.querySelector("#txtTerminal").value = "";
    let codigoComercio = document.querySelector("#txtCComercio").value;
    /* Limpio txt Ccomercio */
    document.querySelector("#txtCComercio").value = "";
    /* Resultado Final */
    document.querySelector("#pResultado").innerHTML =`
    Dirección de Correo: ${sello} <br><br>
    Asunto: ${asunto} | Razón Social: ${rSocial} <br><br>
    RUT: ${rut} <br><br>
    Razón Social: ${rSocial} <br><br>
    Dirección de Local: ${direccLocal} <br><br>
    Número de Terminal: ${nTerminal} <br><br>
    Código de Comercio: ${codigoComercio} <br><br>`;
}

