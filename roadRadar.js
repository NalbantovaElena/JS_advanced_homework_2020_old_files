function solve(input = []) {
   
    let speed = input[0];
    let typeWay = input[1];

    if (typeWay === 'motorway') {
        calc(speed, 130);
    } else if (typeWay === 'interstate') {
        calc(speed, 90);
    } else if (typeWay === 'city') {
        calc(speed, 50);
    } else if (typeWay === 'residential') {
        calc(speed, 20);
    }


    function calc(speed, kilometers) {

       let aboveSpeed = speed - kilometers;
        if (aboveSpeed > 0 && aboveSpeed <= 20) {
            console.log('speeding')
        } else if (aboveSpeed > 20 && aboveSpeed <= 40) {
            console.log('excessive speeding')
        } else if (aboveSpeed > 40) {
            console.log('reckless driving');
        }


    }

}



solve(
    [21, 'residential']
)