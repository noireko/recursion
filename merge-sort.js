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

function iteracionRec(n) {
    if (n === 0) {
        return 1;
    } else {
        return n + iteracionRec(n - 1);
    }
}

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function multiArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * multiArray(arr.slice(1));
}

function reverse(str) {
    if (str.length === 0) return "";
    return str.slice(-1) + reverse(str.slice(0, -1));
}

function isPalindrome(str) {
    if (str.length === 0) {
        return true;
    } else if (str.length === 1) {
        return true;
    } else if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, -1));
}

function sumDigits(num) {
    if (num === 0) return num;
    const restoNum = sumDigits(Math.floor(num / 10));
    return num % 10 + restoNum;
}

function power(base, exp) {
    if (exp === 0) return 1;
    return base * power(base, exp - 1)
}

function countDown(n) {
    if (n === 0) return [];
    return [n].concat(countDown(n - 1))
}