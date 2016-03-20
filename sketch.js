//Suzanne Irvine/Douglass Barr HNC Multimedia: Developing Multimedia Applications.  version 1.1  20/3/16 3.30pm



function setup(){
    
    createCanvas(windowWidth, windowHeight);  //This sets the canvas to the browser height and width.
    CompanyImage = loadImage('Pictures/noalbum.jpg');
    BluesImage = loadImage('Pictures/Blues.jpg');
    JazzImage = loadImage('Pictures/Jazz.jpg');
    MetalImage = loadImage('Pictures/Metal.png');
//These are the images being loaded.
}

function draw(){
    mouseOver();
    background(96,24,72);
    //This will be the header.
       
    textFont("Georgia");
textSize(128);
fill(250);
        text("Douglas Records", 195, 150);
noFill()
//Main company image
 image(CompanyImage, 150, 285, 276, 182);
    
    
    // Boxes containing text
    fill(157,32,83);
    rect(150, 515, 276, 182);
    rect(890, 322, 300, 60);
    rect(890, 458, 300, 60);
    rect(890, 598, 300, 60);
    noFill();
    
    
    // Text box with company information.  Aligned below the company image.
       textSize(14);
    fill(0, 0, 0);
    text("Welcome to Douglas Records.  This site will allow you to enjoy some of the work our artists have created.  Our music spans several genres of music and we at Douglas Records are proud of them all.", 160, 555, 265, 265);
    noFill();
    
    // Images that will be buttons.
 image(BluesImage, 700, 285, 125, 125);
    image(JazzImage, 700, 425, 125, 125);
    image(MetalImage, 700, 565, 125, 125);
    
    
    //Text that advises to click the button.
    textSize(14);
    fill(0);
    text("Click on this image to listen to our artists that play the blues.", 900, 335, 300, 300);
    text("Click on this image to listen to our artists that play jazz.", 900, 470, 300, 300);
    text("Click on this image to listen to our artists that play metal.", 900, 610, 300, 300);
    noFill();


}

//function windowResized() {
//    resizeCanvas(windowWidth, windowHeight);
//    //This resizes the canvas to the browser viewing it when the browser is minimised or maximised.
//}

function mouseClicked() {
    //This is the blues button
        if( (mouseX > 700) &&
          (mouseX < (700 + 125)) &&
          (mouseY > 285) &&
          (mouseY < (285 + 125)))
     {
//         println( "Hi")  //This tests the button to see if it works.
         window.location.href = 'Blues.html';
         
 
 }
 //This is the jazz button
   if( (mouseX > 700) &&
          (mouseX < (700 + 125)) &&
          (mouseY > 425) &&
          (mouseY < (425 + 125)))
     {
//         println( "Hi")  //This tests the button to see if it works.
         window.location.href = 'Jazz.html';
 
 }
    //This is the metal button
       if( (mouseX > 700) &&
          (mouseX < (700 + 125)) &&
          (mouseY > 565) &&
          (mouseY < (565 + 125)))
     {
//         println( "Hi")  //This tests the button to see if it works.
         window.location.href = 'Metal.html';
 
 }
    
}

function mouseOver() {
    
       //this function changes the cursor to a quaver when moved over the buttons
      if( (mouseX > 700) &&
          (mouseX < (700 + 125)) &&
          (mouseY > 285) &&
          (mouseY < (285 + 125)))
     {
//         println( "Hi")  //This tests the mouseover to see if it works.
         cursor('Pictures/Note2.png')
 
 }

  else if( (mouseX > 700) &&
          (mouseX < (700 + 125)) &&
          (mouseY > 425) &&
          (mouseY < (425 + 125)))
     {
//         println( "Hi") //This tests the mouseover to see if it works.
         cursor('Pictures/Note2.png')
 
 }
   
      else if( (mouseX > 700) &&
          (mouseX < (700 + 125)) &&
          (mouseY > 565) &&
          (mouseY < (565 + 125)))
     {
//         println( "Hi")  //This tests the mouseover to see if it works.
         cursor('Pictures/Note2.png')
 
 }
    else {
        cursor(ARROW);
    }
    
}