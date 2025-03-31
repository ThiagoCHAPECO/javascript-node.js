function returnEvenValues(array) {
    let evenNumbs = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbs.push(array[i]);
        }
    }
    console.log(evenNumbs);  // Exibe a lista final de números pares
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
returnEvenValues(array);
