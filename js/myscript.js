$(document).ready(function(){

// BASE DE DATOS DE CHARACTERS********************************
  game = {}
  game.characters = []
  game.parties = []

  var charactersData = {
  
    "utils":{
      "container":".Expo",

      processStats:function(valor,selectStat, boton, acambiar){

        if (charactersData.globals.iniPoints !== 0) {
          charactersData.globals.iniPoints -=1;
          valor +=1;
          boton.parents('.prueba').find(".stat01").text(valor);
          boton.parents('.prueba').attr("value", valor);
          acambiar.text(charactersData.globals.iniPoints);
        }
      },

      minusStats:function(valor,selectStat, boton, acambiar){

        if (charactersData.globals.iniPoints < 20) {
          
          if (boton.parents('.prueba').attr("value") >0 ){
            charactersData.globals.iniPoints +=1;
            valor -=1;
            boton.parents('.prueba').find(".stat01").text(valor);
            boton.parents('.prueba').attr("value", valor);
            acambiar.text(charactersData.globals.iniPoints);

          }  
        }    
      },    
    },

    "globals":{
      "iniPoints": 3,
      "selection_pointer": true,
    },

    "fighter": { 
            name:"THE FIGHTER",
            tipo:".fighter", 
            descript:"Experto en todas las armas y tecnicas de combate, la vanguardia del equipo!!",
            habilidades:"Habilidades principales: Fuerza y Destreza",
            img:"",
          },

    "wizard": { 
            name:"THE WIZARD", 
            tipo:".wizard", 
            descript:"Magia y poderes, los magos no tienen limites conocidos con tiempo y preparacion",
            habilidades: "Habilidades principales: Inteligencia",
            img:"",
          },

    "cleric": { 
            name:"THE CLERIC", 
            tipo:".cleric", 
            descript:"Energia sagrada, pura y santificada, llevan la palabra de sus dioses y ejercen sus designios ",
            habilidades:"Habilidades principales: Carisma y Fuerza",
            img:"",
          },
          
    "rogue": { 
            name:"THE ROGUE",
            tipo:".rogue",  
            descript:"Habiles agentes de la oscur dad, no hay reja q los contenga nni obetivo imposible para ellos. ",
            habilidades:"Habilidades principales: Destreza e Inteligencia",
            img:"",
          },

    "bard": { 
            name:"DA BARD",
            tipo:".bard",  
            descript:"Alegres agentes del destino, viajeros y recolectores de conocimiento, su voz llaman a la batalla e inspian la grandeza en todos: ",
            habilidades:"Habilidades principales: Carisma y Destreza",
            img:"",
          },

  };

  var newCharacter ={
      "name":"",
      "ChaClass":"",
      "fuer":"",
      "dextre":"",
      "inteli":"",
      "cari":"",
      "chaIma":"", 

  };

// AQUI SE DA EL CLICK Y EMPIEZA EL SHOW ESCOGIENDO CLASE

  $( ".selection_column").on("click", ".pjClass", function(){

      // identificamos 'profesion' con el click q damos
      var profession = $(this).parent().attr("data");

      // se le asigna a newCharacter la profesion
      newCharacter.ChaClass = profession;

      // le asignamos falso a 'selection_pointer' 
      charactersData.globals.selection_pointer = false;

      // si genStat tiene hide, se lo remueve
      if ($("#genStat").hasClass("hide")){

          $(".statGen").removeClass("hide");

// HACE INCLICKEABLE ZONA D SELECCION D CLASE con la variable 'selection_pointer'

          if ( charactersData.globals.selection_pointer == false) {
              $(".selectClass").addClass("untochable");
              };

          // Definimos 'persona' dependiendo d 'profession' en charactersData 
          var persona = charactersData[profession];
     
          // APARECER EL COMENTARIO DE CLASE CORRESPONDIENTE
          $(charactersData.utils.container).removeClass("hide");

          // Ya podemos utilizar los valores de cada una d las clases desde 'persona'
          $(".title").text(persona.name);
          $(".resume").text(persona.descript);
          $(".abilities").text(persona.habilidades);

          // se setea .iniPoints a la cantidad inicial
          $(".iniPoints").text(charactersData.globals.iniPoints);

      };
  });

// ASIGNANDO VALORES*********************************************

// SUMA

  $(".atriTable").on("click",".plusButton", function(){

// definimos una variable q cambiara 'valor', la definimos con parseInt para q sea un numero e igual al valor del atributo 'value' del stat q hemos clickeado

// utilizamos parents('.prueba') para llegar a donde se encuentra 'value'

// el (this) nos llevara al stat q se haya clickeado
      var valor = parseInt($(this).parents('.prueba').attr("value"));    
// definimos selectStat como el stat q hemos clickeado
      var selectStat = $(this).parents('.prueba').attr("stat");
     
// llamamos a la funcion processStats
      charactersData.utils.processStats( valor,selectStat, $(this),$(".iniPoints"));

  });


// RESTA    

  $(".atriTable").on("click",".minusButton", function(){

      var valor = parseInt($(this).parents('.prueba').attr("value"));    
      var selectStat = $(this).parents('.prueba').attr("stat");
     
      charactersData.utils.minusStats( valor,selectStat, $(this),$(".iniPoints"));
     
  });


// Al abrir modal, se selecciona imagen y se asigna a newCharacter
  $(".picture_galery").on("click", ".cha_image", function(){

      newCharacter.chaIma = $(this).attr("src");
    
    });  

var i = 0;
   
// BOTON SAVE ************************************************   

  $(".finalChoice").on("click", ".checkButton", function(){

      // si lacantidad de hijos directos de #cajaFinal es <3
      if ( $("#cajaFinal > div").length <3) {

          // si se han asignado todos los puntos
          if (charactersData.globals.iniPoints == 0) {

            // se asigna valores a newcharacter
            newCharacter.name = $("#selectedName").val();

            newCharacter.fuer= $("#fuerza").text();

            newCharacter.dextre= $("#destreza").text();

            newCharacter.inteli= $("#inteligencia").text();

            newCharacter.cari= $("#carisma").text();

            // se vuelve clickeable selectClass
            $(".selectClass").removeClass("untochable");

            // desaparece Expo otra vez y se borra su contenido
            $(".Expo").toggleClass("hide");
            $(".className").text("");
            $(".resume").text("");
            $(".abilities").text("");
            
            // desaparece #genStat y se borran sus valores
            $("#genStat").addClass("hide");
            $(".prueba").attr("value", 0);
            $(".stat01").text(0);
            $("#selectedName").val("");

            // inipoints regresa a su valor original
            charactersData.globals.iniPoints = 3;

            // se crea variable  savedCha a base de newCharacter y se guarda en game.characters
            var savedCha = JSON.stringify(newCharacter); 

              console.log(savedCha);
              console.log(newCharacter);

            game.characters.push(savedCha);

            // se agrega imagen y nombre a personaje_listo
            $(".pj_listo_imagen").attr("src", newCharacter.chaIma);
            $(".pj_listo_name").text(newCharacter.name);
          
            // se hace una copia (clon) y se pone en #cajaFinal
            $(".personaje_listo").clone().appendTo("#cajaFinal");
         
            // se hace aparecer al clon cambiando sus clases        
            $("#cajaFinal").find('div').removeClass(" hide pj_listo_imagen pj_listo_name personaje_listo "); 
          
            $("#cajaFinal").find('h4').removeClass(" pj_listo_name"); 
            $("#cajaFinal").find('img').removeClass("pj_listo_imagen "); 

            $("#cajaFinal > div").addClass("challenger");

          }
            
          if ( $("#cajaFinal > div").length ==3){
            $("#readyBaby").removeClass('disabled');
          }

               
      }

    });
  


// BOTON RESET ***********************************************

  $(".finalChoice").on("click", ".resetButton", function(){

      $(".selectClass").removeClass("untochable");

      $(".Expo").toggleClass("hide");

      $(".className").text("");
      $(".resume").text("");
      $(".abilities").text("");
      
      $("#genStat").addClass("hide");

      $(".prueba").attr("value", 0);

      $(".stat01").text(0);

      $("#selectedName").val("");

      newCharacter.ChaClass = "";

      charactersData.globals.iniPoints = 3;

  });

// BORRANDO PJ CREADO *****************************************

  $("#cajaFinal").on("click", ".challenger", function(){

    // console.log($(this).index());
    // console.log(game.characters);

    // elimina del game.characters lo clickeado
    game.characters.splice($(this).index(), 1);
    
    // elimina de cajaFinal lo clickeado
    $(this).remove();

    // console.log(game.characters);

    // Vuelve a desahilitar boton hasta q haya 3 personajes
    if ( $("#cajaFinal > div").length <3) {

        $("#readyBaby").addClass('disabled');
    };


  });

// ACTIVANDO BOTON PARTIE LISTO

  $(".finalButton").on("click", "#readyBaby", function(){
    localStorage.setItem('game', JSON.stringify(game))

  });
  

// LLAVE FINAL***************************************************
});


    // localStorage.setItem('game', JSON.stringify(game))

    // if('localStorage' in window && window['localStorage'] !== null){
    //   alert('ok');
    //   var storage = localStorage
    // }
    // else {alert('mal muy mal')}