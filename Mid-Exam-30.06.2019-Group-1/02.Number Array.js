function numberArray(arr) {
    let numberArr = arr
        .shift()
        .split(' ');

    numberArr = numberArr.map(Number);

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ')[0];

        if (command === 'Switch') {
            let index = Number(arr[i].split(' ')[1]);

            if (index >= 0 && index < numberArr.length) {
                let switchedNumber = numberArr[index];

                if (switchedNumber > 0) {
                    numberArr[index] = switchedNumber * -1;
                } else if (switchedNumber < 0) {
                    numberArr[index] = Math.abs(switchedNumber);
                }
            }

        } else if (command === 'Change') {
            let index = Number(arr[i].split(' ')[1]);
            let value = Number(arr[i].split(' ')[2]);

            if (index >= 0 && index < numberArr.length) {
                numberArr.splice(index, 1, value);
            }
        } else if (command === 'Sum') {
            let second = arr[i].split(' ')[1];

            if (second === 'Negative') {
                let printedArr = numberArr.filter(a => a < 0);
                let sum = printedArr.reduce((a, b) => a + b, 0);

                console.log(sum);

            } else if (second === 'Positive') {
                let printedArr = numberArr.filter(a => a >= 0);
                let sum = printedArr.reduce((a, b) => a + b, 0);

                console.log(sum);

            } else if (second === 'All') {
                let result = numberArr.reduce((a, b) => a + b, 0);

                console.log(result);
            }
        }
    }
    let result = numberArr.filter(a => a >= 0);
    console.log(result.join(' '));
}

numberArray(['1 2 3 4 5 4 3 2 1 0',
    'Switch -4',
    'Change 13 0',
    'Switch 0',
    'Sum All',
    'End']);