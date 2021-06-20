const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "p1.jpeg";

function preload() {
    // create getBackgroundImg( ) here
   getBackgroundImg ();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
   if(backgroundImg){
     background (backgroundImg)
   }
    Engine.update(engine);

    // write code to display time in correct format here
    if(hour>= 12){
      text("Time: " + hour%12 + "pm" , 50,100)
    }
    else if (hour === 0){
      text("time: 12am" , 100,100)
    }
    else{text("Time: " + hour%12 + "am" , 50,100)}
}

async function getBackgroundImg(){

    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here
   
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
        console.log(responseJSON); 
        var dateTime= responseJSON.datetime;
        hour = dateTime.slice(11,13);
        if(hour>= 06 && hour<= 08){
          bg = "p1.jpeg"
        }
        else if(hour>= 08 && hour<= 10){
            bg = "p2.jpeg"
          }
         else if(hour>= 10 && hour<= 12){
            bg = "p12.jpeg"
          }
          else if(hour>= 12 && hour<= 14){
              bg = "p4.jpeg"
            }
            else if(hour>= 14 && hour<= 16){
                bg = "p5.jpeg"
              }
              else if(hour>= 20 && hour<= 22){
                  bg = "p6.jpeg"
                }
               else if(hour>= 18 && hour<= 20){
                  bg = "p7.jpeg"
                }
                else if(hour>= 16 && hour<= 18){
                    bg = "p8.jpeg"
                  }
                  else if(hour>= 22 && hour<= 0){
                    bg = "p9.jpeg"
                  }
                  else if(hour>= 0 && hour<= 02){
                      bg = "p10.jpeg"
                    }
                else if(hour>= 02 && hour<= 03){
                    bg = "p11.jpeg"
                  }
                  else { 
                    bg = "p3.jpeg"
                  }

                 backgroundImg = loadImage(bg);

}
    
