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

function createSlug(stringa) {
    if (stringa.length < 1 || !stringa.trim(' ')) {
        throw new Error('La stringa deve avere almeno un carattere.');
    }
    if (typeof stringa !== 'string') {
        throw new Error('Nessuna stringa fornita.');
    }
    return stringa.split(' ').join('-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function findPostById(posts, id) {
    return posts.find(p => p.id === id);
}

function addPost(posts, newPost) {
    return posts.push(newPost);
}

function removePost(posts, id) {
    const post = posts.find(p => p.id === id);
    return posts.splice(posts.indexOf(post), 1);
}

module.exports = { getInitials, createSlug, average, isPalindrome, findPostById, addPost, removePost }