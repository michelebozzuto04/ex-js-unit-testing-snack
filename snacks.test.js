const {
    getInitials,
    average,
    isPalindrome,
    createSlug
} = require('./snacks.js')

// Snack 1
test('"La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Michele')).toBe('M');
    expect(getInitials('Francesco')).toBe('F');
})

// Snack 3
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([2, 4, 6])).toBe(4);
    expect(average([10, 8])).toBe(9);
})

// Snack 5
test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome('Otto')).toBeTruthy();
    expect(isPalindrome('ingegni')).toBeTruthy();
    expect(isPalindrome('boolean')).toBeFalsy();
})

// Snack 2, 4, 6
test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug('Questo è un test')).toBe('questo-e-un-test');
})
test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug('')).toThrow();
    expect(() => createSlug(0)).toThrow();
})

const posts = [
    {
        id: 1,
        title: 'Primo post',
        slug: 'primo-posto'
    },
    {
        id: 2,
        title: 'Secondo post',
        slug: 'secondo-posto'
    },
    {
        id: 3,
        title: 'Terzo post',
        slug: 'terzo-posto'
    },
]

// Snack 7
function findPostById(posts, id) {
    return posts.find(p => p.id === id);
}
test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 3)).toEqual({
        id: 3,
        title: 'Terzo post',
        slug: 'terzo-posto'
    });
    expect(findPostById(posts, 1)).toEqual({
        id: 1,
        title: 'Primo post',
        slug: 'primo-posto'
    });
})