function getInitials(name) {
    return name.charAt(0);
}

function createSlug1(string) {
    return string.split(' ').join('').toLowerCase();
}

function average(numArray) {
    const somma = numArray.reduce(
        (acc, currentValue) => acc + currentValue,
        0,
    );
    return somma / numArray.length
}

function createSlug2(stringa) {
    return stringa.split(' ').join('-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

module.exports = { getInitials, createSlug1, average, createSlug2 }