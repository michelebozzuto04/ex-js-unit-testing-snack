const {
    getInitials,
    average,
    isPalindrome,
    createSlug,
    findPostById,
    addPost,
    removePost
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
describe('La funzione createSlug', () => {
    test('sostituisce gli spazi con -.', () => {
        expect(createSlug('Questo è un test')).toBe('questo-e-un-test');
    });

    test('lancia un errore se il titolo è vuoto o non valido.', () => {
        expect(() => createSlug('')).toThrow();
        expect(() => createSlug(0)).toThrow();
    });
})

let posts;

beforeEach(() => {
    posts = [
        {
            id: 1,
            title: 'Primo post',
            slug: 'primo-post'
        },
        {
            id: 2,
            title: 'Secondo post',
            slug: 'secondo-post'
        },
        {
            id: 3,
            title: 'Terzo post',
            slug: 'terzo-post'
        }
    ];
})

afterEach(() => {
    posts = [];
})

// Snack 7
describe("La funzione findPostById", () => {
    test("restituisce il post corretto dato l’array di post e l’id", () => {
        expect(findPostById(posts, 3)).toEqual({
            id: 3,
            title: 'Terzo post',
            slug: 'terzo-post'
        });
        expect(findPostById(posts, 1)).toEqual({
            id: 1,
            title: 'Primo post',
            slug: 'primo-post'
        });
    });
})

// Snack 8 (Bonus)
test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più.", () => {
    addPost(posts, { id: 4, title: 'Quarto post', slug: 'quarto-post' })
    expect(posts).toHaveLength(4);
});
test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () => {
    removePost(posts, 3)
    expect(posts).toHaveLength(2);
});

// Snack 9 (Bonus)