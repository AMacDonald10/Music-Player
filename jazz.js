//Suzanne Irvine/Douglas Barr HNC Multimedia: Developing Multimedia Applications.  version 1.1  28/3/16 6:54pm

// General variables

var Backgroundred = 255;
var Backgroundgreen = 215;
var AnnetteSong;
var BoomBoomSong;
var DinahWashSong;
var PaulWhitemanSong;
var TrachyonSong;
var amplitude;



//This function preloads songs.

function preload(){
    // song to preload
    AnnetteSong = loadSound("Music/Jazz/AnnetteHanshawMoaninLow.mp3");
    BoomBoomSong = loadSound("Music/Jazz/BoomBoomBeckett07NellaNostraBellezza.mp3");
    DinahWashSong = loadSound("Music/Jazz/DinahWashington-MadAboutTheBoy.mp3");
    PaulWhitemanSong = loadSound("Music/Jazz/PaulWhitemanHisOrchestra-DoowackaDoo.mp3");
    TrachyonSong = loadSound("Music/Jazz/Tri-Tachyon_-_01_-_Little_Lily_Swing.mp3");
  
}


// This sets up elements outwith draw.

function setup() {
    
    // Canvas
    
    createCanvas(windowWidth, windowHeight);
    
    
//     variables of the images to be loaded
    
    AnnetteImage = loadImage('Pictures/AnnetteHanshaw.jpg');
    BoomBoomImage = loadImage('Pictures/Boom Boom Beckett.jpg');
    DinahImage = loadImage('Pictures/DinahWashington.jpg');
    PaulWhitemanImage = loadImage('Pictures/doowak.jpg');
    TrachyonImage = loadImage('Pictures/Tri-Tachyon.jpg');
    
//    Audio visual images
    JazzNote = loadImage('Pictures/jazznote.png');
    JazzNote2 = loadImage('Pictures/jazznote.png');
    JazzNote3 = loadImage('Pictures/jazznote.png');
    JazzNote4 = loadImage('Pictures/jazznote.png');
    JazzNote5 = loadImage('Pictures/jazznote.png');
    JazzNote6 = loadImage('Pictures/jazznote.png');
    JazzSax = loadImage('Pictures/Jazzsaxophone.png');
    JazzPiano = loadImage('Pictures/jazzpiano.png');
    JazzTrumpet = loadImage('Pictures/Jazztrumpet.png');
    JazzBass = loadImage('Pictures/Jazzbass.gif');
    JazzTuba = loadImage('Pictures/jazztuba.png');
    JazzDrum = loadImage('Pictures/jazzdrum.png');
    JazzGuitar = loadImage('Pictures/jazzguitar.png');
    
//    Navigation images
    Directionbuttonbackgroundimage = loadImage('Pictures/glossy-green-button.png')
    HomeImage = loadImage('Pictures/home.png');
    BackImage = loadImage('Pictures/backarrow.png');
    ForwardImage = loadImage('Pictures/arrow.png');
    
    
//    Play/Pause Images
    Annetteplay = loadImage('Pictures/play.jpg');
    Annettepause = loadImage('Pictures/pause.jpg');
    BoomBoomplay = loadImage('Pictures/play.jpg');
    BoomBoompause = loadImage('Pictures/pause.jpg');
    Dinahplay = loadImage('Pictures/play.jpg');
    Dinahpause = loadImage('Pictures/pause.jpg');
    PaulWplay = loadImage('Pictures/play.jpg');
    PaulWpause = loadImage('Pictures/pause.jpg');
    Trachyonplay = loadImage('Pictures/play.jpg');
    Trachyonpause = loadImage('Pictures/pause.jpg');
    
    
//    amplitude variable for audio visual
    amplitude = new p5.Amplitude();
     
}

