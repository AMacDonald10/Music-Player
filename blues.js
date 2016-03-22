//Suzanne Irvine/Douglass Barr HNC Multimedia: Developing Multimedia Applications.  version 1.2  22/3/16 8.55am

// general variables
var BessieSong;
var backgroundblue = 255; 
var on = false;
var bessietext = false;
//var bessieplaying = false;

function preload(){
    // song to preload
      BessieSong = loadSound("Music/Blues/BessieSmith-AGoodManIsHardToFind.mp3");

}
    
    
function setup() {
    createCanvas(windowWidth, windowHeight);
//     variables of the images to be loaded
    
     BessieImage = loadImage('Pictures/Bessie Smith.jpg');
    MississippiImage = loadImage('Pictures/Mississippi John Hurt.jpg');
    BlindBlakeImage = loadImage('Pictures/Blind Blake Hookworm.jpg');
    MemphisImage = loadImage('Pictures/Memphis Slim.jpg');
    LeadbellyImage = loadImage('Pictures/Leadbelly.jpg');
    VisualHarmonicaImage = loadImage('Pictures/Harmonica.jpg');
//    VisualNote = loadImage('Pictures/Note2.jpg');
    Directionbuttonbackgroundimage = loadImage('Pictures/glossy-green-button.png')
    HomeImage = loadImage('Pictures/home.png');
    BackImage = loadImage('Pictures/backarrow.png');
    ForwardImage = loadImage('Pictures/arrow.png');
    playbutton = loadImage('Pictures/play.jpg');
    pausebutton = loadImage('Pictures/pause.jpg');
    Bessieplay = loadImage('Pictures/play.jpg');
 
    
 

    
}

function draw() {
//    background colouration
    background(0, 0, backgroundblue);
backgroundblue = map(mouseX, 0, windowWidth, 255, 100);
    
//      Header
    textFont("Georgia");
    textSize(128);
    fill(255);
    text("The Blues.", 405, 150);
    
//   box to contain text
    fill(99, 154, 206);
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
    image(BessieImage, 235, 250, 100, 100);
    image(MississippiImage, 455, 250, 100, 100);
    image(BlindBlakeImage, 675, 250, 100, 100);
    image(MemphisImage, 895, 250, 100, 100);
    image(LeadbellyImage, 1115, 250, 100, 100);
    
//    visualisation placement test
    image(VisualHarmonicaImage, 525, 475, 359, 194);
    
//      Navigation Buttons
    image(Directionbuttonbackgroundimage, 1100, 600, 75, 75);
    image(Directionbuttonbackgroundimage, 1200, 600, 75, 75);
    image(Directionbuttonbackgroundimage, 1300, 600, 75, 75);
    image(HomeImage, 1212, 610, 50, 50);
    image(BackImage, 1112, 610, 50, 50);
    image(ForwardImage, 1312, 610, 50, 50);
    
    // play/pause button
    
    if (on) {
    image(pausebutton, 270, 285, 30, 30)
} else {
    image(playbutton, 270, 285, 30, 30)
}

    
    
    // artist text information
    if (bessietext) {
        textFont("Georgia");
        textSize(16);
        fill(0);
    text("Artist: Bessie Smith.", 110, 500);
        noFill();
} 
    
    
    
    
    
}

function mouseClicked() {
  if( (mouseX > 235) &&
          (mouseX < (235 + 100)) &&
          (mouseY > 250) &&
          (mouseY < (250 + 125)))
     if(BessieSong.isPlaying() == false)
    { 
        println("Hi");
        BessieSong.play();
    }
      else if( (mouseX > 235) &&
          (mouseX < (235 + 100)) &&
          (mouseY > 250) &&
          (mouseY < (250 + 125)))
     if(BessieSong.isPlaying() == true)
    { 
        println("Hi");
        BessieSong.pause();
    }


//    
//   if( (mouseX > 455) &&
//          (mouseX < (455 + 100)) &&
//          (mouseY > 250) &&
//          (mouseY < (250 + 125)))
//     {
//        
// println( "Hi")  //This tests the button to see if it works.
// }
//  if( (mouseX > 675) &&
//          (mouseX < (675 + 100)) &&
//          (mouseY > 250) &&
//          (mouseY < (250 + 125)))
//     {
//        
// println( "Hi")  //This tests the button to see if it works.
// }
//     if( (mouseX > 895) &&
//          (mouseX < (895 + 100)) &&
//          (mouseY > 250) &&
//          (mouseY < (250 + 125)))
//     {
//        
// println( "Hi")  //This tests the button to see if it works.
// }
//    if( (mouseX > 1115) &&
//          (mouseX < (1115 + 100)) &&
//          (mouseY > 250) &&
//          (mouseY < (250 + 125)))
//     {
//        
// println( "Hi")  //This tests the button to see if it works.
// }
//    if( (mouseX > 1100) &&
//          (mouseX < (1100 + 70)) &&
//          (mouseY > 600) &&
//          (mouseY < (600 + 75)))
//     {
//        window.location.href = 'Metal.html'
// println( "Hi")  //This tests the button to see if it works.
// }
//     if( (mouseX > 1200) &&
//          (mouseX < (1200 + 75)) &&
//          (mouseY > 600) &&
//          (mouseY < (600 + 75)))
//     {
//        window.location.href = 'index.html'
// println( "Hi")  //This tests the button to see if it works.
// }
//    if( (mouseX > 1300) &&
//          (mouseX < (1300 + 75)) &&
//          (mouseY > 600) &&
//          (mouseY < (600 + 75)))
//     {
//        window.location.href = 'Jazz.html'
// println( "Hi")  //This tests the button to see if it works.
// }
}


    
function mousePressed() {
    // this function controls the play/pause button
    
    if( (mouseX > 235) &&
          (mouseX < (235 + 100)) &&
          (mouseY > 250) &&
          (mouseY < (250 + 125)))
    { on = !on;
     bessietext = !bessietext
 
    }


}

function isPlaying() {
    if(BessieSong.isPlaying() == true)
    {
        BessieSong.pause
    }
    else if(BessieSong.isPlaying() == false)
    {
        BessieSong.play
    }
}