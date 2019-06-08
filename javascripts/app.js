// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[[0, 0]],

};

// ======================
function turnLeft(){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';     
  }
  
}

function turnRight(){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
  }
  
}

function moveForward(){
  console.log("moveForward was called")

  if (rover.direction == 'N' && rover.y > 0) {
    rover.y -= 1;
    rover.travelLog.push([rover.x, rover.y]);
  } else if (rover.direction == 'W' && rover.x > 0) {
    rover.x -= 1;
    rover.travelLog.push([rover.x, rover.y]);
  } else if (rover.direction == 'S' && rover.y < 9) {
    rover.y += 1;
    rover.travelLog.push([rover.x, rover.y]);
  } else if (rover.direction == 'E' && rover.x < 9){
    rover.x += 1;
    rover.travelLog.push([rover.x, rover.y]);
  } else {
    console.log('Please type the following direction only: N, W, S, and E. Thank you');
  }
  console.log('The rover\'s coordinates are x: ' + rover.x + ' and y: ' + rover.y );
}

function moveBackward(){
  console.log("moveBackward was called")

  if (rover.direction == 'N' && rover.y < 9) {
    rover.y += 1;
    rover.travelLog.push([rover.x, rover.y]);
  } else if (rover.direction == 'W' && rover.x < 9) {
    rover.x += 1;
    rover.travelLog.push([rover.x, rover.y]);
  } else if (rover.direction == 'S' && rover.y > 0) {
    rover.y -= 1;
    rover.travelLog.push([rover.x, rover.y]);
  } else if (rover.direction == 'E' && rover.x > 0){
    rover.x -= 1;
    rover.travelLog.push([rover.x, rover.y]);
  } else {
    console.log('Please type the following direction only: N, W, S, and E. Thank you');
  }
  console.log('The rover\'s coordinates are x: ' + rover.x + ' and y: ' + rover.y );
}

let instruction = 'rxffbb';

function commandList() {
  for (let i = 0; i < instruction.length; i++) {
    switch (instruction[i]) {
      case 'r':
        turnRight();
        break;
      case 'l':
        turnLeft();
        break;
      case 'f':
        moveForward();
        break;
      case 'b':
        moveBackward();
        break;
      default:
        console.log('Instruction not valid');
    }
  }
}

turnRight()
turnLeft()
moveForward()

console.log(rover);
console.log(instruction[2]);
console.log(instruction.length);

commandList()

console.log(rover.travelLog);