function draw() {
    
//    background colouration
    background(Backgroundred, Backgroundgreen , 0);
    Backgroundred = map(mouseX, 0, windowWidth, 255, 218);
    Backgroundgreen = map(mouseY, 0, windowHeight, 215, 165);  
    
    
//    Genre Heading
    
    textFont("Avant Garde");
    textSize(128);
    fill(255);
    text("Jazz", 405, 150);
    
    //   box to contain text
    fill(212, 175, 55);
    rect(100, 475, 250, 250);
    rect(195, 375, 180, 60);
    rect(415, 375, 180, 60);
    rect(635, 375, 180, 60);
    rect(855, 375, 180, 60);
    rect(1075, 375, 180, 60);
    rect(1110, 695, 50, 30);
    rect(1210, 695, 50, 30);
    rect(1310, 695, 50, 30);
    noFill();
    
    
    
    //    Artist images
    image(AnnetteImage, 235, 250, 100, 100);
    image(BoomBoomImage, 455, 250, 100, 100);
    image(DinahImage, 675, 250, 100, 100);
    image(PaulWhitemanImage, 895, 250, 100, 100);
    image(TrachyonImage, 1115, 250, 100, 100);
    
    
    
    //    Audio Visualiser
    
    var level = amplitude.getLevel();
   

       // The following images appear and move based on audio level currently playing.
    
    if (AnnetteSong.isPlaying() == true)
    {
        image(JazzNote, 635, 580, 10+level*200, 10+level*200);
        image(JazzNote2, 800, 540, 10+level*200, 10+level*200);
        image(JazzNote3, 465, 485, 10+level*200, 10+level*200);
        image(JazzTrumpet, 425, 500, 10+level*200, 10+level*200);
        image(JazzTuba, 595, 600, 10+level*200, 10+level*200);
        image(JazzSax, 750, 550, 10+level*200, 10+level*200); 
    }
    if (BoomBoomSong.isPlaying() == true)
    {
        image(JazzNote, 635, 580, 10+level*200, 10+level*200);
        image(JazzNote2, 800, 540, 10+level*200, 10+level*200);
        image(JazzNote3, 465, 485, 10+level*200, 10+level*200);
        image(JazzPiano, 425, 500, 10+level*200, 10+level*200);
        image(JazzDrum, 595, 600, 10+level*200, 10+level*200);
        image(JazzSax, 750, 550, 10+level*200, 10+level*200);
        image(JazzBass, 425, 620, 10+level*200, 10+level*200);
        image(JazzNote4, 455, 610, 10+level*200, 10+level*200);
        image(JazzGuitar, 595, 500, 10+level*200, 10+level*200);
        image(JazzNote4, 625, 495, 10+level*200, 10+level*200);
    }
    if (DinahWashSong.isPlaying() == true)
    {
        image(JazzNote, 635, 580, 10+level*200, 10+level*200);
        image(JazzNote2, 735, 560, 10+level*200, 10+level*200);
    }
    if (PaulWhitemanSong.isPlaying() == true)
    {
         image(JazzNote, 635, 580, 10+level*200, 10+level*200);
        image(JazzNote2, 735, 560, 10+level*200, 10+level*200);
    }
    if (TrachyonSong.isPlaying() == true)
    {
         image(JazzNote, 635, 580, 10+level*200, 10+level*200);
        image(JazzNote2, 735, 560, 10+level*200, 10+level*200);
    }
    
    
    //      Navigation Buttons
    
    image(Directionbuttonbackgroundimage, 1100, 600, 75, 75);
    image(Directionbuttonbackgroundimage, 1200, 600, 75, 75);
    image(Directionbuttonbackgroundimage, 1300, 600, 75, 75);
    image(HomeImage, 1212, 610, 50, 50);
    image(BackImage, 1112, 610, 50, 50);
    image(ForwardImage, 1312, 610, 50, 50);
    
    
    
       // This section creates the play/pause button
    
    if (AnnetteSong.isPlaying() == true) 
    {
    image(Annettepause, 270, 285, 30, 30)
    } 
    if(AnnetteSong.isPlaying() == false)
    {
        image(Annetteplay, 270, 285, 30, 30)
    }
    if (BoomBoomSong.isPlaying() == true) 
    {
        image(BoomBoompause, 490, 285, 30, 30);
    }
    if(BoomBoomSong.isPlaying() == false)
    {
        image(BoomBoomplay, 490, 285, 30, 30);
    }
    if (DinahWashSong.isPlaying() == true) 
    {
        image(Dinahpause, 710, 285, 30, 30);
    }
    if(DinahWashSong.isPlaying() == false)
    {
        image(Dinahplay, 710, 285, 30, 30);
    }
    if (PaulWhitemanSong.isPlaying() == true) 
    {
        image(PaulWpause, 930, 285, 30, 30);
    }
       if(PaulWhitemanSong.isPlaying() == false)
    {
        image(PaulWplay, 930, 285, 30, 30);
    }
    if (TrachyonSong.isPlaying() == true) 
    {
        image(Trachyonpause, 1150, 285, 30, 30);
    }
      if(TrachyonSong.isPlaying() == false)
    {
        image(Trachyonplay, 1150, 285, 30, 30);
    }
        else 
        {
            image(Annetteplay, 270, 285, 30, 30);
            image(BoomBoomplay, 490, 285, 30, 30);
            image(Dinahplay, 710, 285, 30, 30);
            image(PaulWplay, 930, 285, 30, 30);
            image(Trachyonplay, 1150, 285, 30, 30);
        }
    
//    Artist text information for when music plays.
    
    if(AnnetteSong.isPlaying() == true)
    if(BoomBoomSong.isPlaying() == false)
    if(DinahWashSong.isPlaying() == false)
    if(PaulWhitemanSong.isPlaying() == false)
    if(TrachyonSong.isPlaying() == false)
   {
        textFont("Avant Garde");
        textSize(16);
        fill(0);
    text("Artist: Annette Hanshaw", 110, 500);
        noFill();
} 
    
    if(AnnetteSong.isPlaying() == false)
    if(BoomBoomSong.isPlaying() == true)
    if(DinahWashSong.isPlaying() == false)
    if(PaulWhitemanSong.isPlaying() == false)
    if(TrachyonSong.isPlaying() == false)
   {
        textFont("Avant Garde");
        textSize(16);
        fill(0);
    text("Artist: Boom Boom Beckett", 110, 500);
        noFill();
} 
         
    if(AnnetteSong.isPlaying() == false)
    if(BoomBoomSong.isPlaying() == false)
    if(DinahWashSong.isPlaying() == true)
    if(PaulWhitemanSong.isPlaying() == false)
    if(TrachyonSong.isPlaying() == false)
   {
        textFont("Avant Garde");
        textSize(16);
        fill(0);
    text("Artist: Dinah Washington", 110, 500);
        noFill();
} 
    
    if(AnnetteSong.isPlaying() == false)
    if(BoomBoomSong.isPlaying() == false)
    if(DinahWashSong.isPlaying() == false)
    if(PaulWhitemanSong.isPlaying() == true)
    if(TrachyonSong.isPlaying() == false)
   {
        textFont("Avant Garde");
        textSize(16);
        fill(0)
        text("Artist: Paul Whiteman and his Orchestra", 110, 300);
        noFill();
    }
    
    if (AnnetteSong.isPlaying() == false)
    if(BoomBoomSong.isPlaying() == false)
    if(DinahWashSong.isPlaying() == false)
    if(PaulWhitemanSong.isPlaying() == false)
    if(TrachyonSong.isPlaying() == true)
   {
        textFont("Avant Garde");
        textSize(16);
        fill(0)
        text("Artist: Tri-Tachyon", 110, 500);
        noFill();
    }
    else 
    {
        textFont("Avant Garde");
        textSize(16);
        fill(0);
        text("Company Information", 110, 500);
        noFill();
    }
    
    
}

