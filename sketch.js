var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("pink");

}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}