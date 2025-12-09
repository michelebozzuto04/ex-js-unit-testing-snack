const { getInitials, average, createSlug1, createSlug2 } = require('./snacks.js')

// Snack 1
test('"La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Michele')).toBe('M');
    expect(getInitials('Francesco')).toBe('F');
})

// Snack 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug1('Michele Bozzuto')).toBe('michelebozzuto');
    expect(createSlug1('Francesco')).toBe('francesco');
})

// Snack 3
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([2, 4, 6])).toBe(4);
    expect(average([10, 8])).toBe(9);
})

// Snack 4
test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug2('Questo è un test')).toBe('questo-e-un-test');
    expect(createSlug2('Prova 2')).toBe('prova-2');
})