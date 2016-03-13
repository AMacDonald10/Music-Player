//Suzanne Irvine/Douglass Barr HNC Multimedia: Developing Multimedia Applications.  version 1.00  11/3/16 4pm


function setup() {
    createCanvas(windowWidth, windowHeight);
    
//     variables of the images to be loaded
    
     BessieImage = loadImage('Pictures/Bessie Smith.jpg');
    MississippiImage = loadImage('Pictures/Mississippi John Hurt.jpg');
    BlindBlakeImage = loadImage('Pictures/Blind Blake Hookworm.jpg');
    MemphisImage = loadImage('Pictures/Memphis Slim.jpg');
    LeadbellyImage = loadImage('Pictures/Leadbelly.jpg');
    VisualHarmonicaImage = loadImage('Pictures/Harmonica.jpg');
    VisualNote = loadImage('Pictures/Note2.jpg');
    Directionbuttonbackgroundimage = loadImage('Pictures/glossy-green-button.png')
    HomeImage = loadImage('Pictures/home.png');
    BackImage = loadImage('Pictures/backarrow.png');
    ForwardImage = loadImage('Pictures/arrow.png');
}

function draw() {
//    background colouration
    background(49, 101, 156);
    
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
    rect(1100, 695, 50, 30);
    rect(1200, 695, 50, 30);
    rect(1300, 695, 50, 30);
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
    
    
    
}