// Code your solution in this file!

function distanceFromHqInBlocks(location) {
  if(location >= 42){
    return location - 42;
  }else if(location < 42){
    return 42 - location;
  }
}

function distanceFromHqInFeet(destination,currentLocation) {
  let distance;
  distanceFromHqInBlocks(currentLocation);
  if (42 >= destination) {
   return distance = ((42 - destination)*264)
} else if (42 < destination){
   return distance = ((destination - 42)*264)
}
}

function distanceTravelledInFeet(startPoint, endPoint) {
  if (startPoint >= endPoint) {
    return ((startPoint - endPoint)*264)
 } else if (startPoint < endPoint){
    return ((endPoint - startPoint)*264)
 }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let fee;
  if(distance <= 400) {
   return fee = 0;
  } else if(distance > 400 && distance < 2000) {
    return fee = (distance - 400)*0.02;
  } else if (distance > 2000 && distance < 2500) {
    return fee = 25;
  } else if(distance > 2500){
    return fee = 'cannot travel that far';
  }
}