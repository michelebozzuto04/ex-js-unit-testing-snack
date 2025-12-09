const { getInitials, createSlug } = require('./snacks.js')

// Snack 1
test('"La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Michele')).toBe('M');
    expect(getInitials('Francesco')).toBe('F');
})

// Snack 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug('Michele Bozzuto')).toBe('michelebozzuto');
    expect(createSlug('Francesco')).toBe('francesco');
})