function distanceCalculator(arr) {
    let stepsMade = Number(arr.shift());
    let length = Number(arr.shift());
    let distance = Number(arr.shift()) * 100;
    let percentage = 0;

    let fifthStep = Math.floor(stepsMade / 5);
    let distanceWithoutFifth = stepsMade - fifthStep;

    let result = distanceWithoutFifth * length;
    result += fifthStep * (length * 0.7);

    if (result > 100) {
        percentage = (result / distance) * 100;
    } else {
        percentage = (result / distance) * 100;
    }
    console.log(`You travelled ${percentage.toFixed(2)}% of the distance!`);

}

distanceCalculator(['5000', '7.5', '500']);