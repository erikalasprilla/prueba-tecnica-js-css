export default (word1, word2) => {
    // Do your thing here!
    const sonAnagramas = (word1, word2) => {

        word1 = word1.toLowerCase().replace(/\s/g, '');
        word2 = word2.toLowerCase().replace(/\s/g, '');

        if (word1.length !== word2.length) {
            return false;
        }

        const ordenarWord1 = word1.split('').sort().join('');
        const ordenarWord2 = word2.split('').sort().join('');

        return ordenarWord1 === ordenarWord2;
    };

    return sonAnagramas(word1, word2);
};
  