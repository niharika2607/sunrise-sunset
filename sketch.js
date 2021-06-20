/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ="sunrise1.png";
var hr,sec,time;
function preload() {
  getBackgroundImg()

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
background(backgroundImg)
    // add condition to check if any background image is there to add
  //  getBackgroundImg()


    Engine.update(engine);
    fill("black");
    textSize(30);
    if(hr>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
       }else if(hr==0){
         text("Time : 12 AM",100,100);
       }else{
        text("Time : "+ hour%12 + " AM", 50,100);
       }

    // write code to display time in correct format here

}

async function getBackgroundImg(){

    // write code to fetch time from API
var responce=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var resJSON=await responce.json()
var datetime=resJSON.datetime
    //change the data in JSON format
hr=datetime.slice(11,13)
 sec=datetime.slice(17,19)
 time=datetime.slice(11,19)
//textSize(20)
   // text("time:"+time,50,650)

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset
/*if(sec>=00&&sec<=02){
    bg="sunrise1.png"
}else if(sec>=03&&sec<=05){
    bg="sunrise2.png"
}else if(sec>=06&&sec<=07){
    bg="sunrise3.png"
}else if(sec>=08&&sec<=10){
    bg="sunrise4.png"
}else if(sec>=11&&sec<=13){
    bg="sunrise5.png"
}else if(sec>=14&&sec<=16) {
    bg="sunrise6.png"
}else if(sec>=17&&sec<=19){
    bg="sunset7.png"
}else if(sec>=20&&sec<=22){
    bg="sunset8.png"
}else if(sec>=23&&sec<=25){
    bg="sunset9.png"
}else if(sec>=26&&sec<=28){
    bg="sunset10.png"
}else if(sec>=29&&sec<=31){
    bg="sunset11.png"
}else if(sec>=32&&sec<=35){
    bg="sunset12.png"
}else{
    bg="PRAISYWHITE.png"
    var timeline = 60-sec
    textSize(50)
    strokeWeight(10)
    stroke("yellow")
    fill("blue")
    text(`'PLEASE WAIT FOR
            '`+timeline,380,330)
}
if(hr>=04 && hr<=06 ){
    debugger;
    bg = "sunrise1.png";
}else if(hr>=06 && hr<=08 ){
    debugger;
    bg = "sunrise2.png";
}else if(hr>=08 && hr<=11 ){
    debugger;
    bg = "sunrise3.png";
}else if(hr>=11 && hr<=13){
    debugger;
    bg = "sunrise4.png";
}else if(hr>=13 && hr<=15){
    debugger;
    bg = "sunrise5.png";
}else if(hr>=15 && hr<=17 ){
    debugger;
    bg = "sunrise6.png";
}else if(hr>=17 && hr<=18 ){
    debugger;
    bg = "sunset7.png";
}else if(hr>=18 && hr<=20 ){
    debugger;
    bg = "sunset8.png";
}else if(hr>=20 && hr<=23 ){
    debugger;
    bg = "sunset9.png";
}else if(hr>=23 && hr==0){
    debugger;
    bg = "sunset10.png";
}else if(hr==0 && hr<=03){
    debugger;
    bg = "sunset11.png";
}else{
    debugger;
    bg = "sunset12.png";
}
backgroundImg=loadImage(bg)
    //load the image in backgroundImg variable here
console.log(sec)
}*/
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise1.png";

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
     // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);
    // write code to display time in correct format here
    fill("black");
    textSize(30);

    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
       }else if(hour==0){
         text("Time : 12 AM",100,100);
       }else{
        text("Time : "+ hour%12 + " AM", 50,100);
       }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    
    // write code slice the datetime
    hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06 ){
        bg = "sunrise1.png";
    }else if(hour>=06 && hour<=08 ){
        bg = "sunrise2.png";
    }else if(hour>=08 && hour<=11 ){
        bg = "sunrise3.png";
    }else if(hour>=11 && hour<=13){
        bg = "sunrise4.png";
    }else if(hour>=13 && hour<=15){
        bg = "sunrise5.png";
    }else if(hour>=15 && hour<=17 ){
        bg = "sunrise6.png";
    }else if(hour>=17 && hour<=18 ){
        bg = "sunset7.png";
    }else if(hour>=18 && hour<=20 ){
        bg = "sunset8.png";
    }else if(hour>=20 && hour<=23 ){
        bg = "sunset9.png";
    }else if(hour>=23 && hour==0){
        bg = "sunset10.png";
    }else if(hour==0 && hour<=03){
        bg = "sunset11.png";
    }else{
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
