let alumnos = [];



    let persona1 = {
        nombre: "Matthew",
        apellido: "McCrea",
        edad: 23}

    let persona2 = {
        nombre:"Eric",
        apellido:"McCrea",
        edad:52
    }

    let persona3 = {
        nombre:"Thomas",
        apellido:"McCrea",
        edad:25
    }

    alumnos.push(persona1,persona2,persona3);

    function esMasGrande() {

      
        let edadMaxima = 0;
        let estudianteMasViejo=null;

        for (let i = 0; i < alumnos.length; i++) {
           
            console.log("Procesando la edad: "+alumnos[i].edad );
            if (alumnos[i].edad>edadMaxima) {
                edadMaxima = alumnos[i].edad;
                estudianteMasViejo = alumnos[i];
                
            }else{
                i++;
            }
          
      
        }
        return estudianteMasViejo;
    }

    console.log(esMasGrande());
  //  console.log(alumnos);
  // console.log(esMasGrande(alumnos));



