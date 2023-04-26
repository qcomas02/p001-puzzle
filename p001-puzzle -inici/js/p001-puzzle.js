
var nFiles=3, nColumnes=4;     // quantitat de peces del puzzle: nFiles x nColumnes
var ampladaPeça, alçadaPeça;   // mida de les peces

var canvasSolucio;    // element canvas#solucio
var ctxSolucio;       // context 2d de l'element canvas#solucio		
var ctxPeces;         // context 2d de totes les peces, és una matriu de nFiles x nColumnes
var canvasFotograma;  // element canvas#fotograma
var ctxFotograma;     // context 2d de l'element canvas#fotograma	
var video;            // video del puzzle
var fps=30;           // tractarem el vídeo a 30 fotogrames per segon


// comença el programa
$(document).ready(function(){

  canvasSolucio=$("#solucio");
  ctxSolucio = canvasSolucio[0].getContext('2d');  
  canvasFotograma=document.getElementById('fotograma');
  ctxFotograma=canvasFotograma.getContext('2d');
  video=$("#video")[0];  // objecte jQuery

    ctxSolucio.drawImage(video, 0,0);
    setTimeout(loop, 1000 / 30);// 
  
  creaPuzzle();
  crearPeces();

  video=video[0];    // objecte DOM
  // actualitzem el video-puzle 30 vegades per segon
	setInterval(mostrarFotograma,1000/fps); // 30fps

  /**
* Calcula les mides de les peces en funció de la mida de la imatge
* i del nombre de files i columnes
* Estableix les mides dels contenidors
*/
function creaPuzzle(){
  // calculem les mides de les peces
  ampladaPeça=Math.floor(video.width() /nColumnes);
  alçadaPeça =Math.floor(video.height()/nFiles);
  // ajustem les mides de div#puzzle
  $("#puzzle").css("width", (ampladaPeça*nColumnes)+"px");
  $("#puzzle").css("height",( alçadaPeça*nFiles   )+"px");
  $("#marc-puzzle").css("width", (ampladaPeça*nColumnes)+"px");
	$("#marc-puzzle").css("height",( alçadaPeça*nFiles   )+"px");
  
  // ajustem les mides de la solució
  canvasSolucio=canvasSolucio[0];   // objecte DOM
  canvasSolucio.width=ampladaPeça*nColumnes;
  canvasSolucio.height=alçadaPeça*nFiles;
}

/**
* ajustem les mides del canvas  de les peces
* Les guardem a un array amb  els seus context 
* amb un sistema d'identificació f0c0, f0c1,...fxcy
*
* @return void
*/
function crearPeces(){
  // ajustem les mides del canvas  de les peces i guardem els seus context
  ctxPeces=new Array(nFiles);
  for(let f=0; f<nFiles; f++){
	  ctxPeces[f]=new Array(nColumnes);
	  for(let c=0; c<nColumnes; c++){
	    let peça=$("#f"+(f+1)+"c"+(c+1))[0]; // Atenció!! objecte DOM, és un canvas
		  peça.width= ampladaPeça;
 		  peça.height= alçadaPeça; // només podem canviar les mides d'un canvas des d'un objecte DOM
      ctxPeces[f][c]=peça.getContext('2d');
	  }
  }
}



function numeroAleatori(a,b){	// retorna un nómbre aleatori entre a i b ambdós inclosos
  return Math.floor(Math.random()*(b-a+1)) + a;
}


 /******************
  * Tasques
  * Gestió dels events de l'aplicació
  * ****************/
 //1.-Les peces és poden moure amb el ratolí
 //2.-Les peces es barregen
 //3.-Gir aleatori de les peces
 //4.-Arranquem la reproducció del vídeo


 /******************
  * Gestió dels events de l'usuari  * 
  * ****************/
 var zPeça;   // z-index de la peça actual
 //5.-MouseDown: Posem la peça clicada en primer pla
 //6.-MouseUp:Mirem si la peça està en el seu lloc final i felicitem si s'escau.
 //7.-Click doble: Girem la peça 180º
 //8.-Clic a un botó. Resolem el puzzle:Resolem el puzle: posem totes les peces a la seva posició final i les girem si cal.
 

/******************
  * Mètodes a programar  * 
  * ****************/
/**
* Carrega el fotograma del vídeo
*
* @return text (divs html per cada peça)
*/
function mostrarFotograma(){
  //9. Mostrem la part corresponent 
  //del fotograma en la peça adequada
  //Cada peça a de reproduir el tros del vídeo 
  //que li correspon
  
}
/**
* Calcula la distància entre dos punts
* 
* @para puntA, puntB 
* coordenada superior esquerra de la peca (pA) i de la seva posició correcte (pB)
* @return Distancia entre els dos punts en un pla cartesià
*/
function distanciaDosPunts(puntA, puntB){
  /*
   * 10.- Reviseu la fórmula de càlcul de distància entre dos punts
   * a la lliçó 5: Col·lisions  dels apunts
   *  
   */ 
}

})