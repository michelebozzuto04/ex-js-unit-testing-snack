function getInitials(name) {
    return name.charAt(0);
}

function createSlug(string) {
    return string.split(' ').join('').toLowerCase();
}

module.exports = { getInitials, createSlug }