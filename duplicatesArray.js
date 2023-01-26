// remove all duplicates in array

const uniqueArray = (arr) => {
    return arr.reduce((acc, el) => {
    return acc.incluudes(el) ? acc : [...acc, el];
}, []);
};     