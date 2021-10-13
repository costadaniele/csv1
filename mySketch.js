let gap = 10; //tamanho dos círculos
let cirNum = 12;
let cirSize = 7;
let angle = 0;
let ptNum = 100;
let col = ["white","teal","yellowgreen","lightsalmon"];
let index = 0;
let play1 = 1;
let play2 = 3;
let play3 = 5;
let play4= 7;
let play5 = 9;
let play6 = 11;
let play7 = 13;
let play8 = 15;
let play9 = 17;
let play10 = 19;
let play11 = 21;
let play12 = 23;
let play13 = 25;
let play14 = 27;
let play15 = 29;
let play16 = 31;
let play17 = 33;
let play18 = 35;

var sound;

function preload(){
	song1=loadSound("banhodebica.wav");
	song2=loadSound("/musicas/capsulacartaparanaoesquecerfinal.wav");
	song3=loadSound("capsulalinaegabriel.wav");
	song4=loadSound("CapsulasSonorasGirlanOriginal.wav");
	song5=loadSound("CapsulasSonorasGirlanReversa.wav");
	song6=loadSound("CentroPeriferico.wav");
	song7=loadSound("Chuva_Capsulas_Sonoras_BRITO.wav");
	song8=loadSound("banhodebica.wav");
	song9=loadSound("/musicas/capsulacartaparanaoesquecerfinal.wav");
	song10=loadSound("capsulalinaegabriel.wav");
	song11=loadSound("CapsulasSonorasGirlanOriginal.wav");
	song12=loadSound("CapsulasSonorasGirlanReversa.wav");
	song13=loadSound("CentroPeriferico.wav");
	song14=loadSound("Chuva_Capsulas_Sonoras_BRITO.wav");
	song15=loadSound("banhodebica.wav");
	song16=loadSound("/musicas/capsulacartaparanaoesquecerfinal.wav");
	song17=loadSound("capsulalinaegabriel.wav");
	song18=loadSound("CapsulasSonorasGirlanOriginal.wav");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(degrees);
	
}

function drawRect( xc, yc, w, h ){
	rect( xc-w/2, yc-h/2, w, h );
}

function isHitRect( mx, my, xc, yc, w, h ){
	if( mx > xc-w/2 && mx < xc+w/2 && my>yc-h/2 && my<yc+h/2){
		return true;
	}
	else{
		return false;
	}
}

