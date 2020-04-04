export const duplicateItemArray = (value, array) => {
    let count = 0;

    array.forEach((arrayValue) => {
        if (parseInt(arrayValue, 10) === parseInt(value, 10)) {
            count++;
        }
    });

    return count;
};

export const removeArrayDuplicates = (array) => {
    return Array.from(new Set(array));
};

export const removeItemArray = (array, item) => {
    const index = array.indexOf(item);

    if (index > -1) {
        array.split(index, 1);
    }

    return array;
};
