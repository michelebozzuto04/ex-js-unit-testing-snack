function getInitials(name) {
    return name.charAt(0);
}

function average(numArray) {
    const somma = numArray.reduce(
        (acc, currentValue) => acc + currentValue,
        0,
    );
    return somma / numArray.length
}

function isPalindrome(stringa) {
    let isPal;
    for (let i = 0; i < stringa.length; i++) {
        if (stringa.toLowerCase().charAt(i) === stringa.toLowerCase().charAt(stringa.length - 1 - i)) {
            isPal = true;
        } else {
            isPal = false;
            break;
        }
    }
    return isPal;
}

function createSlug(stringa, posts) {
    // Gestione degli errori
    if (stringa.length < 1 || !stringa.trim(' ')) {
        throw new Error('La stringa deve avere almeno un carattere.');
    }
    if (typeof stringa !== 'string') {
        throw new Error('Nessuna stringa fornita.');
    }

    // Creazione dello slug
    const newSlug = stringa.split(' ').join('-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const incrementSlug = (slug) => {
        return slug + '-1'
    }

    // Controllo sull'array di post
    if (posts) {
        const isSlugUsed = posts.some(p => p.slug === newSlug);
        if (isSlugUsed) {
            return incrementSlug(newSlug)
        }
    }
    return newSlug;
}

function findPostById(posts, id) {
    return posts.find(p => p.id === id);
}

function addPost(posts, newPost) {
    const isIdUsed = posts.some(p => p.id === newPost.id);
    const isSlugUsed = posts.some(p => p.slug === newPost.slug);
    if (isIdUsed) {
        throw Error('Id già esistente')
    }
    if (isSlugUsed) {
        throw Error('Slug già esistente')
    }
    return posts.push(newPost);
}

function removePost(posts, id) {
    const post = posts.find(p => p.id === id);
    return posts.splice(posts.indexOf(post), 1);
}

module.exports = { getInitials, createSlug, average, isPalindrome, findPostById, addPost, removePost }