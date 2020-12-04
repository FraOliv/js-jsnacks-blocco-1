
//!!!!!!!!!!JSNACK BLOCCO 4 OGGETTI !!!!!!!!!!!!!

/* Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
 */
/* 
 var Palla = {
    "nome": "palla" ,
    "peso": ""
 }

 var Scelta = prompt("vuoi modificare il peso?");

if (Scelta == "si"){
    var NewPeso = Number(prompt("aggiungi il nuovo peso"));

 Palla.push(
        "peso": NewPeso
    );
} */

/* Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
Stampare a schermo la bici con peso minore. */
/* 
var Bikes = [{
        "nome": "bici1",
        "peso": "5",
    },

    {
        "nome": "bici2",
        "peso": "25",
    },
    {
        "nome": "bici3",
        "peso": "40",
    },
    {
        "nome": "bici4",
        "peso": "10",
    },
]

var pesoMinimo = Bikes[0].peso;

for (var index = 0; index < Bikes.length; index++) {
    if (Bikes[index].peso < pesoMinimo) {
        pesoMinimo = Bikes[0].peso;
    }


}

console.log(pesoMinimo);
console.log(Bikes[index]);
 */

/*     Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
(ripassiamo il Teorema di Pitagora ;D ) */

/* 
var TriangoloRettangolo = {
  "base" : "2",
  "altezza" : "4"
}
!!!!!!DACOMPLETARE!!!!!!!!!!

 /*  Creare un array di oggetti di squadre di calcio. 
 Ogni squadra avrà diverse proprietà: 
 nome, punti fatti, falli subiti.
 
 Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. */




/*  var squadreDiCalcio = [
 {
    "name": "Juve" ,
    "puntifatti": "0" ,
    "puntiSubiti" : "0"
},

 {
    "name": "Inter" ,
    "puntifatti": "0" ,
    "puntiSubiti" : "0"
},

 {
    "name": "Milan" ,
    "puntifatti": "0" ,
    "puntiSubiti" : "0"
},

 {
    "name": "Napoli" ,
    "puntifatti": "0" ,
    "puntiSubiti" : "0"
}
]




/* Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti */

/* squadreDiCalcio.forEach(function(Squadra){
    Squadra.puntifatti = Math.floor(Math.random()*10);
     Squadra.puntiSubiti = Math.floor(Math.random()*10);

})

console.log(squadreDiCalcio) */



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!FINE BLOCCO 4!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!INIZIO BLOCCO 5!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



/* Crea 10 oggetti che rappresentano una zucchina,
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */



/* var Zucchine  = [
    {
    "varieta": "faenza",
    "lunghezza" : "25",
    "peso" : 2,    
    },
    
    {
    "varieta": "faenza",
    "lunghezza" : "25",
    "peso" : 12,    
    },
    
    {
    "varieta": "faenza",
    "lunghezza" : "25",
    "peso" : 15,    
    },
    
    {
    "varieta": "faenza",
    "lunghezza" : "25",
    "peso" : 3,    
    },
    {
    "varieta": "faenza",
    "lunghezza" : "25",
    "peso" : 7,    
    },
    
    {
    "varieta": "faenza",
    "lunghezza" : "25",
    "peso" : 12,    
    },
    {
    "varieta": "faenza",
    "lunghezza" : "25",
    "peso" : 8,    
    },
    
    {
    "varieta": "faenza",
    "lunghezza" : "25",
    "peso" : 10,    
    },


    {
    "varieta": "faenza",
    "lunghezza" : 25,
    "peso" : 24,    
    },
    
    {
    "varieta" : "faenza",
    "lunghezza" : "25",
    "peso" : 12,    
    }

]

var pesoTot = 0;
Zucchine.forEach((element) => {
    pesoTot += element.peso;
    console.log(element.peso)
});


 */
/* 
 Scrivi una funzione che accetti una stringa come
argomento e la ritorni girata (es. Ciao -> oaiC) */
/* function reverseWord(stringa) {
    var reverse_word = "";
    for (var i = stringa.length - 1; i >= 0; i--) {
        reverse_word += stringa[i];
    };
    return reverse_word;
}; */
/*
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

/* function Invertitore(x)
{
	var ParolaALContrario ="";
	var index=(x.length - 1);
	var y=0;
	
	for (var i=index ; i>=0 ; i--)
	{
		x[i] = ParolaALContrario [y++];
	}
	
	return (ParolaALContrario );
}
var parola = prompt('inserisci una parola');
alert('la tua parola al contrario:\n' + ParolaALContrario(parola)); */