function mouseClicked() {
    
    //Artist buttons that control the music
    
    
  if( (mouseX > 235) &&
      (mouseX < (235 + 100)) &&
      (mouseY > 250) &&
      (mouseY < (250 + 125)))
     if(AnnetteSong.isPlaying() == false)
    { 
        println("Hi");  //This tests the button to see if it works.
        AnnetteSong.play();
        BoomBoomSong.stop();
        DinahWashSong.stop();
        PaulWhitemanSong.stop();
        TrachyonSong.stop();
    }
      else if( (mouseX > 235) &&
          (mouseX < (235 + 100)) &&
          (mouseY > 250) &&
          (mouseY < (250 + 125)))
     if(AnnetteSong.isPlaying() == true)
    { 
        println("Hi");  //This tests the button to see if it works.
        AnnetteSong.pause();
    }
    
   if( (mouseX > 455) &&
       (mouseX < (455 + 100)) &&
       (mouseY > 250) &&
       (mouseY < (250 + 125)))
      if(BoomBoomSong.isPlaying() == false)
     {
        
        println( "Hi")  //This tests the button to see if it works.
       AnnetteSong.stop();
       BoomBoomSong.play();
       DinahWashSong.stop();
       PaulWhitemanSong.stop();
       TrachyonSong.stop();
     }
    
    else if( (mouseX > 455) &&
          (mouseX < (455 + 100)) &&
          (mouseY > 250) &&
          (mouseY < (250 + 125)))
     if(BoomBoomSong.isPlaying() == true)
     {
         println("Hi") //This tests the button to see if it works.
         BoomBoomSong.pause();

     }
    
  if( (mouseX > 675) &&
      (mouseX < (675 + 100)) &&
      (mouseY > 250) &&
      (mouseY < (250 + 125)))
      if(DinahWashSong.isPlaying() == false)
     { 
         println( "Hi")  //This tests the button to see if it works.
        AnnetteSong.stop();
        BoomBoomSong.stop();
        DinahWashSong.play();
        PaulWhitemanSong.stop();
        TrachyonSong.stop();  
     }
    
    else if( (mouseX > 675) &&
          (mouseX < (675 + 100)) &&
          (mouseY > 250) &&
          (mouseY < (250 + 125)))
        if(DinahWashSong.isPlaying() == true)
     {     
         println( "Hi")  //This tests the button to see if it works.
         DinahWashSong.pause();
     }
    
     if( (mouseX > 895) &&
         (mouseX < (895 + 100)) &&
         (mouseY > 250) &&
         (mouseY < (250 + 125)))
        if(PaulWhitemanSong.isPlaying() == false)
        {  
            println( "Hi")  //This tests the button to see if it works. 
            AnnetteSong.stop();
            BoomBoomSong.stop();
            DinahWashSong.stop();
            PaulWhitemanSong.play();
            TrachyonSong.stop();
        }
    
    else if((mouseX > 895) &&
          (mouseX < (895 + 100)) &&
          (mouseY > 250) &&
          (mouseY < (250 + 125)))
         if(PaulWhitemanSong.isPlaying() == true)
         {
             PaulWhitemanSong.pause();

         }
    
    
    if( (mouseX > 1115) &&
         (mouseX < (1115 + 100)) &&
         (mouseY > 250) &&
         (mouseY < (250 + 125)))
        if(TrachyonSong.isPlaying() == false)
     {
        AnnetteSong.stop();
        BoomBoomSong.stop();
        DinahWashSong.stop();
        PaulWhitemanSong.stop();
        TrachyonSong.play();
        println( "Hi");  //This tests the button to see if it works.
     }
    
    else if( (mouseX > 1115) &&
          (mouseX < (1115 + 100)) &&
          (mouseY > 250) &&
          (mouseY < (250 + 125)))
        if(TrachyonSong.isPlaying() == true)
        {
            TrachyonSong.pause();
        }
            
            
            
// Navigational buttons            
            
    if( (mouseX > 1100) &&
        (mouseX < (1100 + 70)) &&
        (mouseY > 600) &&
        (mouseY < (600 + 75)))
     {
        window.location.href = 'Blues.html'
        println( "Hi")  //This tests the button to see if it works.
     }
    
    
     if( (mouseX > 1200) &&
         (mouseX < (1200 + 75)) &&
         (mouseY > 600) &&
         (mouseY < (600 + 75)))
     {
        window.location.href = 'index.html'
        println( "Hi")  //This tests the button to see if it works.
     }
    
    
    if( (mouseX > 1300) &&
        (mouseX < (1300 + 75)) &&
        (mouseY > 600) &&
        (mouseY < (600 + 75)))
     {
        window.location.href = 'Metal.html' 
        println( "Hi")  //This tests the button to see if it works.    
     }
    


}
