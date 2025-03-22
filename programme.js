//challenge two
// function that prompts the user to input the speed of the car
function speedDetector() {
    let speed = parseInt(prompt("enter the speed of the car:"));

    //checking if speed is a valid number
    if (isNaN(speed) || speed < 0) {
        alert("please enter a valid speed.");
        return;
    }

    // defining the speed limit
const speedLimit = 70;

//check if speed is above limit
if (speed < speedLimit) {
    alert("ok");
} else {
    //calculating number of demerit points
    let demeritPoints = Math.floor((speed - speedLimit) / 5);

    //checking points if they are greater than 12
    if (demeritPoints > 12) {
        alert("license suspended");
    }else {
        alert(`points: ${demeritPoints}`);
    }
}
}

//calling the functions
speedDetector();

