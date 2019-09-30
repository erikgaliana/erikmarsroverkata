// Rover Object Goes Here
// ======================
let rovermars ={
  direction:"N",
   x:0, 
   y:0,
  travelLog: [{x:0,y:0}] 
};

//can contain one of four values: "N", "S", "E", or "W

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
 
   switch (rover.direction){
     case "N" :
       rover.direction="W";
       break;
     case "S" :
       rover.direction="E";
       break;
     case "E" :
       rover.direction="N";
       break;
     case "W" :
       rover.direction="S";
       break;
     default:
       break;
   } 
} // turnleft end

function turnRight(rover){
  console.log("turnRight was called!");

 
   switch (rover.direction){
     case "N" :
       rover.direction="E";
       break;
     case "S" :
       rover.direction="W";
       break;
     case "E" :
       rover.direction="S";
       break;
     case "W" :
       rover.direction="N";
       break;
     default:
       break;
   } 
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction){
     case "N" :
       if ( rover.y>0 ) { rover.y=rover.y-1;}
       else { console.log("Out of limits. You can't move forward")}
       break;
     case "S" :
      if (rover.y<9 ) {  
      rover.y=rover.y+1;}
      else { console.log("Out of limits. You can't move forward")}
       break;
     case "E" :
      if ( rover.x<9) { rover.x=rover.x+1;}
      else { console.log("Out of limits. You can't move forward")}
       break;
     case "W" :
      if ( rover.x>0 ) { rover.x=rover.x-1;}
      else { console.log("Out of limits. You can't move forward")}
       break;
     default:
       break;
   } 
  
   let newPosition = {x: rover.x, y: rover.y};
      rover.travelLog.push(newPosition);
}

function moveBackward(rover){
  console.log("moveBackward was called");
  switch (rover.direction){
     case "N" :
       if ( rover.y<9 ) { rover.y=rover.y+1;}
       else { console.log("Out of limits. You can't move backward")}
       break;
     case "S" :
      if (rover.y>0 ) {  
      rover.y=rover.y-1;}
      else { console.log("Out of limits. You can't move backward")}
       break;
     case "E" :
      if ( rover.x>0) { rover.x=rover.x-1;}
      else { console.log("Out of limits. You can't move backward")}
       break;
     case "W" :
      if ( rover.x<9 ) { rover.x=rover.x+1;}
      else { console.log("Out of limits. You can't move backward")}
       break;
     default:
       break;
   } 
  
   let newPosition = {x: rover.x, y: rover.y};
      rover.travelLog.push(newPosition);
}


function rovermoving(rover, orders){
 
  for (let i = 0; i < orders.length; i++){
    let order = orders[i];
    switch(order){
      case "l": // left
        turnLeft(rovermars);
        break;
      case "r": // right
        turnRight(rovermars);
        break;  
      case "f": // forward
        moveForward(rovermars);
        break; 
      case "b": // backwards
        moveBackward(rovermars);
        break;
      
      default:
        console.log(`Order ${orders[i]} not valid. Please retry`);
        break;
    }
  }
}// end of rovermoving

rovermoving(rovermars,"rfrb");
console.log(rovermars.travelLog); // print rovermars path


/* turn left test
console.log(rovermars.direction);
turnLeft(rovermars);
console.log(rovermars.direction);
turnLeft(rovermars);
console.log(rovermars.direction);
turnLeft(rovermars);
console.log(rovermars.direction);
turnLeft(rovermars);
console.log(rovermars.direction);

 turn  right test
console.log(rovermars.direction);
turnRight(rovermars);
console.log(rovermars.direction);
turnRight(rovermars);
console.log(rovermars.direction);
turnRight(rovermars);
console.log(rovermars.direction);
turnRight(rovermars);
console.log(rovermars.direction);

// moving forward test
console.log(rovermars);
turnRight(rovermars);
console.log(rovermars);
moveForward(rovermars);
console.log(rovermars);
turnRight(rovermars);
console.log(rovermars);
moveForward(rovermars);
console.log(rovermars);
*/