$(document).ready(function(){

// BASE DE DATOS DE CHRACTERS********************************


var charactersData = {
  "utils":{
    "container":".Expo",
  },

  "fighter": { 
            name:"THE FIGHTER",
            tipo:".fighter", 
            descript:"Experto en todas las armas y tecnicas de combate, la vanguardia del equipo!!",
            habilidades:"Habilidades principales: Fuerza y Destreza",
            img:"",
            processStats:function(){},


          },

  "wizard": { 
            name:"THE WIZARD", 
            tipo:".wizard", 
            descript:"Magia y poderes, los magos no tienen limites conocidos con tiempo y preparacion",
            habilidades: "Habilidades principales: Inteligencia",
            img:"",
            processStats:function(){},

          },
  "cleric": { 
            name:"THE CLERIC", 
            tipo:".cleric", 
            descript:"Energia sagrada, pura y santificada, llevan la palabra de sus dioses y ejercen sus designios ",
            habilidades:"Habilidades principales: Carisma y Fuerza",
            img:"",
            processStats:function(){},

          },
          
  "rogue": { 
            name:"THE ROGUE",
            tipo:".rogue",  
            descript:"Habiles agentes de la oscur dad, no hay reja q los contenga nni obetivo imposible para ellos. ",
            habilidades:"Habilidades principales: Destreza e Inteligencia",
            img:"",
            processStats:function(){},

          },

  "bard": { 
            name:"DA BARD",
            tipo:".bard",  
            descript:"Alegres agentes del destino, viajeros y recolectores de conocimiento, su voz llaman a la batalla e inspian la grandeza en todos: ",
            habilidades:"Habilidades principales: Carisma y Destreza",
            img:"",
            processStats:function(){},

          },                            

};

var iniPoints = 20;

var selection_pointer = true;

// AQUI SE DA EL CLICK Y EMPIEZA EL SHOW

    $( ".selection_column").on("click", ".pjClass", function(){

      var profession = $(this).parent().attr("data");

      selection_pointer = false;


      if ($("#genStat").hasClass("hide")){

          $(".statGen").removeClass("hide");


 // HACE INCLICKEABLE LA ZONA DE SELECCION DE CLASE

          if ( selection_pointer == false) {
              $(".selectClass").addClass("untochable");
              }
// HACE APARECER EL COMENTARIO DE LA CLASE CORRESPONDIENTE

// Definimos 'persona' dependiendo del valor de 'profession' en charactersData 
// Dspues ya podemos utilizar los valores de cada una d las clases desde 'persona'

      var persona = charactersData[profession];

      $(charactersData.utils.container).toggleClass("hide");
      $(".title").text(persona.name);
      $(".resume").text(persona.descript);
      $(".abilities").text(persona.habilidades);

      $(".iniPoints").text(iniPoints)

        }



  	}); 

// BOTON RESET ************************************************

    $(".finalChoice").on("click", ".resetButton", function(){

      $(".selectClass").removeClass("untochable");

      $(".Expo").toggleClass("hide");
      
      $("#genStat").toggleClass("hide");

      var reset = $(".prueba").attr("value");

      reset = 0;


    });

// BOTON SAVE ***************************************************    

    


// ASIGNANDO VALORES*********************************************

    // SUMA

    $(".atriTable").on("click",".plusButton", function(){

      iniPoints -=1;

      $(".iniPoints").text(iniPoints);

  // definimos una variable q cambiara 'valor', la definimos con parseInt para q sea un numero
  // utilizamos parents('.fuerzaRow') para llegar a donde se encuentra 'value'

  
    var valor = parseInt($(this).parents('.prueba').attr("value"));

    valor +=1;  

      $(this).parents('.prueba').find(".stat01").text(valor);
      $(this).parents('.prueba').attr("value", valor);
      
    });

    // RESTA

    $(".atriTable").on("click",".minusButton", function(){

      iniPoints +=1;

      $(".iniPoints").text(iniPoints);

      var valor = parseInt($(this).parents('.prueba').attr("value"));

    valor -=1;  

      $(this).parents('.prueba').find(".stat01").text(valor);
      $(this).parents('.prueba').attr("value", valor);
      

    });


// LLAVE FINAL***************************************************
});






