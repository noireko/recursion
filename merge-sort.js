function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const medio = Math.floor(arr.length / 2);
    const izq = mergeSort(arr.slice(0, medio));
    const der = mergeSort(arr.slice(medio));

    const resultado = [];

    while (izq.length > 0 && der.length > 0) {
        if (izq[0] < der[0]) {
            resultado.push(izq.shift());
        } else {
            resultado.push(der.shift());
        }
    }

    return [...resultado, ...izq, ...der];
}

function iteracionRec (n) {
    if (n === 0) {
        return 1;
    } else {
        return n + iteracionRec(n - 1);
    }
}