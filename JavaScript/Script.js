function calcularCuotaTratamiento(pago, cuotas) {

  cuotas = parseInt(cuotas);

    if (cuotas == 3) {
      let cuota = pago * 0.2;
      return cuota;
  
    } else if (cuotas == 6) {
      let cuota = pago * 0.5;
      return cuota;
  
    } else if (cuotas == 12) {
      let cuota = pago * 0.8;
      return cuota;
  
    } else if (pagos == "efectivo") {
      let cuota = pago;
      return cuota;
    }
  }
  
  // ---- PRECIOS DE PRODUCTOS ----- //
  
  const precio_abrillantado = 20000;
  const precio_pulido = 32000;
  const precio_ceramico = 54000;
  
  // ---- VARIABLES ---- //
  
  let menu = 0;
  let cuotas = 0;
  let pagos = 0;
  
  console.log("Bienvendios a CarDetaling");
  
  while (menu != "fin") {
  
    // -------------------------------- INGRESO A LA LISTA ---------------------------------- //
  
    menu = prompt( 'Ingrese "lista" para ver los tratamientos disponibles o "fin" para terminar' );
  
    if (menu != "fin") {
      {
        // --------------------------------- SELECCION DE TRATAMIENTO ----------------------------- //
  
        tratamiento = prompt( "Ingrese el nombre del tratamiento para seleccionarlo\n Abrillantado: $20000\n Pulido: $32000\n Ceramico: $54000" );
  
        console.log("Tratamiento seleccionado: " + tratamiento);
  
        pagos = prompt("¿Como abonaras?, ¿Tarjeta o Efectivo? ");
      }
  
      // ------------------------------------------   EFECTIVO   ---------------------------------------------- //
  
      if (pagos == "efectivo") {
        if (tratamiento == "Abrillantado" || tratamiento == "abrillantado") {
  
          console.log( "El precio de tu tratamiento en efectivo es: $",calcularCuotaTratamiento(precio_abrillantado) );
  
        }
  
        else if (tratamiento == "Pulido" || tratamiento == "pulido") {
  
          console.log( "El precio de tu tratamiento en efectivo es: $",calcularCuotaTratamiento(precio_pulido) );
  
        }
  
        else if (tratamiento == "Ceramico" || tratamiento == "ceramico") {
  
          console.log( "El precio de tu tratamiento en efectivo es: $",calcularCuotaTratamiento(precio_ceramico) );
  
        }
  
      }
  
      // ------------------------------------------- TARJETA -------------------------------------------- //
  
      else if (pagos == "tarjeta") {
  
        cuotas = prompt("En cuantas cuotas desea abonar: 3, 6 o 12 ?");
  
        if (tratamiento == "Abrillantado" || tratamiento == "abrillantado") {
  
          console.log( "El precio final en",cuotas,"cuotas es $",calcularCuotaTratamiento(precio_abrillantado, cuotas) + precio_abrillantado );
          console.log( "El precio de cada cuota es: $",(calcularCuotaTratamiento(precio_abrillantado, cuotas) + precio_abrillantado) / cuotas );
  
        }
  
        else if (tratamiento == "Pulido" || tratamiento == "pulido") {
  
          console.log( "El precio final en",cuotas,"cuotas es $",calcularCuotaTratamiento(precio_pulido, cuotas) + precio_pulido );
          console.log( "El precio de cada cuota es: $",(calcularCuotaTratamiento(precio_pulido, cuotas) + precio_pulido) / cuotas );
  
        }
  
        else if (tratamiento == "Ceramico" || tratamiento == "ceramico") {
  
          console.log( "El precio final en",cuotas,"cuotas es $",calcularCuotaTratamiento(precio_ceramico, cuotas) + precio_ceramico );
          console.log( "El precio de cada cuota es: $",(calcularCuotaTratamiento(precio_ceramico, cuotas) + precio_ceramico) / cuotas );
  
        }
      }
    }
  
    // ----------------------------------------------- FIN ----------------------------------------------- //
    else {
        console.log("Refresque la pagina para comenzar a comprar");
    }
  }